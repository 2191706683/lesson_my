import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
    // chatgpt  key
    apiKey: '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'
})
// api? 写首诗
const openai = new OpenAIApi(configuration)

try {
    const response = await openai.createCompletion({
        medel: 'text-davinci-003', // 达芬奇模型
        prompt: '写一首描述春天的诗歌',
        temperature: 0.7, // 0-2
        max_tokens: 256 // 分词 费用 3.5 4000 4.0 8倍

    })
    console.log(response.data)
} catch (error) {
    console.log(error)
}