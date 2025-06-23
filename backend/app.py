from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
from sentence_transformers import CrossEncoder, SentenceTransformer
from rag_model import RAGModel
import json
from langchain_anthropic import ChatAnthropic
from langchain_core.prompts import ChatPromptTemplate, PromptTemplate, FewShotChatMessagePromptTemplate
from langchain_community.llms import Ollama
# Load BM25 model
bm25_path = 'D:\\CBJS\\nlp\\retrieval_web\\model\\bm25_Plus_04_06_model_full_manual_stopword'
with open(bm25_path, "rb") as bm_file:
    bm25 = pickle.load(bm_file)

# Load embedding and ranking models
model_embed = SentenceTransformer('bkai-foundation-models/vietnamese-bi-encoder')
model = SentenceTransformer('D:\\CBJS\\nlp\\retrieval_web\\model\\round2')
MODEL_ID = 'itdainb/PhoRanker'
MAX_LENGTH = 256

# Load legal dictionary
with open("D:\\CBJS\\nlp\\retrieval_web\\data\\legal_dict.json", "r", encoding="utf-8") as file:
    legal = json.load(file)

# Load re-ranking model
model_rerank = CrossEncoder(MODEL_ID, max_length=MAX_LENGTH)
# llm = Ollama(model="llama3.2")
retrieval_model = RAGModel(model_embed, model_rerank, bm25, model, legal)
# def rewrite(question):
#     system_rewrite = """Hãy viết lại câu hỏi sau một cách đầy đủ và ý nghĩa.
#     """

#     prompt = ChatPromptTemplate.from_messages(
#         [
#             ("system", system_rewrite),
#             ("human", "{question}"),
#         ]
#     )

#     chain = prompt | llm

#     response = chain.invoke({
#         "question": question
#     })
#     return response.split('\n')[-1].replace('"', '')
# Initialize Flask app
app = Flask(__name__)

# Enable CORS
CORS(app)  # Allow all origins by default

@app.route('/retrieval', methods=['POST'])
def predict():
    # Get the query from the request body (assumes it's a JSON object)
    data = request.get_json()
    print(data)
    query = data.get('query', None)  # Access the 'query' field
    # query_expansion = data.get('expansion', None)
    # if query_expansion:
    #     query = rewrite(query)
    if query:
        # Predict using the retrieval model
        articles = retrieval_model.predict(query)
        # if query_expansion:
        #     new_articles=f"Câu hỏi mới: {query} \n"
        #     new_articles+=articles
        # Return the prediction as a JSON response
        return jsonify({'articles': articles})
    else:
        return jsonify({'error': 'Query not provided'}), 400

if __name__ == '__main__':
    app.run(debug=True)
