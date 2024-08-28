import React from 'react'
import SearchInput from './SearchInput'
import { Col, Container, Row,  } from "react-bootstrap";
import ConverSation from './conversation';
import { Logout } from './Logout';

export const Sidebar = () => {
    return (
      <Container
        fluid
        className="border-end border-secondary p-4 d-flex flex-column"
        
      >
        <Row className="mb-3">
          <Col>
            <SearchInput />
          </Col>
        </Row>
        <hr className="my-2" />
        <Col>
          <ConverSation />
        </Col>
        <Logout />
      </Container>
    );
}
