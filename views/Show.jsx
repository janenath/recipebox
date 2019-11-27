const React = require('react');
const AppLayout= require('./layouts/AppLayout.jsx');

class Show extends React.Component{
  render() {
    return (
    <AppLayout title={this.props.Title}>
      <div className="showContainer">
        <h2>{this.props.Title}</h2>
        <img className = "Photo" src={this.props.Photo}/>
        <p>Source: {this.props.Source}</p>
        <p>Category: {this.props.Category}</p>
        <p>Ingredients: {this.props.Ingredients}</p>
        <p>Directions: {this.props.Directions}</p>
        <button><a href={`/recipebox/edit/${this.props._id}`}>Edit</a></button>
        <form action={`/recipebox/${this.props._id}?_method=delete`} method="post">
          <input className="deleteButton" type="submit" value="Delete" />
        </form>
      </div>
    </AppLayout>
    )
  }
}
module.exports= Show;
