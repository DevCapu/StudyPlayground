const Pet = ({name, animal, breed}) => {
    return React.createElement('div', {},[
        React.createElement('h1', {}, name),
        React.createElement('h2', {}, animal),
        React.createElement('h2', {}, breed)
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