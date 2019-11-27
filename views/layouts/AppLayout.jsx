const React = require('react');

class AppLayout extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width" />
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.0/css/bootstrap.min.css" integrity="sha384-SI27wrMjH3ZZ89r4o+fGIJtnzkAnFs3E4qz9DIYioCQ5l9Rd/7UAa8DHcaL8jkWt" crossOrigin="anonymous"></link>
                    <link rel="stylesheet" href="/css/style.css" type="text/css" />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Raleway:400,700|Satisfy&display=swap" rel="stylesheet"></link>
                </head>
                <body>
                    <header>
                        <div className="container">
                            <img src='https://i.imgur.com/cTUo7oX.jpg'/>
                            <h1>Recipe Box</h1>
                        </div>   
                        <nav>
                                <div className="navButton"><a href="/recipebox">Home</a></div>
                                <div className="navButton"><a href="/recipebox/new">Add a Recipe</a></div>
                        </nav>
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                </body>
            </html>
        )
    }
}

module.exports = AppLayout;