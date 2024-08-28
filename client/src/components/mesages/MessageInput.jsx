import React, { useState } from 'react';
import { Form, Button, Spinner } from "react-bootstrap";
import { BsSend } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage';
import "./messages.css"
const MessageInput = () => {

  const [message, setMessage] = useState("");

  const {loading,sendMessage }=useSendMessage();

  const handleSubmit = async (e) => {

    e.preventDefault();
    
    if (!message) return;

    await sendMessage(message);
    window.location.reload()
    setMessage("")

}

  return (
    <Form
      className=" message-input-fixed-bottom  "
      onSubmit={handleSubmit}

    >
      <Form.Group controlId="messageInput">
        <Form.Control
          type="text"
          className="border text-sm rounded-lg bg-gray-700 border-blue-600 text-black"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ padding: "0.5rem" }}
        />
        <Button
          type="submit"
          className="position-absolute top-50 end-0 translate-middle-y pe-4"
        >
          {loading ? (
            <Spinner animation="border" variant="light" role="status" />
          ) : (
            <BsSend />
          )}
        </Button>
      </Form.Group>
    </Form>
  );
}

export default MessageInput;

