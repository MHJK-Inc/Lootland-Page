import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import micheal_1 from '../images/micheal_1.mp4';
import MapWithCollider from '../images/MapWithCollider.mp4';
import Angel_Walls_2 from '../images/Angle_Walls_2.png'

const ImplementOne = () => {
  return (
      <Row>
        <Row className="mb-5">
          <h1 className="text-center text-decoration-underline mb-5"
              style={{ fontWeight: 'bolder', fontSize: '3rem', marginTop: '5rem' }}>February 15, 2023</h1>
        </Row>
        <Row style={{ backgroundColor: 'gray', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '-5rem' }}>
          <Col style={{
            backgroundColor: 'gray',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            flex: '1 0'
          }}>
            <Card>
              <Card.Img
                  variant="top"
                  src={Angel_Walls_2}
                  style={{ height: '100%', objectFit: 'contain' }}
              />
              <Card.Body>
                <Card.Title>Creating Game Tile Map</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{
            backgroundColor: 'gray',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            flex: '1 0'
          }}>
            <Card>
              <ReactPlayer url={micheal_1} width="100%" height="100%" controls={true}/>
              <Card.Body>
                <Card.Title>Character movement and weapon projectile</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{
            backgroundColor: 'gray',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            flex: '1 0' }}>
            <Card>
              <ReactPlayer url={MapWithCollider} width="100%" height="100%" controls={true}/>
              <Card.Body>
                <Card.Title>Creating simple map with object collider</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
  );
};
export default ImplementOne;
