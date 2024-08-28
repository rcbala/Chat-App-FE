import React from 'react'
import { Form } from 'react-bootstrap';

const GenderBox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="d-flex">
      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          id="male"
          label="Male"
          checked={selectedGender === "male"}
          onChange={() => onCheckboxChange("male")}
        />
      </Form.Group>
      <Form.Group className="mb-3 ms-3">
        <Form.Check
          type="checkbox"
          id="female"
          label="Female"
          checked={selectedGender === "female"}
          onChange={() => onCheckboxChange("female")}
        />
      </Form.Group>
    </div>
  );
};

export default GenderBox