var test = document.getElementById('counter');
var apiEndpoint = "https://psjp9phkq0.execute-api.us-west-1.amazonaws.com/dev/posts/all";

function incrementMe() {
    var nextnum = parseInt(test.innerHTML) + 1
    
    test.innerHTML = nextnum;

    fetch(apiEndpoint, {mode: 'no-cors'}).then((data) => {
        console.log(data);
        return data.json;
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
}