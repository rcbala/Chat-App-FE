import React from 'react'
import { Image, Row, Col,  } from "react-bootstrap";
import { BsFillCircleFill } from "react-icons/bs";
import "./sidebar.css"
import useConversation from '../../zustand/useConversation';


const ConversationList = ({ conversation, lastIdx }) => {

  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <Row className={` p-4 rounded cursor-pointer ${isSelected ? "bg-light-blue" : ''}`}
        onClick={() => setSelectedConversation (conversation)}      
      >
        <Col xs="auto">
          <div className="position-relative">
            <Image
              src={conversation.profilepic}
              alt="pic"
              roundedCircle
              width={40} // Adjust the size as needed
              height={40} // Adjust the size as needed
            />
            <BsFillCircleFill
              className="position-absolute bottom-0 end-0 text-success"
              style={{ fontSize: "1.3rem" }} // Adjust the size as needed
            />
          </div>
        </Col>
        <Col className="d-flex flex-column">
          <Row className="mb-1">
            <Col className="d-flex justify-content-between align-items-center">
              <p className="mb-0 fw-bold text-dark">{conversation.fullname}</p>
              {/* <span className="fs-4">🎃</span> */}
            </Col>
          </Row>
        </Col>
      </Row>
      {!lastIdx && <hr className="my-2" />}
    </>
  );
}
export default ConversationList