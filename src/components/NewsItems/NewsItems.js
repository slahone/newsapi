import React from 'react';
import './NewsItems.css';
import NewsItem from '../NewsItem/NewsItem';

class NewsItems extends React.Component {
  render() {
    return (
        <div className="container">
          {this.props.articles.map (item =>
              <NewsItem key={item.id} item={item} />
          )}
        </div>
    )
  }

}

export default NewsItems;
