import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormState ={name: "", cuisine: "", photo: "", ingredients: "", preparation: "" }
  
   const [formData, setFormData] = useState({...initialFormState});
    
  const handleChange = ({target}) => {
    setFormData({
      ...formData, 
      [target.name]:target.value,
    });
  };
  
  
  const handleSubmit = (event) => {
     event.preventDefault();
    addRecipe(formData);
    setFormData({ ...initialFormState });
  }
  
  return (
    <form name="create" id="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td> 
             <input
               id="name"
               name="name"
               required={true}
               onChange={handleChange}
               value={formData.name}
                Placeholder="Name"
               />
            </td>
            <td> 
             <input
               id="cuisine"
               name="cuisine"
               required={true}
               onChange={handleChange}
               value={formData.cuisine}
                Placeholder="Cuisine"
               size="10"
               />
            </td>
            <td> 
             <input
               id="photo"
               name="photo"
               type="url"
               required={true}
               onChange={handleChange}
               value={formData.photo}
               Placeholder="URL"
               size="10"
               />
            </td>
            <td> 
             <textarea
               id="ingredients"
               name="ingredients"
               required={true}
               onChange={handleChange}
               value={formData.ingredients}
               Placeholder="Ingredients"
               size="10"
               />
            </td>
             <td> 
             <textarea
               id="preparation"
               name="preparation"
               required={true}
               onChange={handleChange}
               value={formData.preparation}
               Placeholder="Preparation"
               size="10"
               />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;