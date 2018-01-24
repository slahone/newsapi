
const apiKey = '548a3c80d9304e128b794e3614a49913';

let newsFeed = {
  getHeadLines() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
    return fetch (url).then (response => {  // this return statement returns a promise.
        if (response.ok) {
          return response.json();
        }
        throw new Error ('Unable to retrieve new headlines');
      },
      networkError => {
        console.log ("Network Error");
        return [];
      }
    ).then (jsonResponse => {
      const news = jsonResponse.articles.map ((item, index) => {
        return {
          id: index,
          source: item.source.id,
          name: item.source.name,
          author: item.author,
          title: item.title,
          description: item.description,
          uri: item.url,
          image: item.urlToImage,
          publishedAt: item.publishedAt
        }
      })
      return news;
    })
  }
}

export default newsFeed;
