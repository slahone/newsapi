import React from 'react';
import './topnews.css';
import NewsItems from '../NewsItems/NewsItems';

class TopNews extends React.Component {
  constructor (props) {
    super (props);
  }

  render() {
    return (
      <div className="main">
        <NewsItems articles={this.props.articles} />
      </div>
    )
  }
}

//  <select>
//    <option value='us'>USA</option>
//    <option value='uk'>UK</option>
    //{this.state.countries.map (cntry =>
    //    <option value={cntry.value}>{cntry.label}</option>
    //)}
//  </select>

export default TopNews;
