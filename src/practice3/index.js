export const getPoetry = () => fetch('https://v1.jinrishici.com/all.json')
    .then(response => response.json())
    .then(data => {

            // TODO feedback: 可以用ES6解构 result
        let result = [];
        result.push(data.origin);
        result.push(data.author);
        result.push(data.content);
        return result;
    }).catch(error => "error");
