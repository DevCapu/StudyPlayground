const Pet = (props) => {
    return React.createElement('div', {},[
        React.createElement('h1', {}, props.name),
        React.createElement('h2', {}, props.animal),
        React.createElement('h2', {}, props.breed)
    ]);
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, 
                {
                    name: "Jhow Jhow",
                    animal: "Dog",
                    breed: "Mixed"
                }
            ),
            React.createElement(Pet, 
                {
                    name: "Cadela",
                    animal: "Cat",
                    breed: "Mixed"
                }
            ),
            React.createElement(Pet, 
                {
                    name: "Blue",
                    animal: "Papagaio",
                    breed: "Arara Azul"
                }
            ),
        ]
        );
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);