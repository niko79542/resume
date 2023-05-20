const test = document.getElementsByClassName('visitor')[0];
const viewsBaseUrl = "https://m2aumzy395.execute-api.us-west-1.amazonaws.com/";
const getViews = viewsBaseUrl + "dev/get_views";
const incrementViews = viewsBaseUrl + "dev/put_view";

const putRequest = {
    method: 'PUT'
}
const headers = {
    headers: {
        'Content-Type': 'application/json'
      },
}

const views = "views";
if (window.localStorage.getItem(views)) {
    test.innerHTML = window.localStorage.getItem(views);
}


fetch(incrementViews, {...putRequest, ...headers}).catch((err) => {
    console.log(err);
})

fetch(getViews, headers).then((data) => {
    return data.json();
}).then((data) => {
    test.innerHTML = data[views];
    window.localStorage.setItem(views, data[views]);
}).catch((err) => {
    console.log(err);
})