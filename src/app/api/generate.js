export default async function handler(req, res) {
  const { prompt } = req.body

  const apiKey = process.env.OPENAI_API_KEY
  const url = 'https://api.openai.com/v1/chat/completions'

  const body = JSON.stringify({
    messages: [
      {
        "role": "user", "content": prompt
      }
    ],
    model: 'gpt-4',
    stream: false,
  })

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body,
    })
    const data = await response.json()

    if(data?.error){
      return res.status(429).json({ data })
    }

    // example data
    // {
    //   "data":{
    //     "id": "chatcmpl-8ggs8eBWMc...",
    //     "object":"chat.completion",
    //     "created":1705185268,
    //     "model":"gpt-4-0613",
    //     "choices":\[
    //       {
    //         "index":0,
    //         "message":{
    //           "role": "assistant",
    //           "content": "Não é possível responder à sua pergunta sem mais contexto. A situação de um time de futebol, como o São Paulo, pode variar de acordo com o ano e a competição em que está envolvido. Portanto, para resposta atualizada, recomendo buscar as últimas notícias sobre o São Paulo FC."
    //         },
    //         "logprobs":null,
    //         "finish_reason":"stop"
    //       }\
    //     ],
    //     "usage":{
    //       "prompt_tokens":23,
    //       "completion_tokens":70,
    //       "total_tokens":93
    //     },
    //     "system_fingerprint":null
    //   }
    // }


    res.status(200).send(data.choices[0].message.content)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
