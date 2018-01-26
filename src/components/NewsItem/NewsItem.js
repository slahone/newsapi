import React from 'react';
import './NewsItem.css';

class NewsItem extends React.Component {
  render() {
    //console.log (this.props.item);
    return (
      <div className="newsItem">
        <a href={this.props.item.uri} target="_blank">
          {this.props.item.title}<br/>
          <img className="linkImg" src={this.props.item.image} alt={this.props.item.description} /><br/>
          {this.props.item.source}
          {this.props.item.publishedAt}
        </a>
      </div>
    )
  }
}

export default NewsItem;
