# 商品搜索 
import pandas as pd
import openai, backoff
#计算 向量间的相似度
from openai.embeddings_utils import get_embeddings,get_embedding, cosine_similarity
# 调用openai 的接口 准备好50条数据
openai.api_key="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"
# chatgpt 使用的模型 
COMPLETION_MODEL = "text-davinci-003"
embedding_model = "text-embeddings-ada-002"

batch_size = 100

@backoff.on_exception(backoff.expo, openai.error.RateLimitError)
def get_embeddings_with_backoff(prompts, engine):
    embeddings = []
    for i in range(0, len(prompts), batch_size):
        batch = prompts[i:i+batch_size]
        embeddings += get_embeddings(list_of_text=batch, engine=engine)
    return embeddings

def generate_data_by_prompt(prompt):
    response = openai.Completion.create(
        engine=COMPLETION_MODEL,
        prompt=prompt,
        temperature=0.5,
        max_tokens=2048,
        top_p=1
    )
    return response.choices[0].text

prompt = """请你生成50条淘宝网里的商品的标题，
每条在30个字左右,品类是3C数码产品，
标题里往往也有一些促销类的信息，每行一条。
"""
data= generate_data_by_prompt(prompt)
# print(data)
product_names = data.strip().split("\n")
df = pd.DataFrame({'product_name':product_names})
df.head()
df.product_name = df.product_name.apply(lambda x: x.split(".")[1].strip())
df.head()

clothes_prompt = """
请你生成50条淘宝网里的商品的标题，每条在30个字左右，品类是女性的服饰箱包等等，
标题里往往也有一些促销类的信息，每行一条。    
"""
clothes_data = generate_data_by_prompt(clothes_prompt)
clothes_product_names = clothes_data.strip().split("\n")

clothes_df = pd.DataFrame({'product_name':clothes_product_names})
clothes_df.product_name = clothes_df.product_name.apply(
    lambda x: x.split(".")[1].strip())
clothes_df.head()

df = pd.concat([df, clothes_df], axis=0)
df = df.reset_index(drop=True)
# print(df.product_name)

prompts = df.product_name.tolist()
prompt_batches = [prompts[i:i+batch_size] for i in range(0, len(prompts), batch_size)]

embeddings = []
for batch in prompt_batches:
    batch_embeddings = get_embeddings_with_backoff(prompts=batch, engine=embedding_model)
    embeddings += batch_embeddings

df["embedding"] = embeddings
df.to_parquet("data/taobao_product_title.parquet", index=False)

def search_product(df, query, n=3, pprint=True):
    product_embedding = get_embedding(
        query, engine = embedding_model
    )
    df["similarity"] = df.embedding.apply(lambda x: cosine_similarity(x, product_embedding))
    results = (
        df.sort_values("similarity", ascending=False)
        .head(n)
        .product_name
    )
    if pprint:
        for r in results:
            print(r)
    return results
        
results = search_product(df, "手机", n=3)
print(results)

