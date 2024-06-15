const fetchStream = (options = {}, callback) => {
    fetch(options.api, { method: 'POST', headers: fetchStreamHeader(options), body: JSON.stringify(fetchStreamData(options)) })
        .then(response => fetchHandleResponse(response))
        .then(async readableStream => await fetchHandleStream(readableStream, callback))
        .catch(error => console.error('Error:', error));
};

const fetchStreamHeader = ({ key }) => {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
}

const fetchStreamData = ({ fromLang, toLang, model, isStream, randomValue, inputText }) => {
    return {
        "model": model,
        "temperature": Number(randomValue),
        "max_tokens": 1000,
        "top_p": 1,
        "frequency_penalty": 1,
        "presence_penalty": 1,
        "stream": isStream == 'true' ? true : false,
        "messages": [
            {
                "role": "system",
                "content": `translate from ${fromLang} to ${toLang}`
            },
            {
                "role": "user",
                "content": `"${inputText}"`
            }
        ]
    }
}

const fetchHandleResponse = (response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.body;
}

const fetchHandleStream = async (readableStream, callback) => {
    const reader = readableStream.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop();

        for (const line of lines) {

            if (line.startsWith('data: ')) {

                if (line.substring(6).trim() == '[DONE]') {
                    callback({
                        done: true
                    })
                    return
                }

                const message = JSON.parse(line.substring(6));

                if (message.choices[0].delta.content) {
                    callback(message.choices[0].delta.content)
                }
            }
        }
    }
}