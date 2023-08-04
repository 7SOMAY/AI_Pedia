const url = 'https://chatgpt-gpt4-ai-chatbot.p.rapidapi.com/ask';
const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '1749f307ebmsh5bb93499c8c926fp1f6dd2jsn4e35899619ba',
        'X-RapidAPI-Host': 'chatgpt-gpt4-ai-chatbot.p.rapidapi.com'
    },
    body: {
        query: 'How to increase sex time'
    }
};

const Chatbot = async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

Chatbot();