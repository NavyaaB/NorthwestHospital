import React, { Component } from 'react';
import logo from './logo.svg';
import {Panel,ListGroup,ListGroupItem,Row,Grid,Col} from 'react-bootstrap';
import './App.css';

class FooterPanel extends Component {

  render() {

    return (

      <div className="App">
        <Grid>
          <Row>
            <Col xs={6} md={4}>
            <Panel collapsible defaultExpanded header="Patient Stories" bsStyle="primary">
              <ListGroup fill>
                <ListGroupItem>Patient Videos</ListGroupItem>
                <ListGroupItem>Case Studies</ListGroupItem>
                <ListGroupItem>Testimonials</ListGroupItem>
              </ListGroup>
            </Panel>
          </Col>
          <Col xs={6} md={4}>
          <Panel collapsible defaultExpanded header="Specialities" bsStyle="primary">
            <ListGroup fill>
              <ListGroupItem>Cardiology</ListGroupItem>
              <ListGroupItem>Radiology</ListGroupItem>
              <ListGroupItem>ENT</ListGroupItem>
            </ListGroup>
          </Panel>
        </Col>
        <Col xs={6} md={4}>
        <Panel collapsible defaultExpanded header="Get in touch" bsStyle="primary">
          <ListGroup fill>
            <ListGroupItem>Facebook</ListGroupItem>
            <ListGroupItem>Instagram</ListGroupItem>
            <ListGroupItem>You Tube</ListGroupItem>
          </ListGroup>
        </Panel>
      </Col>
          </Row>

        </Grid>
      </div>
    );
  }
}
export default FooterPanel;
