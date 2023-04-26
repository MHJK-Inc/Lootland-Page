import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import ACM487_FINAL_Storyboard from '../images/ACM487_Final_Storyboard.png'
import Start from '../images/March-22/Start.png';
import Instruct from '../images/Instruct.png'
import Game_Play2 from '../images/Game_Play2.mp4';
import ReactPlayer from 'react-player';

const Home = () => {
  return (
      <Container>
        <Row className={'text-center w-100'}>
          <Image src={Start} className={'p-0 m-0 h-25'}/>
        </Row>
        <Row className={'text-center w-100'}>
          <ReactPlayer url={Game_Play2} width="100%" height="100%" controls={true}/>
        </Row>
        <Col>
          <Row>
            <h3>Overview</h3>
            <p>Lootland: Treasure into Sea is a top-down survival exploration game that plunges players into a thrilling
              adventure to find hidden treasures and artifacts. A treasure hunter on a quest to uncover the secrets of
              Atlantis, players must survive waves of increasingly strong enemies while maintaining their air capacity.
            </p>
            <p>Air can be lost through enemy attacks or over time, but it can also be gained by exploring the map or
              defeating enemies. The game features innovative objectives that incentivize players to explore the map,
              including collecting items and closing gates guarded by stronger enemies to earn extra treasure. As the
              waves progress, the game becomes more challenging, requiring players to use strategy and quick reflexes to
              survive.</p>
          </Row>
          <Row>
            <h3>Story</h3>
            <p>A treasure Hunter fond of ancient and mysterious artifacts begins searching for his next big mark:
              Atlantis. Using all the technology his line of work can buy and the powers of the ancient artifacts he’s
              found through the years, he must make his way through increasingly dangerous and fantastical waters in
              search of his prize. What mysteries does Atlantis hold for those brave enough to go looking?</p>
          </Row>
          <Row>
            <h3>Story Board</h3>
            <Image src={ACM487_FINAL_Storyboard} fluid/>
          </Row>
          <Row>
            <h3>Game Mechanics</h3>
            <Image src={Instruct} fluid/>
          </Row>
        </Col>

      </Container>
  )
}

export default Home