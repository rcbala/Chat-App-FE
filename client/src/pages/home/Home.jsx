import React from 'react'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { MessageContainer } from '../../components/mesages/MessageContainer';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
  return (
    <Container
      fluid
      className="d-flex h-100 align-items-stretch bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"
    >
          <Row className="w-100 flex-nowrap">
              <Col className="p-0" xs={6} sm={4} md={3}>
              <Sidebar />
              </Col>
              <Col className="p-0" xs={6} sm={8} md={9}>
                  <MessageContainer />
              </Col>
      </Row>
    </Container>
  );
}

export default Home