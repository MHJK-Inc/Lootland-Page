import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
      <footer className="py-3 mt-auto" style={{ backgroundColor: '#282c34' }}>
        <Container className={'text-center'}>
          <Row>
            <Col>
              <p className="text-light mb-lg-3" style={{ fontWeight: 'bolder', fontSize: '1rem' }}>This Game is developed solely for class purposes.</p>
            </Col>
          </Row>
        </Container>
      </footer>
  );
};

export default Footer;
