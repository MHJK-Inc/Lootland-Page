import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import tiledesign3 from '../images/March-01/tiledesign3.png'
import image from '../images/March-01/image.png'
import ShootingEnemy from '../images/March-01/ShootingEnemy.mp4'
import New_Piskel_3 from '../images/March-01/New_Piskel_3.png'
import Orbit_Projectile_2 from '../images/March-01/Orbit_Projectile_2.png'
import Player_Sprite from '../images/March-01/Player_Sprite.png'
import Yellow_Projectile from '../images/March-01/Yellow_Projectile.png'
import Pink_Missile from '../images/March-01/Pink_Missile.png'
import gamev1 from '../images/March-01/gamev1.mp4';

const ImplementThree = () => {
  return (
      <Row className={'d-grid'}>
        <Row className="mb-5">
          <h1 className="text-center text-decoration-underline mb-5" style={{ fontWeight: 'bolder', fontSize: '3rem', marginTop: '5rem' }}>March 01, 2023</h1>
        </Row>
        <Row>
          <Col style={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flex: '1 0' }}>
            <Card>
              <Card.Img
                  variant="top"
                  src={tiledesign3}
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
                  src={image}
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
                  src={New_Piskel_3}
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
                  src={Orbit_Projectile_2}
                  style={{ height: '100%', objectFit: 'contain' }}
              />
              <Card.Body>
                <Card.Title>Player Weapon Orb Sprite</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flex: '1 0' }}>
            <Card>
              <Card.Img
                  variant="top"
                  src={Player_Sprite}
                  style={{ height: '100%', objectFit: 'contain' }}
              />
              <Card.Body>
                <Card.Title>Player Sprite</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flex: '1 0' }}>
            <Card>
              <Card.Img
                  variant="top"
                  src={Yellow_Projectile}
                  style={{ height: '100%', objectFit: 'contain' }}
              />
              <Card.Body>
                <Card.Title>Lightning Sprite</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flex: '1 0' }}>
            <Card>
              <Card.Img
                  variant="top"
                  src={Pink_Missile}
                  style={{ height: '100%', objectFit: 'contain' }}
              />
              <Card.Body>
                <Card.Title>Fireball Sprite</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flex: '1 0' }}>
            <Card>
              <ReactPlayer url={ShootingEnemy} width="100%" height="100%" controls={true}/>
              <Card.Body>
                <Card.Title>Implementation of Shooting Enemy</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flex: '1 0' }}>
            <Card>
              <ReactPlayer url={gamev1} width="100%" height="100%" controls={true}/>
              <Card.Body>
                <Card.Title>Game Prototype One</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
  );
};
export default ImplementThree;
