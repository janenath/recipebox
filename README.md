# Recipe Box

Between cookbooks, websites, and handwritten family notes, it can be difficult to remember where to find your favorite recipes. With Recipe Box, all of your recipes are stored in one place for easy access across all devices.

## User Stories

The user should:
- Be able to view an index page of all stored recipes
- View the details of any recipe on its own show page
- Submit a form to add a new recipe
- Submit a form to edit any recipe
- Delete any recipe by clicking the delete button

## Link


## Technology Summary

- CRUD App using Node.js, Express, JSX, Mongo, Mongoose
- Styled with CSS and Bootstrap
- Deployed with Heroku

## My Process
### Planning: 

![planner](https://i.imgur.com/PWwZd3bl.jpg)

### Visionboard:
![design](https://i.imgur.com/jSrgdell.jpg)

### Development Steps:
#### Created file structure:

![filestructure](https://i.imgur.com/ziNtRxxl.png)

#### Initiated npm and installed applications/dependencies:
```bash
    npm init -y
    npm install express
    npm install mongoose
    npm i express express-react-views react react-dom
    npm i method-override
```

- Created 7 RESTful routes, linked to data and controller files, middleware added
- Made jsx files for views, AppLayout
- Connected to mongoose database, created schema and seed data
- Styled with Bootstrap and CSS

## Challenges
- I challenged myself to do most of the styling myself, and spent a lot of time troubleshooting the css, especially with the forms for new and edit pages
- I ran into issues with syntax (such as capitalizing properties)
- I spent some time attempting to create show pages for each category of recipe, but ultimately decided to wait to add this functionality when we learn more React in future units

## Future Goals
- Add authentication so users can save their own personal recipe box
- Create a dropdown menu to view pages of recipes by category (dessert, appetizer, etc.)
- Use Rich Text Format to make recipe text more readable
- Give options to change colors/themes
- Add search bar
- Make it easy to import recipes from external websites (e.g. a chrome plugin)
