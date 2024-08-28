import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import ConversationList from './conversations'
import useGetConversation from '../../hooks/useGetConversation'

const ConverSation = () => {
     
    const { loading, conversations } = useGetConversation();
    console.log("CONVERSATIONS:",conversations);
    
  return (
      <Container fluid className="p-2" style={{ maxHeight: '80vh', overflowY: 'auto' ,overflowX:"hidden"}}>
          <Row className="d-flex flex-column">
              <Col className="p-0">
                  
                  {conversations.map((conversation,idx) => (
                      <ConversationList
                      key={conversation._id}
                          conversation={conversation}
                          lastIdx={idx === conversations.length -1}
                      />
                  ))}
              
                {loading ? <Spinner animation="border" variant="light" role="status" />:null}
              
              </Col>
           </Row>

          </Container>
  )
}
export default ConverSation;