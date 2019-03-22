import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class Home extends Component {
  state = {
    characters: null
  };

  componentDidMount = async () => {
    try {
      const characters = await axios.get(
        "https://lotr-quoter.herokuapp.com/api/users/"
      );
      this.setState({
        characters: characters.data
      });
      console.log(characters);
    } catch (error) {
      console.log(error);
    }
    // axios
    //   .get("https://lotr-quoter.herokuapp.com/api/users/")
    //   .then(res => console.log(res))
    //   .catch(console.log());
  };

  render() {
    return this.state.characters === null ? (
      <div>
        <p>loading..</p>
      </div>
    ) : (
      <div>
        <p>hello world</p>
        <ul>
          {this.state.characters.map(character => {
            return (
              <li key={character.id}>
                <Link to={`/${character.id}`}> -> {character.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
