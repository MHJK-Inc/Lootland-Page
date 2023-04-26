import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import AirBubble from '../images/AirBubble.png';
import Boss from '../images/Boss.png';
import Octo from '../images/Octo.png';

const ImplementFive = () => {
  return (
      <Row className={'d-grid'}>
        <Row className="mb-5">
          <h1 className="text-center text-decoration-underline mb-5" style={{ fontWeight: 'bolder', fontSize: '3rem', marginTop: '5rem' }}>April 26, 2023</h1>
        </Row>
        <Row>
          <Col style={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flex: '1 0' }}>
            <Card>
              <Card.Img
                  variant="top"
                  src={Boss}
                  style={{ height: '100%', objectFit: 'contain' }}
              />
              <Card.Body>
                <Card.Title>Boss Sprite</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flex: '1 0' }}>
            <Card>
              <Card.Img
                  variant="top"
                  src={Octo}
                  style={{ height: '100%', objectFit: 'contain' }}
              />
              <Card.Body>
                <Card.Title>Enemy 2 Sprite</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flex: '1 0' }}>
            <Card>
              <Card.Img
                  variant="top"
                  src={AirBubble}
                  style={{ height: '100%', objectFit: 'contain' }}
              />
              <Card.Body>
                <Card.Title>Air Bubble Sprite</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
  );
};
export default ImplementFive;
