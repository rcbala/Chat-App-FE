import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { Button, Form } from 'react-bootstrap';

const SearchInput = () => {
  return (
    <Form className="d-flex align-items-center gap-2">
      <Form.Control
        type="text"
        placeholder="search..."
        className="rounded-pill border-secondary"
      />

      <Button
        variant="primary"
        className="rounded-circle d-flex align-items-center justify-content-center"
      >
        <IoSearchSharp style={{ width: "19px", height: "24px" }} />
      </Button>
    </Form>
  );
}

export default SearchInput