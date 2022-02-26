import Cookies from "js-cookie";
import React, { Component } from "react";

import stylesCSS from "./styles.module.css";
export default class UserLogout extends Component {
  logout = () => {
    localStorage.clear(Cookies.remove("jwt"));
    // you can also like localStorage.removeItem('Token');
    window.location.href = "/login";
  };
  render() {
    return (
      <button className={stylesCSS.button} onClick={this.logout}>
        Logout
      </button>
    );
  }
}
