const rssUrl = "https://news.google.com/rss/search?q=programming";

async function a () {
    console.log(await (await fetch(rssUrl, { mode: 'no-cors' })).text());
}

a()
