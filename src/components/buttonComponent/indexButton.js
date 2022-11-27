import React from "react";
import logo from '../../images/boba-love-logo.png';
import "./ButtonStyle.css";

export default function ButtonEXP() {

    return (
      <div className="container">

      <div>
        <img id="Header-Logo" src={logo} alt="Logo"/>
      </div>
      <div className="login-register">
          <button class="button buttonlogin" onClick={""}>Login</button>
          <button class="button buttonRegister" onClick={""}>Register</button>
        </div>
        </div>
    );
  }