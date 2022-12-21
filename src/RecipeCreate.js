import React, { useState } from "react";

function RecipeCreate({setRecipes}) {
  const initialFormState={
    name:"",
    cuisine:"",
    imageUrl:"",
    ingredients:"",
    preparation:"",
    actions:"",
  }
  
  const [formData,setFormData]=useState({...initialFormState}) 
  
  const handleChange=({target})=>{
    setFormData({
      ...formData,
      [target.name]:target.value,
    })
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    setRecipes(recipes=>[...recipes,formData]);
    setFormData(initialFormState)
  }
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td> 
                <label htmlFor="name">
                  <input id="name" name="name" type="text" placeHolder="Name"onChange={handleChange} value={formData.name}/>
                    </label>
           </td>
            <td>   
                <label htmlFor="cuisine">
                  <input id="cuisine" name="cuisine" type="text" placeHolder="Cuisine" onChange={handleChange} value={formData.cuisine} />
                </label> </td>
            <td>
              <label htmlFor="photo">
                <input id="photo" name="photo" type="text" placeHolder="URL" onChange={handleChange} value={formData.imageUrl} />
              </label></td>
             <td>
             <label htmlFor="ingredients">
               <textarea id="ingredients" name="ingredients" type="text" placeHolder="Ingredients" onChange={handleChange} value={formData.ingredients} />
               </label></td>
         <td>
                <label htmlFor="preparation">
                <textarea id="preparation" name="preparation" type="text" placeHolder="Preparation" onChange={handleChange} value={formData.preparation} />
           </label></td>
            <td>
            <button type="submit" onClick={handleSubmit}>Create</button>
            </td>
            
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
