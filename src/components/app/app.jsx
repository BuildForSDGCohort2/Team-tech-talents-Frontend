import React, { Component } from "react";
import Header from "../header/Header";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";

export default class app extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Footer />
      </div>
    );
  }
}
