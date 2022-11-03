import React from 'react'
import './footer.css'

import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/eco-logo.png'


function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg='4'>
            <div className='logo'>
                <img src={logo} alt='logo'/>
                <div>
                  <h1>Multimart</h1>
                </div>
            </div>
            <p className='footer__text mt-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corrupti sequi accusamus, non rem sunt provident. Nisi nihil totam expedita!
            </p>
          </Col>
          <Col lg='3'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Top Categories</h4>
              <ListGroup>

              </ListGroup>
            </div>
          </Col>
          <Col lg='2'>

          </Col>
          <Col lg='3'>

          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer