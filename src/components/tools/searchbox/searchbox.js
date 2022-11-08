import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Searchbox = () => {
  return (
    <InputGroup className="mb-3 searchbox">
      <Form.Control variant="light" aria-label="Recipient's username" aria-describedby="basic-addon2" />
      <Button variant="light" id="button-addon2">
        Search
      </Button>
    </InputGroup>
  );
};

export default Searchbox;
