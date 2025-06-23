import numpy as np
from sentence_transformers import util
from preprocessing import bm25_tokenizer

class RAGModel:
    def __init__(self, model_embed, model_rerank, bm25, model, legal):
        self.model_embed = model_embed
        self.model_rerank = model_rerank  # Mô hình reranker (ví dụ: cross-encoder)
        self.rank_bm25 = bm25
        self.model_finetune = model
        # self.llm = llm
        self.weight = [0.6, 0.3, 0.1]
        self.legal = legal
        self.data_embed = None
        self.data_finetune = None

    def load_data(self):
        self.data_embed = np.load('D:\\CBJS\\nlp\\retrieval_web\\embedding\\embed_embedding.npy') 
        self.data_finetune = np.load('D:\\CBJS\\nlp\\retrieval_web\\embedding\\finetune_embedding.npy') 

    def bm25_score(self, query):
        query_tokens = bm25_tokenizer(query)
        doc_scores = self.rank_bm25.get_scores(query_tokens)
        min_score = np.min(doc_scores)
        max_score = np.max(doc_scores)
        normalized_scores = (doc_scores - min_score) / (max_score - min_score)
        return normalized_scores

    def bert_search(self, query):
        query_finetune = self.model_finetune.encode(query).reshape(1, -1)
        query_embed = self.model_embed.encode(query).reshape(1, -1)
        embed = []
        finetune = []
        for i in range(61425):
            embed.append(util.cos_sim(query_embed, self.data_embed[i]))
            finetune.append(util.cos_sim(query_finetune, self.data_finetune[i]))
        score_embed = np.array(embed)
        score_finetune = np.array(finetune)
        return score_finetune.reshape(-1), score_embed.reshape(-1)

    def merge_score(self, score_embed, score_finetune, normalized_scores):
        weighted_finetune = score_finetune * self.weight[0]
        weighted_embed = score_embed * self.weight[1]
        weighted_normalized = normalized_scores * self.weight[2]
        new_scores = weighted_finetune + weighted_embed + weighted_normalized
        indices = np.argpartition(new_scores, len(new_scores) - 10)[-10:]
        top_10_indices = indices[np.argsort(-new_scores[indices])]
        return top_10_indices

    def rerank(self, query, top_10_indices):
        # Sử dụng mô hình reranker (ví dụ: cross-encoder) để rerank kết quả
        reranker_inputs = []
        legal_list = list(self.legal.keys())
        for idx in top_10_indices:
            law_keys = legal_list[idx]
            law_content = self.legal[law_keys]['text']
            reranker_inputs.append((query, law_content))
        
        # Dự đoán điểm với mô hình reranker
        reranked_scores = self.model_rerank.predict(reranker_inputs)
        reranked_indices = np.argsort(-np.array(reranked_scores))
        
        # Sắp xếp lại indices dựa trên reranker
        return [top_10_indices[i] for i in reranked_indices],reranked_indices

    def make_articles(self, indices):
        articles = ''
        legal_list = list(self.legal.keys())
        count = 0
        for i in indices:
            if count>0:
                break
            law_keys = legal_list[i]
            print(law_keys)
            law_tittle, article_id = law_keys.split('_')
            law_content = self.legal[law_keys]['text']
            law = f'\n Theo điều {law_tittle} khoản {article_id} \n Nội dung: {law_content} \n \n'
            articles += law
            count+=1
        return articles
    def score(self,indices,ans): 
        legal_list = list(self.legal.keys())
        count = 1
        for i in indices:
            law_keys = legal_list[i]
            law_tittle, article_id = law_keys.split('_')
            for i in ans:
                if law_tittle == i['law_id'] and article_id == i['article_id']:
                    return count
            count+=1
        return 0
#     def generate(self, articles, query):
#         prompt = f"""Bạn là một luật sư chuyên nghiệp và giàu kinh nghiệm tại Việt Nam. Dựa chỉ trên các điều luật được cung cấp dưới đây, hãy xác định điều khoản nào có chứa thông tin phù hợp để trả lời câu hỏi.
# Thông tin điều luật: {articles}
# Câu hỏi: {query}"""

#         response = self.llm.invoke(prompt)
#         print(response)

#     def search(self, query):
#         self.load_data()
#         normalized_scores = self.bm25_score(query)
#         dis_finetune, dis_embed = self.bert_search(query)
#         predictions = self.merge_score(dis_finetune, dis_embed, normalized_scores)
#         reranked_predictions = self.rerank(query, predictions)
        
#         articles = self.make_articles(reranked_predictions)
#         self.generate(articles, query)
    def predict(self,query):
        self.load_data()
        normalized_scores = self.bm25_score(query)
        dis_finetune, dis_embed = self.bert_search(query)
        predictions = self.merge_score(dis_finetune, dis_embed, normalized_scores)
        reranked_predictions,reranked_indices = self.rerank(query, predictions)
        articles = self.make_articles(reranked_predictions)
        return articles

# # Khởi tạo RAGModel với reranker
# a = RAGModel(model_embed, model_rerank, bm25, model, legal, llm)
def RAGmodel(model_embed, model_rerank, bm25, model, legal):
    a = RAGModel(model_embed, model_rerank, bm25, model, legal)
    return a