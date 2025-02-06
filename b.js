const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const rssUrl = 'https://news.google.com/rss/search?q=programming';

async function fetchRss() {
    const response = await fetch(proxyUrl + rssUrl);
    const text = await response.text();
    console.log(text);
}

fetchRss();
