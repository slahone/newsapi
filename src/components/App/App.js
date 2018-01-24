import React from 'react';
import './App.css';
import newsFeed from '../../util/news';
import NewsItems from '../NewsItems/NewsItems';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      term: '',
      articles: []
    }
    this.onGetNews = this.onGetNews.bind (this);
  }

  onGetNews() {
    newsFeed.getHeadLines()
      .then(response => {
        console.log ('inApp', response);
        this.setState ({
          articles: response
        })
      }
    )
  }

  render () {
    console.log ('State', this.state);
    return ( this.state.articles ?
      <div>
        <button onClick={this.onGetNews}>Get Headlines</button>
        <NewsItems articles={this.state.articles} />
      </div>
      :
      <div>
        <h1>Error encountered</h1>
      </div>
    );
  }
}

export default App;
