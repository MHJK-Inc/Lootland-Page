import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import Chest from '../images/March-22/Chest.png';
import Eel from '../images/March-22/Eel.png';
import EMP from '../images/March-22/EMP.png';
import New_Player_Sprite from '../images/March-22/New_Player_Sprite.png';

const ImplementTwo = () => {
  return (
      <Row className={'d-grid'}>
        <Row className="mb-5">
          <h1 className="text-center text-decoration-underline mb-5" style={{ fontWeight: 'bolder', fontSize: '3rem', marginTop: '5rem' }}>March 22, 2023</h1>
        </Row>
        <Row>
          <Col style={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flex: '1 0' }}>
            <Card>
              <Card.Img
                  variant="top"
                  src={Chest}
                  style={{ height: '100%', objectFit: 'contain' }}
              />
              <Card.Body>
                <Card.Title>Update on Tile Set design</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flex: '1 0' }}>
            <Card>
              <Card.Img
                  variant="top"
                  src={Eel}
                  style={{ height: '100%', objectFit: 'contain' }}
              />
              <Card.Body>
                <Card.Title>Map Design</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flex: '1 0' }}>
            <Card>
              <Card.Img
                  variant="top"
                  src={EMP}
                  style={{ height: '100%', objectFit: 'contain' }}
              />
              <Card.Body>
                <Card.Title>Enemy 1 Sprite</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flex: '1 0' }}>
            <Card>
              <Card.Img
                  variant="top"
                  src={New_Player_Sprite}
                  style={{ height: '100%', objectFit: 'contain' }}
              />
              <Card.Body>
                <Card.Title>Player Weapon Orb Sprite</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
  );
};
export default ImplementTwo;
