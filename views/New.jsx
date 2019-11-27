const React = require('react');
const AppLayout= require('./layouts/AppLayout.jsx')

class New extends React.Component{
  render() {
    return (
      <AppLayout title="Add a Recipe">
        <div className="formContainer">
          <form action={`/recipebox`} method="post">
            <p>
              <label>Title:</label>
              <input className="blank" type="text"  name="Title"/>
            </p>
            <p>
              <label>Photo URL:</label>
              <input className="blank" type="text" name="Photo"/>
            </p>
            <p>
              <label>Source:</label>
              <input className="blank" type="text" name="Source"/>
            </p>
            <p>
              <label>Category:</label>
              <input className="blank" type="text"  name="Category"/>
            </p>
            <p>
              <label>Ingredients:</label>
              <textarea className=".textArea" type="textarea" name="Ingredients"/>
            </p>
            <p>
              <label>Directions:</label>
              <textarea className=".textArea" type="text" name="Directions"/>
            </p>

              <input className="deleteButton" type="submit" value="Submit"/>

          </form>
      </div>
      </AppLayout>
    )
  }
}
module.exports= New ;