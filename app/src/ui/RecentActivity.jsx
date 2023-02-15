import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap';
import Angel_Walls_2 from '../images/Angle_Walls_2.png'
import micheal_1 from '../images/micheal_1.mp4'
import MapWithCollider from '../images/MapWithCollider.mp4'


const RecentActivity = () => {
  return (
      <Container>
        <Col>
          <Row className={'text-center'}>
            <h1 style={{ fontFamily: 'fantasy', fontWeight: 'bolder', fontSize: '5rem', marginTop: '5rem' }}>Project Progress</h1>
          </Row>
          <Row>
            <Stack bsPrefix="bstack">
              <h1>Creating Game Tile Map</h1>
              <embed type="image/png" src={Angel_Walls_2} width="171" height="180"/>
            </Stack>
          </Row>
          <Row>
            <Stack bsPrefix="bstack">
              <h1>Character movement and weapon projectile</h1>
              <video controls="controls"  width="171" height="180">
                <source src={micheal_1} type="video/mp4" />
              </video>
            </Stack>
          </Row>
          <Row>
            <Stack bsPrefix="bstack">
              <h1>Creating simple map with object collider</h1>
              <video controls="controls"  width="171" height="180">
                <source src={MapWithCollider} type="video/mp4" />
              </video>
            </Stack>
          </Row>
        </Col>
      </Container>
  )
}

export default RecentActivity
