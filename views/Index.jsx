const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx');

class Index extends React.Component{
    render() {
        return(
            <AppLayout title="Recipe Box">
                <ul className = "recipe-list">
                {this.props.recipes.map(
                    (recipe, index) => {
                        return(
                            <li className ="recipe-list_item">
                                <a href={`/recipebox/${recipe._id}`}>
                                    <h2><span className="Title">{recipe.Title}</span></h2></a>
                                    <img className="Photo" src={recipe.Photo}/>
                            </li>
                        )}
                )}
                </ul>
            </AppLayout>
        )
    }
}
module.exports= Index;