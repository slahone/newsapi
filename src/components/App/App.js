import React from 'react';
import './App.css';
import newsFeed from '../../util/news';
import NewsItems from '../NewsItems/NewsItems';
import SearchBar from '../searchbar/searchbar';
import ErrorHandler from '../ErrorHandler/ErrorHandler';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      term: '',
      src: '',
      type: 'general',
      articles: [],
    }
    this.onGetNewsHeadLines = this.onGetNewsHeadLines.bind (this);
    this.onSearchNewsHeadlines = this.onSearchNewsHeadlines.bind (this);
    this.setCountry = this.setCountry.bind (this);
    this.setCategory = this.setCategory.bind (this);
  }

  componentDidMount() {
    this.onGetNewsHeadLines(this.state.src, this.state.type);
  }

  onGetNewsHeadLines(src, type) {
    newsFeed.getHeadLines(src, type)
      .then(response => {
        this.setState ({
          articles: response
        })
      }
    )
  }

  onSearchNewsHeadlines(term) {
    newsFeed.queryHeadLines (term, this.state.src, this.state.type)
    .then(response => {
      this.setState ({
        articles: response
      })
    })
  }



  setCountry (country) {
    this.onGetNewsHeadLines (country, this.state.type);
    this.setState ({
      src: country
    })
  }

  setCategory (category) {
    this.onGetNewsHeadLines (this.state.src, category);
    this.setState ({
      type: category
    })
  }

  setQuery (query) {

  }

  render () {
    if (this.state.articles) {
      return (
        <div>
          <SearchBar onClickBase={this.setCountry} onClickCategory={this.setCategory}  onSearchNews={this.onSearchNewsHeadlines}/>
          <NewsItems articles={this.state.articles} />
        </div>
      );
    } else {
      return (
        <div>
          <SearchBar onClickBase={this.setCountry} onClickCategory={this.setCategory} onSearchNews={this.onSearchNewsHeadlines}/>
          <ErrorHandler />
        </div>
      );
    }
  }
}

export default App;
