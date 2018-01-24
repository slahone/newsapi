import React from 'react';

class NewsItem extends React.Component {
  render() {
    return (
      <div>
        <h3>${this.props.item.title}</h3>
      </div>
    )
  }
}

export default NewsItem;
