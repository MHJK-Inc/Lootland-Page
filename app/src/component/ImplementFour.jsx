import React from 'react';
import { Col, Row, Carousel } from 'react-bootstrap';
import Chest from '../images/March-22/Chest.png';
import Eel from '../images/March-22/Eel.png';
import EMP from '../images/March-22/EMP.png';
import New_Player_Sprite from '../images/March-22/New_Player_Sprite.png';

const ImplementTwo = () => {
  return (
      <Row style={{ marginTop: '-5rem', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Row className="mb-5">
          <h1 className="text-center text-decoration-underline mb-5" style={{ fontWeight: 'bolder', fontSize: '3rem', marginTop: '5rem' }}>March 22, 2023</h1>
        </Row>
        <Row style={{ justifyContent: 'space-evenly', alignItems: 'center', marginTop: '-5rem' }}>
          <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flex: '1 0' }}>
            <Carousel>
              <Carousel.Item style={{ backgroundColor: 'grey'}}>
                <img
                    className="d-block w-100"
                    src={Chest}
                    alt="Fourth slide"
                />

                <Carousel.Caption>
                  <p style={{ color: 'red'}}>
                    Treasure Sprite
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ backgroundColor: 'grey'}}>
                <img
                    className="d-block w-100"
                    src={Eel}
                    alt="Fifth slide"
                />

                <Carousel.Caption>
                  <p style={{ color: 'red'}}>
                    Eel Sprite
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ backgroundColor: 'grey'}}>
                <img
                    className="d-block w-100"
                    src={EMP}
                    alt="Sixth slide"
                />

                <Carousel.Caption>
                  <p style={{ color: 'red'}}>
                    EMP Sprite
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ backgroundColor: 'grey'}}>
                <img
                    className="d-block w-100"
                    src={New_Player_Sprite}
                    alt="Seventh slide"
                />

                <Carousel.Caption>
                  <p style={{ color: 'red'}}>
                    Player Sprite
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Row>
  );
};
export default ImplementTwo;
