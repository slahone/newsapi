import React from 'react';
import './App.css';
import newsFeed from '../../util/news';
import TopNews from '../topnews/topnews';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      term: '',
      src: '',
      type: 'general',
      articles: [],
    }
    this.onGetNews = this.onGetNews.bind (this);
    this.setCountry = this.setCountry.bind (this);
    this.setCategory = this.setCategory.bind (this);
  }

  componentDidMount() {
    this.onGetNews(this.state.src, this.state.type);
  }

  onGetNews(src, type) {
    newsFeed.getHeadLines(src, type)
      .then(response => {
        this.setState ({
          articles: response
        })
      }
    )
  }

  setCountry (country) {
    this.onGetNews (country, this.state.type);
    this.setState ({
      src: country
    })
  }

  setCategory (category) {
    this.onGetNews (this.state.src, category);
    this.setState ({
      type: category
    })
  }

  render () {
    return ( this.state.articles ? <TopNews articles={this.state.articles} onClickBase={this.setCountry} onClickCategory={this.setCategory} /> :
      <div>
        <h1>Error encountered</h1>
      </div>
    );
  }
}

export default App;
