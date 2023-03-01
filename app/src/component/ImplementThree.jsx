import React from 'react'
import { Card, Col, Row, Carousel } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import tiledesign3 from '../images/March-01/tiledesign3.png'
import image from '../images/March-01/image.png'
import map2 from '../images/March-01/map2.png'
import map3 from '../images/March-01/map3.png'
import ShootingEnemy from '../images/March-01/ShootingEnemy.mp4'
import New_Piskel_3 from '../images/March-01/New_Piskel_3.png'
import Orbit_Projectile_2 from '../images/March-01/Orbit_Projectile_2.png'
import Player_Sprite from '../images/March-01/Player_Sprite.png'
import Yellow_Projectile from '../images/March-01/Yellow_Projectile.png'
import Pink_Missile from '../images/March-01/Pink_Missile.png'
import gamev1 from '../images/March-01/gamev1.mp4';

const ImplementThree = () => {
  return (
      <Row style={{ marginTop: '-5rem', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Row className="mb-5">
          <h1 className="text-center text-decoration-underline mb-5" style={{ fontWeight: 'bolder', fontSize: '3rem', marginTop: '5rem' }}>March 01, 2023</h1>
        </Row>
        <Row style={{ justifyContent: 'space-evenly', alignItems: 'center', marginTop: '-5rem' }}>
          <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flex: '1 0' }}>
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
          <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flex: '1 0' }}>
            <Carousel>
              <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                />
                <Carousel.Caption>
                  <p style={{ color: 'black'}}>Map Level Design</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={map2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                  <p style={{ color: 'black'}}>Map Level Design</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={map3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                  <p style={{ color: 'black'}}>
                    Map Level Design
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ backgroundColor: 'grey'}}>
                <img
                    className="d-block w-100"
                    src={New_Piskel_3}
                    alt="Fourth slide"
                />

                <Carousel.Caption>
                  <p style={{ color: 'black'}}>
                    Fish Enemy Sprite
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ backgroundColor: 'grey'}}>
                <img
                    className="d-block w-100"
                    src={Orbit_Projectile_2}
                    alt="Fifth slide"
                />

                <Carousel.Caption>
                  <p style={{ color: 'black'}}>
                    Orbiting Sprite
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ backgroundColor: 'grey'}}>
                <img
                    className="d-block w-100"
                    src={Player_Sprite}
                    alt="Sixth slide"
                />

                <Carousel.Caption>
                  <p style={{ color: 'black'}}>
                    Player Sprite
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ backgroundColor: 'grey'}}>
                <img
                    className="d-block w-100"
                    src={Yellow_Projectile}
                    alt="Seventh slide"
                />

                <Carousel.Caption>
                  <p style={{ color: 'black'}}>
                    Yellow Projectile Sprite
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ backgroundColor: 'grey'}}>
                <img
                    className="d-block w-100"
                    src={Pink_Missile}
                    alt="Eight slide"
                />

                <Carousel.Caption>
                  <p style={{ color: 'black'}}>
                    Projectile Sprite
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flex: '1 0' }}>
            <Card>
              <ReactPlayer url={ShootingEnemy} width="100%" height="100%" controls={true}/>
              <Card.Body>
                <Card.Title>Implement Shooting Enemy</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flex: '1 0' }}>
            <Card>
              <ReactPlayer url={gamev1} width="100%" height="100%" controls={true}/>
              <Card.Body>
                <Card.Title>Initial draft version of our game</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
  );
};
export default ImplementThree;
