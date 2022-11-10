import React from "react";
import { Row, Col } from "react-bootstrap";
import "./pagination.css";

const Pagination = ({ pageTotal, setPage }) => {
  const array = Array.from(Array(pageTotal).keys());

  return (
    <Row>
      {array.map((el, index) => {
        return (
          <Col className="d-flex justify-content-around align-items-center flex-column" key={"page" + (index + 1)}>
            <div
              className="page-numb-container d-flex justify-content-around align-items-center flex-column my-4"
              onClick={() => {
                setPage(index + 1);
              }}
            >
              <h3>{index + 1}</h3>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default Pagination;
