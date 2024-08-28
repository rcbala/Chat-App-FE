import React from 'react'
import Message from './Message';
import { Container, Spinner } from 'react-bootstrap';
import useGetMessages from '../../hooks/useGetMessages';

const Messages = () => {
  const { messages,loading } = useGetMessages([]);
  console.log("messges :",messages);
  
  return (
    <Container
      fluid
      className="flex-grow-1 "
      style={{
        paddingLeft: "1rem",
        paddingRight: "1rem",
        maxHeight: "80vh",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {loading && (
        <Spinner animation="border" variant="light" role="status"></Spinner>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((message,index) => (
          <div key={message._id ||index}>  
            <Message message={message} />
          </div>
        ))}

      {!loading && messages.length === 0 && (
        <p className="text-center">send a message to start the conversation</p>
      )}
    </Container>
  );
}

export default Messages;

