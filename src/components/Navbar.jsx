import React, { Component } from 'react'
import CoolButton from './CoolButton';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
          </a>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <CoolButton is-info>Login</CoolButton>
              </p>
              <p className="control">
                <CoolButton is-primary>Signup</CoolButton>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
