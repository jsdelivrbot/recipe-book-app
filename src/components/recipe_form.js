// saveRecipe() {

//     const recipeList = JSON.parse(localStorage.getItem("recipeList")) || []; 
//     recipeList.push(recipe); 
//     localStorage.setItem("recipeList", JSON.stringify(recipeList)); 

//     console.log(JSON.parse(localStorage.getItem("recipeList")));
//   }

import React, { Component } from 'react'; 
import { Link } from 'react-router'; 

export default class RecipeForm extends Component {
  render() {
    return (
      <div> 
        <h2>Recipe Form</h2> 
        <form> 
          <div className="form-group"> 
            <label htmlFor="name">Recipe name</label> 
            <input 
              type="text" 
              name="name" 
              placeholder="enter a name for your recipe" 
              className="form-control"
              onChange={this.props.onChange} 
              value={this.props.recipe.name}/> 
          </div> 
          <div className="form-group"> 
            <label htmlFor="ingredients">Ingredients</label> 
            <textarea 
              name="ingredients" 
              placeholder="enter your ingredients, divided by commas" 
              rows="5" 
              className="form-control" 
              onChange={this.props.onChange} 
              value={this.props.recipe.ingredients} />
          </div> 

        </form> 
        <Link to="/"><button className="btn btn-primary">Add Recipe</button></Link>
        <Link to="/"><button className="btn btn-warning">Cancel</button></Link>

      </div> 
    ) 
  }
}

RecipeForm.propTypes = {
  // recipe: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired
  // onSave: React.PropTypes.func.isRequired, 
}