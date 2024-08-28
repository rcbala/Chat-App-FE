import React from "react";
import { Image,  } from "react-bootstrap";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilepic = fromMe ? authUser.profilepic: selectedConversation?.profilepic;
  const blueBgColor = fromMe ? "bg-blue-color" : "";
  return (
    <div className={`chat-message-main-div ${chatClassName}`}>
      <div className="chat-message-avatar me-3">
        <Image
          src={profilepic}
          alt="user avatar"
          roundedCircle
          width={30} 
          height={30} 
        />
      </div>
      <div>
        <div className={`text-white bg-primary p-2 rounded ${blueBgColor}`}>{message.message}</div>
        <div className="text-muted small d-flex gap-1 align-items-center mt-1">
          12:45 PM
        </div>
      </div>
    </div>
  );
};
 
export default Message;
