import React from 'react';
import { BiLogOutCircle } from "react-icons/bi";
import useLogOut from '../../hooks/useLogOut';
import { Spinner } from "react-bootstrap";


export const Logout = () => {
  const{loading,logout}= useLogOut();
  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOutCircle style={{ width: "40px", height: "40px" }} onClick={logout} />
      ) : (
        <Spinner animation="border" variant="light" role="status" />
      )}
    </div>
  );
}
