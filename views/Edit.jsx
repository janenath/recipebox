const React = require('react');
const AppLayout= require('./layouts/AppLayout.jsx');

class Edit extends React.Component{
  render() {
    return (
      <AppLayout title="Edit Recipe">
      <div className="formContainer">
        <form action={`/recipebox/${this.props._id}?_method=put`} method="post">
        <p>
            <label>Title:</label>
            <input className="blank" type="text" defaultValue={this.props.Title}  name="Title"/>
          </p>
          <p>
            <label>Photo URL:</label>
            <input className="blank" type="text" defaultValue={this.props.Photo} name="Photo"/>
          </p>
          <p>
            <label>Source:</label>
            <input className="blank" type="text" defaultValue={this.props.Source} name="Source"/>
          </p>
          <p>
            <label>Category:</label>
            <input className="blank" type="text" defaultValue={this.props.Category} name="Category"/>
          </p>
          <p>
            <label>Ingredients:</label>
            <textarea className="textArea" type="text" defaultValue={this.props.Ingredients} name="Ingredients"/>
          </p>
          <p>
            <label>Directions:</label>
            <textarea className="textArea" type="text" defaultValue={this.props.Directions} name="Directions"/>
          </p>

            <input className = "deleteButton" type="submit" value="Submit"/>

        </form>
      </div>
      </AppLayout>
    )
  }
}
module.exports= Edit ;