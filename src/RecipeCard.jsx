import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { Link } from 'react-router-dom';
import { saveRecipe, deleteRecipe, getRecipeDetails } from './api.js';

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.setStateFromProps(this.props);
  }

  static propTypes = {
    id: PropTypes.number,
    index: PropTypes.number,
    image: PropTypes.string,
    recipes: PropTypes.array,
    removeRecipe: PropTypes.func,
    servings: PropTypes.number,
    saved: PropTypes.bool,
    sourceName: PropTypes.string,
    title: PropTypes.string,
    time: PropTypes.number,
    userUpdated: PropTypes.func
  }

  componentDidMount() {
    if(!this.state.title) this.setStateFromAPI();
  }

  componentWillReceiveProps(props) {
    this.setStateFromProps(props);
  }

  setStateFromProps = (props) => {
    const { image, recipes, servings, sourceName, title, time } = props;
    this.state = { image, recipes, servings, sourceName, title, time };
  }

  setStateFromAPI = () => {
    getRecipeDetails(this.props.id).then(response => {
      const { image, recipes, servings, sourceName, title, time } = response;
      this.setState({ image, recipes, servings, sourceName, title, time });
    });
  }

  remove = (e) => {
    e.stopPropagation();
    this.props.removeRecipe(this.props.index);
  }

  saveButton = () => {
    if(this.props.saved) {
      return <button type="button" className="btn btn-save" onClick={() => deleteRecipe(this.props.id, this.props.userUpdated)}><i className="fa fa-lg fa-bookmark" aria-hidden="true"></i></button>;
    } else {
      return <button type="button" className="btn btn-save" onClick={() => saveRecipe(this.props.id, this.props.userUpdated)}><i className="fa fa-lg fa-bookmark-o" aria-hidden="true"></i></button>;
    }
  }

  render() {
    return (
      <div className="recipe-card col">
        <div className="card">
          <div className="card-block">
            <Link to={`/recipes/${this.props.id}`} className="recipe-card-link">
              <img className="card-img-top" src={this.state.image} alt="Card image cap" />
              <div className="card-block">
                <h6 className="card-title text-center">{this.state.title}</h6>
              </div>
              <div className="card-block card-meta">
                  <ul className="list-unstyled">
                    <li>
                      <small><i className="fa fa-clock-o" aria-hidden="true"></i> {this.state.time}m</small>
                    </li>
                    <li>
                      <small><i className="fa fa-users" aria-hidden="true"></i> {this.state.servings}</small>
                    </li>
                    <li>
                      <small>From: {this.state.sourceName}</small>
                    </li>
                  </ul>
                </div>
            </ Link>
            <div className="card-block d-flex justify-content-between">
              <button type="button" className="btn btn-delete" onClick={e => this.remove(e)}><i className="fa fa-lg fa-times" aria-hidden="true"></i></button>
              {this.saveButton()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RecipeCard;

