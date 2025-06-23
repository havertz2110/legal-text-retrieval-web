# Hướng dẫn Setup và Chạy Backend - Vietnamese Legal Retrieval System

## Prerequisites
- Windows OS
- Python 3.11 (specifically - đừng dùng version khác)
- Git

## Bước 1: Clone và Setup Project Structure

```bash
# Clone project
git clone <your-repo-url>
cd retrieval_web

# Kiểm tra structure - phải có các folder này:
# ├── backend/
# ├── embedding/
# ├── model/
# ├── data/
# └── src/
```

## Bước 2: Kiểm tra Python Version

```bash
# Check Python 3.11 có available không
python3 --version
py -3.11 --version

# Nếu chưa có Python 3.11, download từ python.org
# hoặc dùng pyenv/conda để install
```

## Bước 3: Install Dependencies Directly

```bash
cd backend
```

## Bước 4: Install Packages One by One (Exactly như bạn đã làm)

```bash
# Install packages theo đúng order như bạn đã làm:

# 1. Basic Flask setup
py -3.11 -m pip install flask
py -3.11 -m pip install flask_cors

# 2. Sentence transformers (sẽ lâu - chill)
py -3.11 -m pip install sentence_transformers

# 3. Vietnamese NLP
py -3.11 -m pip install underthesea

# 4. LangChain stuff
py -3.11 -m pip install langchain_anthropic
py -3.11 -m pip install langchain_community

# 5. BM25 for search
py -3.11 -m pip install rank_bm25

# Note: Mỗi lần install sẽ có warnings về PATH - ignore them, app vẫn chạy ok
```

## Bước 5: **QUAN TRỌNG** - Fix File Paths

Mở các files sau và sửa đường dẫn cho đúng với máy của bạn:

### File: `backend/app.py`
```python
# Line 13-15: Sửa path này
bm25_path = r" retrieval_web\model\bm25_Plus_04_06_model_full_manual_stopword"
```
**Thay đổi thành:**
```python
bm25_path = r"<ĐƯỜNG_DẪN_ĐẾN_PROJECT>\retrieval_web\model\bm25_Plus_04_06_model_full_manual_stopword"
```

### File: `backend/rag_model.py`
```python
# Tìm và sửa các đường dẫn này:
self.data_embed = np.load('...\\embedding\\embed_embedding.npy')
```
**Thay đổi thành:**
```python
self.data_embed = np.load(r'<ĐƯỜNG_DẪN_ĐẾN_PROJECT>\retrieval_web\embedding\embed_embedding.npy')
```

**Ví dụ cụ thể:** Nếu project ở ` retrieval_web\` thì:
```python
# app.py
bm25_path = r" retrieval_web\model\bm25_Plus_04_06_model_full_manual_stopword"

# rag_model.py  
self.data_embed = np.load(r' retrieval_web\embedding\embed_embedding.npy')
```

## Bước 6: Kiểm tra Required Files

Ensure các files sau tồn tại:
```
model/
└── bm25_Plus_04_06_model_full_manual_stopword

embedding/
├── embed_embedding.npy
└── finetune_embedding.npy

data/
└── (processed data files)
```

## Bước 6: Chạy Backend

```bash
# Đảm bảo đang ở folder backend
cd backend

# Chạy bằng Python 3.11 directly 
py -3.11 app.py
```

** Output:**
```
modules.json: 100%|████████████████| 229/229 [00:00<00:00, 217kB/s]
config_sentence_transformers.json: 100%|███████████| 123/123 [00:00<00:00, 118kB/s]
README.md: 100%|██████████████████| 6.46k/6.46k [00:00<00:00, 6.98MB/s]
...model downloads...
* Serving Flask app 'app'
* Debug mode: on
* Running on http://127.0.0.1:5000
```





## Notes cho Security Research Context

- Project này dùng các ML models để legal document retrieval
- Sentence transformers sẽ download models lần đầu (~540MB)
- BM25 model cần được train sẵn với legal corpus
- Embedding files khá lớn (~180MB each) - ensure đủ disk space

## Performance Tips

- Lần đầu chạy sẽ slow vì download models
- Subsequent runs sẽ faster
- Consider GPU support nếu có CUDA setup
- Memory usage ~2-3GB cho các models

---