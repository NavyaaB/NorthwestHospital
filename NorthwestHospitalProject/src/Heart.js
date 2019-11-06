import React, { Component } from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import heart from '../images/heart.jpg';
import './App.css';

class Heart extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col xs={8} md={6}>
              <Image  id="hear" src={heart}  thumbnail />
            </Col>
            <Col xs={4} md={6}>
              <h2 id="quote"><i>keep your heart safe</i></h2>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Heart;
