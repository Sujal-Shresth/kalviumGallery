import { Component } from "react";

import "./App.css";

import data from "./components/DataComponent";

export default class AppClass extends Component {
  createComp() {
    return data.map((image) => {
      return <img key={image.id} src={image.img} />;
    });
  }

  render() {
    return (
      <div id="classComponent">
        <h3>Kalvium Gallery Using classComponent</h3>

        <div className="grid">{this.createComp()}</div>
      </div>
    );
  }
  // code here
}
