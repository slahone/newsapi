import React from 'react';
import Countries from './country';
import './searchbar.css';

const MODE_TOP_HEADLINES = 1;
const MODE_QUERY_TERMS   = 2;

class SearchBar extends React.Component {


  constructor (props) {
    super (props);
    this.state = {
      mode: MODE_TOP_HEADLINES
    }
    this.onClickWorld = this.onClickWorld.bind (this);
    this.onClickUS = this.onClickUS.bind (this);
    this.onClickCountry = this.onClickCountry.bind (this);
    this.onClickCategory = this.onClickCategory.bind (this);
    this.onHover = this.onHover.bind (this);
    this.setExplain = this.setExplain.bind (this);
    this.setClear = this.setClear.bind (this);
    this.renderTopHeadlines = this.renderTopHeadlines.bind (this);
  }

  onClickWorld(e) {
    this.props.onClickBase('');
  }

  onClickUS(e) {
    this.props.onClickBase('US');
  }

  onClickCountry(e) {
    const cx = e.target.value;
    this.props.onClickBase(cx);
  }

  onClickCategory(e) {
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

  renderTopHeadlines() {
    return (
      <div>
        <div className="header">
          <span id='world' className="fetchnews fetchlink" onClick={this.onClickWorld} onMouseEnter={this.setExplain} onMouseLeave={this.setClear} >Top Headlines</span>
          <span id='us' className="fetchnews fetchlink" onClick={this.onClickUS} onMouseEnter={this.setExplain} onMouseLeave={this.setClear} >US News</span>
          <span className="fetchnews1">
            Select Country: <select className="selectX" onChange={this.onClickCountry}>
              { Countries.map(c => {
                const cx = c.value;
                return <option value={cx} key={c.value}>{c.label}</option>;
              })}
            </select>
          </span>
          <span className="fetchnews1">
            Category: <select className="selectX" onChange={this.onClickCategory}>
              <option key='0' value='general'>General</option>
              <option key='1' value='business'>Business</option>
              <option key='2' value='health'>Health</option>
              <option key='3' value='science'>Science</option>
              <option key='4' value='sports'>Sports</option>
              <option key='6' value='entertainment'>entertainment</option>
            </select>
          </span>
        </div>
        <div id="explain">
        </div>
      </div>
    )
  }

  render() {
    switch (this.state.mode) {
      case MODE_TOP_HEADLINES:
          return (this.renderTopHeadlines());
      case MODE_QUERY_TERMS:
          return (<div>Working on it</div>);
      default:
          return (<div>Unknown Option</div>);
    }
  }

}

export default SearchBar;
