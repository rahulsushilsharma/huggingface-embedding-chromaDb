
# Huggingface embeddings

Hugging face Embeddings function for Chroma Db

## Installation

```sh
npm i huggingface-embeddings
``` 

## Example Usage

```ts
import { ChromaClient } from 'chromadb';
import { HuggingFaceEmbeddingFunction } from 'huggingface-embeddings'

const API_URL = "https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-mpnet-base-v2" //example embedding model
const API_KEY = "my-api-key" // your hugging face api key
const client = new ChromaClient();
const embedder = new HuggingFaceEmbeddingFunction({ api_path: API_URL, api_key: API_KEY })

const collection = await client.createCollection({ name: "test1", embeddingFunction: embedder })

await collection.add({
    ids: ["id1", "id2", "id3"],
    metadatas: [{ "chapter": "3", "verse": "16" }, { "chapter": "3", "verse": "5" }, { "chapter": "29", "verse": "11" }],
    documents: ["lorem ipsum...", "doc2", "doc3"],
})

const results = await collection.query({
    nResults: 2,
    queryTexts: ["doc"]
})
console.log(results);


```

## Contributions

- If you happen to see missing feature or a bug, feel free to open an issue.
- Pull requests are welcomed too!

## License

[MIT](LICENSE.md)
