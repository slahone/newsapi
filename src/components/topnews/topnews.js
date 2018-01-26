import React from 'react';
import './topnews.css';
import Countries from './country';
import NewsItems from '../NewsItems/NewsItems';

class TopNews extends React.Component {
  constructor (props) {
    super (props);
    this.onClickLink1 = this.onClickLink1.bind (this);
    this.onClickLink2 = this.onClickLink2.bind (this);
    this.onClickLink3 = this.onClickLink3.bind (this);
    this.onClickLink4 = this.onClickLink4.bind (this);
    this.onHover = this.onHover.bind (this);
    this.setExplain = this.setExplain.bind (this);
    this.setClear = this.setClear.bind (this);
  }

  onClickLink1(e) {
    this.props.onClickBase('');
  }

  onClickLink2(e) {
    this.props.onClickBase('US');
  }

  onClickLink3(e) {
    const cx = e.target.value;
    this.props.onClickBase(cx);
  }

  onClickLink4(e) {
    const cx = e.target.value;
    this.props.onClickCategory(cx);
  }

  onHover(txt) {
    document.getElementById('explain').innerHTML = txt;
  }

  setExplain (e) {
    //console.log (e.target.id);
    switch (e.target.id) {
      case 'world': this.onHover ('News around the world in local languages'); break;
      case 'us': this.onHover ('News around the the US, in English'); break;
      default: this.onHover ('');
    }
  }

  setClear(e) {
    this.onHover ('');
  }

  render() {
    return (
      <div className="header">
        <div>
          <span id='world' className="fetchnews fetchlink" onClick={this.onClickLink1} onMouseEnter={this.setExplain} onMouseLeave={this.setClear} >Top Headlines</span>
          <span id='us' className="fetchnews fetchlink" onClick={this.onClickLink2} onMouseEnter={this.setExplain} onMouseLeave={this.setClear}  >US News</span>
          <span className="fetchnews1">
            Select Country: <select className="selectX" onChange={this.onClickLink3}>
              { Countries.map(c => {
                const cx = c.value;
                return <option value={cx} key={c.value}>{c.label}</option>;
              })}
            </select>
          </span>
          <span className="fetchnews1">
            Category: <select className="selectX" onChange={this.onClickLink4}>
              <option key='0' value='general'>General</option>
              <option key='1' value='business'>Business</option>
              <option key='2' value='health'>Health</option>
              <option key='3' value='science'>Science</option>
              <option key='4' value='sports'>Sports</option>
              <option key='6' value='entertainment'>entertainment</option>
            </select>
          </span>
        </div>
        <div id="explain">&nbsp;
        </div>
        <div className="main">
          <NewsItems articles={this.props.articles} />
        </div>
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
