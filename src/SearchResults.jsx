import React, { Component } from 'react';
import Search from './Search.jsx';
import PropTypes from 'proptypes';

class SearchResults extends Component {

  render() {
    return (
      <div>
        <Search />
        <div id="search-result-list">
          <h3 id="search-result-list-header">Results</h3>
          <p>Here are some recipes based on your search criteria.</p>
        </div>
        {/* <div className="row marketing">
          <div className="col">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Start a new search</label>
              <input type="text" className="form-control" placeholder="What would you like?"></input>
            </div>
          </div>
        </div> */}

      <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-block">
            <div className="row">
              <div className="col">
                <h4 className="card-title">Recipe name</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <img className="img-thumbnail" src={'./docs/grilledcheese.jpg'} alt="Card image cap"></img>
              </div>
              <div className="col-sm-6">
                <ul className="list-unstyled">
                  <li className="">
                    <small>Time: 60m</small>
                  </li>
                  <li className="">
                    <small>rating: 5</small>
                  </li>
                  <li className="">
                    <small>something else:</small>
                  </li>
                </ul>
              </div>
            </div>
            <div className="btn-group btn-group-sm" role="group">
              <button type="button" className="btn btn-secondary">No thanks</button>
              <button type="button" className="btn btn-danger">Never</button>
              <button type="button" className="btn btn-success">Try later</button>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
    );
  }
}
export default SearchResults;
