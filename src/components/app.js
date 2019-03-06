import React, { Component } from "react";
import SearchBar from "../containers/SearchBar";
import MortalityList from "../containers/MortalityList";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MortalityList />
      </div>
    );
  }
}
