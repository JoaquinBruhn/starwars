import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { reqFilters } from "../../../rquests/recData";
import "./filterBar.css";

const Filterbar = ({ setKey }) => {
  const [filters, setFilters] = useState("");
  useEffect(() => {
    async function getSearch() {
      const res = await reqFilters();
      setFilters(res);
    }
    getSearch();
  }, []);

  return (
    <Row className="filter-bar">
      {filters.length > 0 ? (
        filters.map((el) => {
          return (
            <Col
              lg={2}
              xs={4}
              key={el}
              onClick={() => {
                setKey(el);
              }}
            >
              <h4 className="filter-selector ">{el}</h4>
            </Col>
          );
        })
      ) : (
        <Col>
          <h4 className="filter-selector">Loading Filters</h4>{" "}
        </Col>
      )}
    </Row>
  );
};

export default Filterbar;
