interface IEmbeddingFunction {
    generate(texts: string[]): Promise<number[][]>;
}
export class HuggingFaceEmbeddingFunction implements IEmbeddingFunction {
    private api_key: string;
    private api_path: string;

    constructor({
        api_path,
        api_key,
    }: {
        api_path: string
        api_key: string,
    }) {

        this.api_key = api_key;
        this.api_path = api_path;

    }

    public async generate(texts: string[]): Promise<number[][]> {

        const res = await fetch(this.api_path, {
            method: "POST",
            headers: { "Authorization": `Bearer ${this.api_key}` },
            body: JSON.stringify({
                "inputs": texts
            })
        }).catch(e => {
            console.error(e)
            throw new Error('Failed to fetch')
        })


        const response: any = await res.json().catch(e => {
            console.error(e)
            throw new Error('unknown response')
        })
        // console.log(response);

        return response;
    }
}
