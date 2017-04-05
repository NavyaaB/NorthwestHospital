import React, { Component } from 'react';
import logo from './logo.svg';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import heart from '../images/heart.jpg';
import './App.css';

class Heart extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Image  id="hear" src={heart}  thumbnail />
            </Col>
            <Col xs={8} md={8}>
              <h2 id="quote"><i>keep your heart safe</i></h2>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Heart;
