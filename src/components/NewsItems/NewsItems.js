import React from 'react';
import './NewsItems.css';
import NewsItem from '../NewsItem/NewsItem';

class NewsItems extends React.Component {
  render() {
    return (
      <ul>
        {this.props.articles.map (item =>
            <NewsItem item={item} />
       )}
      </ul>
    )
  }

}

export default NewsItems
