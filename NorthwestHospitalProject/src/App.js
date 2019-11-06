import React, { Component } from 'react';
import {Navbar,ButtonToolbar,Button,Nav,Image,NavItem} from 'react-bootstrap'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar style={{margin:0}}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" id="name"> Northwest Hospital</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <ButtonToolbar>
                <Button>Sign in</Button>
                <Button bsStyle="info">Sign up</Button>
              </ButtonToolbar>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default App;
