# 商品搜索 
import pandas as pd
import openai
#计算 向量间的相似度
from openai.embeddings_utils import get_embedding, cosine_similarity
# 调用openai 的接口 准备好50条数据
openai.api_key="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"
embedding_model = "text-embeddings-ada-002"

product_embedding = get_embedding("手机", engine=embedding_model)
product_embedding2 = get_embedding("iphone", engine=embedding_model)
product_embedding3 = get_embedding("手表", engine=embedding_model)
print(product_embedding, product_embedding2, product_embedding3)
similarity = cosine_similarity(product_embedding, product_embedding2)
similarity2 = cosine_similarity(product_embedding, product_embedding3)
print(similarity, similarity2)