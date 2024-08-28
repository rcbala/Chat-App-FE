import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Messages from './messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti"
import useConversation from '../../zustand/useConversation'
import {  useAuthContext } from '../../context/AuthContext'


export const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  
	useEffect(() => {
   
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <Container fluid className="d-flex flex-column">
      {!selectedConversation ? (
        <NoChatSelectedContent />
      ) : (
        <>
          <Row className="bg-secondary text-white px-4 py-2 mb-2 ">
            <Col>
              <span>To:</span>
                <strong> {selectedConversation.fullname }</strong>
            </Col>
          </Row>
          <Row>
            <Col>
              <Messages />
              <MessageInput />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

const NoChatSelectedContent = () => {
  const { authUser } = useAuthContext();
   if (!authUser) {
     return <div>Loading...</div>; // Or any loading state
   }
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center mt-5 "
    >
      <Row className="w-100  ">
        <Col className="text-center">
          <div className="px-4">
            <p className="text-lg md:text-xl text-gray-200 font-semibold">
              Welcome 👋 {authUser.fullname} ❄
            </p>
            <p>Select a chat to start messaging</p>
            <TiMessages className="text-3xl md:text-6xl" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};