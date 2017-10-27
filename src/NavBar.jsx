import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Register from './Register.jsx';
import Modal from './Modal.jsx';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Modal>
          <Register />
        </Modal>

        <nav>
          <ul className="nav nav-pills float-right">
            <li className="nav-item">
              <NavLink activeClassName="nav-link" to='/'>Home</NavLink>
              {/* <a className="nav-link" href="#">Home
              </a> */}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-link" to='/results'>Results</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" activeClassName="nav-link" to='/register'>Register</NavLink>
            </li>
            <button type="button" className="btn" data-toggle="modal" data-target="#exampleModalLong">
              Launch demo modal
            </button>
          </ul>
        </nav>
        <h3 className="text-muted">Crisp</h3>
      </div>
    );
  }
}
export default NavBar;

