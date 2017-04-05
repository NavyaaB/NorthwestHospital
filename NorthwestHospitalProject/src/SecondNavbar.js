import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar,Nav,NavItem} from 'react-bootstrap'
import './App.css';

class SecondNavbar extends Component {
  render() {
    return (
      <div className="App">
        <Navbar style={{paddingLeft:350, margin:0}}>
          <Nav><NavItem eventKey={1} href="#" id="secondNavItem">ABOUT</NavItem></Nav>
          <Nav><NavItem eventKey={1} href="#" id="secondNavItem">EMERGRNCY</NavItem></Nav>
          <Nav><NavItem eventKey={1} href="#" id="secondNavItem">FIND A DOCTOR</NavItem></Nav>
          <Nav><NavItem eventKey={1} href="#" id="secondNavItem">HEALTH CARD</NavItem></Nav>
          <Nav><NavItem eventKey={1} href="#" id="secondNavItem">BOOK AN APPOINTMENT</NavItem></Nav>
        </Navbar>
      </div>
    );
  }
}
export default SecondNavbar;
