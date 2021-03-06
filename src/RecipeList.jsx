import React, { Component } from 'react';
import PropTypes from 'proptypes';
import RecipeCard from './RecipeCard.jsx';

class RecipeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: this.props.recipes
    };
  }

  static propTypes = {
    recipes: PropTypes.array,
    recipeCount: PropTypes.number,
    userUpdated: PropTypes.func,
    categories: PropTypes.array
  }


  componentWillReceiveProps(props) {
    this.state = { recipes: props.recipes };
  }

  removeRecipe = (index) => {
    if(this.props.recipeCount) {
      //replace with the first unused recipe
      this.state.recipes.splice(index, 1, this.state.recipes[this.props.recipeCount]);
      //remove that recipe from the list
      this.state.recipes.splice(this.props.recipeCount, 1);
    } else {
      this.state.recipes.splice(index, 1);
    }
    this.setState({
      recipes: this.state.recipes
    });
  }

  renderRecipes = () => {
    const recipes = this.props.recipeCount ? this.state.recipes.slice(0, this.props.recipeCount) : this.state.recipes;
    return recipes.map((recipe, index) => {
      return <RecipeCard
        {...recipe}
        index={index}
        key={index}
        removeRecipe={this.removeRecipe}
        userUpdated={this.props.userUpdated}
        categoryList={this.props.categories}
        replaceable={Boolean(this.props.recipeCount) && this.state.recipes.length > this.props.recipeCount}
      />;
    });
  };

  render() {
    return (
      <div className="recipe-list">
        <div className="row">
          {this.renderRecipes()}
        </div>
      </div>
    );
  }
}
export default RecipeList;

