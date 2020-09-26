import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <div>
        <footer className="main-footer">
          <strong>
            Copyright © 2020{" "}
            <a href="http://adminlte.io">National Drugs Tracker </a>.
          </strong>
          All rights reserved.
          <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 1.0
          </div>
        </footer>
      </div>
    );
  }
}
