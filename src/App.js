import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    users: null
  };

  componentDidMount = async () => {
    try {
      const users = await axios.get(
        "https://lotr-quoter.herokuapp.com/api/users/"
      );
      this.setState({
        users: users.data
      });
      console.log(users);
    } catch (error) {
      console.log(error);
    }
    // axios
    //   .get("https://lotr-quoter.herokuapp.com/api/users/")
    //   .then(res => console.log(res))
    //   .catch(console.log());
  };

  render() {
    return this.state.users === null ? (
      <div>
        <p>loading</p>
      </div>
    ) : (
      <div>
        <p>hello world</p>
        <p>{JSON.stringify(this.state.users)}</p>
      </div>
    );
  }
}

export default App;
