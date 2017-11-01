import React, { Component } from 'react';
import PropTypes from 'proptypes';
import RecipeContainer from './RecipeContainer.jsx';

class SearchResults extends Component {

  static propTypes = {
    searchResponse: PropTypes.array,
    savedRecipes: PropTypes.array,
    userUpdated: PropTypes.func
  }

  render() {
    return (
      <div className="results">
        <div id="search-result-list" className='jumbotron content-blocks'>
          <h1 className="text-center">Recommendations</h1>
          <hr />
          <RecipeContainer recipes = {this.props.searchResponse} savedRecipes = {this.props.savedRecipes} userUpdated = {this.props.userUpdated} count={4}/>
          <div className='d-flex justify-content-center'>
            <a className='back-btn' href='/'><button className="btn btn-success">Do a different search</button></a>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchResults;

