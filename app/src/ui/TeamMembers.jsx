import React from 'react'
import { Container, Col, Row, Stack, Image, Card } from 'react-bootstrap'

const TeamMembers = () => (
    <Container>
      <Row>
        <Col className={'text-center'}>
          <h1 style={{ fontFamily: 'fantasy', fontWeight: 'bolder', fontSize: '5rem', marginTop: '5rem' }}>Game
            Developers</h1>
        </Col>
        <Col bsPrefix={'team-col'}>
          <Stack direction="horizontal" gap={5}>
            <Image
                src={'https://avatars.githubusercontent.com/u/101910474?v=4'}
                width={171}
                height={180}
                alt="171x180"
                thumbnail
                roundedCircle
            />
            <Card>
              <Card.Body>
                <h3>Hinata Miyazawa</h3>
                <h4>ACM</h4>
                <Card.Link>hinatam@hawaii.edu</Card.Link>
              </Card.Body>
            </Card>
            <Image
                src={'https://avatars.githubusercontent.com/u/70238130?v=4'}
                width={171}
                height={180}
                alt="171x180"
                thumbnail
                roundedCircle
            />
            <Card>
              <Card.Body>
                <h3>Jing Zhef</h3>
                <h4>ICS</h4>
                <Card.Link>jingzhef@hawaii.edu</Card.Link>
                <p><a href="https://jingzhef.github.io/bio/">jingzhef.github.io</a></p>
              </Card.Body>
            </Card>
          </Stack>
        </Col>
        <Col bsPrefix={'team-col'}>
          <Stack direction="horizontal" gap={5}>
            <Image
                src={'https://avatars.githubusercontent.com/u/56580883?v=4'}
                width={171}
                height={180}
                alt="171x180"
                thumbnail
                roundedCircle
            />
            <Card>
              <Card.Body>
                <h3>Kristian Lazo</h3>
                <h4>ICS</h4>
                <Card.Link>lazokris@hawaii.edu</Card.Link>
                <p><a href={'https://lazokris.github.io/bio/'}>lazokris.github.io</a></p>
              </Card.Body>
            </Card>
            <Image
                src={'https://avatars.githubusercontent.com/u/60207632?v=4'}
                width={171}
                height={180}
                alt="171x180"
                thumbnail
                roundedCircle
            />
            <Card>
              <Card.Body>
                <h3>Michael Chun</h3>
                <h4>ICS</h4>
                <Card.Link>mhkfchun@hawaii.edu</Card.Link>
                <p><a href={'https://mhkfchun.github.io/bio/'}>mhkfchun.github.io</a></p>
              </Card.Body>
            </Card>
          </Stack>
        </Col>
      </Row>
    </Container>
)

export default TeamMembers

// <Row>
// <Stack direction="horizontal" gap={5}>
//     <Image
// src={'https://avatars.githubusercontent.com/u/70238130?v=4'}
// width={171}
// height={180}
// alt="171x180"
// thumbnail
// roundedCircle
// />
// <Card>
// <Card.Header>
// <h3>Jing Zhef</h3>
// </Card.Header>
// <Card.Body>
//   <h4>ICS</h4>
// </Card.Body>
// </Card>
// </Stack>
// </Row>
// <Row>
//   <Stack direction="horizontal" gap={5}>
//     <Image
//         src={'https://avatars.githubusercontent.com/u/56580883?v=4'}
//         width={171}
//         height={180}
//         alt="171x180"
//         thumbnail
//         roundedCircle
//     />
//     <Card>
//       <Card.Header>
//         <h3>Kristian Lazo</h3>
//       </Card.Header>
//       <Card.Body>
//         <h4>ICS</h4>
//       </Card.Body>
//     </Card>
//   </Stack>
// </Row>
// <Row>
//   <Stack direction="horizontal" gap={5}>
//     <Image
//         src={'https://avatars.githubusercontent.com/u/60207632?v=4'}
//         width={171}
//         height={180}
//         alt="171x180"
//         thumbnail
//         roundedCircle
//     />
//     <Card>
//       <Card.Header>
//         <h3>Michael Chun</h3>
//       </Card.Header>
//       <Card.Body>
//         <h4>ICS</h4>
//       </Card.Body>
//     </Card>
//   </Stack>
// </Row>