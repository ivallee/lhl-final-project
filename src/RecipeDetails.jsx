import React, { Component } from 'react';
import RecipeDetailsLinks from './RecipeDetailsLinks.jsx';
import RecipeDetailsIngredients from './RecipeDetailsIngredients.jsx';
import RecipeDetailsInstructions from './RecipeDetailsInstructions.jsx';

// delete when api calls functioning
import dummyRecipeData from './_dummyRecipeData';

class RecipeDetails extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      recipeData: {} 
    };
  }

  componentWillMount() {

  // Replace this with fetch to API:

    this.setState({recipeData: dummyRecipeData})


  }


  render() {
    const recipe = this.state.recipeData;

    const instructions = recipe.analyzedInstructions[0].steps.map(step => {
      return <RecipeDetailsInstructions stepCount={ step.number }
                                        stepDesc={ step.step }
                                        key={ step.number } />;
    });

    const ingredients = recipe.extendedIngredients.map(ingredient => {
      return <RecipeDetailsIngredients ingredient={ingredient.originalString}
                                       key={ingredient.id} />;
    });

    return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <img className="img-thumbnail" src={recipe.image} alt="Card image cap"></img>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <h4>
            {recipe.title}
          </h4>
          <h5>By {recipe.sourceName}</h5>
            <small className="text-muted"> Time required: {recipe.readyInMinutes} minutes</small>
        </div>
      </div>
      < RecipeDetailsLinks />
      <div className="recipe-details-ingredients">
        <h5>Ingredients:</h5>
        <ul>
          {ingredients}
        </ul>
      </div>
      <div className="recipe-details-instructions">
      <h5>Instructions:</h5>
        <ul>
          {instructions}
        </ul>
    </div>
    </div>
  );
}
}
export default RecipeDetails;

