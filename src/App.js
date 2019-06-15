import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters: [{
          time: "2018.8- now",
          job: "Associate consultant AppDynamics Ltd"
        },{
          time: "2017.7- 2018.7",
          job: "Digital Marketing Manager AppDynamics Ltd"
        }]
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }
  render() {
    const {characters}= this.state;

    return (
      <div className="container">
                <h1>Shou-Ping's Website</h1>
                <p>An active learner. Love Web development. Now working as a consultant.</p>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
    );
  }
}

export default App;
