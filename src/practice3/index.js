export const getPoetry = () => fetch('https://v1.jinrishici.com/all.json')
    .then(response => response.json())
    .then(data => {
        let result = [];
        result.push(data.origin);
        result.push(data.author);
        result.push(data.content);
        return result;
    }).catch(error => "error");