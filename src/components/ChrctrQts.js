import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class ChrctrQts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
  }

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    try {
      const quotes = await axios.get(
        `https://lotr-quoter.herokuapp.com/api/users/${id}/posts`
      );
      this.setState({
        quotes: quotes.data
      });
      console.log(quotes);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return this.state.quotes.length > 0 ? (
      <div>
        <Link to="/">home</Link>
        <h1>{JSON.stringify(this.state.quotes[0].postedBy)}</h1>
        <ul>
          {this.state.quotes.map(quote => {
            return <li key={quote.id}> -> {quote.text}</li>;
          })}
        </ul>
      </div>
    ) : (
      <div>
        <p>loading</p>
      </div>
    );
  }
}

export default ChrctrQts;
