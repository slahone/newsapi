import apiKey from './apikey';

// The 2-letter ISO 3166-1 code of the country you want to get headlines for. Possible options:
// ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu
// id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro
// rs ru sa se sg si sk th tr tw ua us ve za .
// category: entertainment general health science sports technology


let newsFeed = {
  getHeadLines (zone, cat) {
    //console.log ((zone===''?'World':zone) + ' ' + cat);
    const country = zone==='' ? '' : `&country=${zone}`;
    const url = `https://newsapi.org/v2/top-headlines?pageSize=81&category=${cat}&apiKey=${apiKey}${country}`;
    //console.log (url);
    return fetch (url).then (response => {  // this return statement returns a promise.
        if (response.ok) {
          return response.json();
        }
        console.log ('Unable to retrieve new headlines');
        return null;
      },
      networkError => {
        console.log ("Network Error");
        return null;
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
  },

  queryHeadLines (term, zone, cat) {
    //console.log ((zone===''?'World':zone) + ' ' + cat);
    //const country = zone==='' ? '' : `&country=${zone}`;
    const url = `https://newsapi.org/v2/everything?pageSize=81&q=${term}&apiKey=${apiKey}`;
    console.log (url);
    return fetch (url).then (response => {  // this return statement returns a promise.
        if (response.ok) {
          return response.json();
        }
        console.log ('Unable to retrieve new headlines');
        return [];
      },
      networkError => {
        console.log ("Network Error");
        return [];
      }
    ).then (jsonResponse => {
      console.log (jsonResponse);
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
