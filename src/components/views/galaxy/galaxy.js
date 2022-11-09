import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { reqNumbPage } from "../../../rquests/recData";
import Filterbar from "../../tools/filterBar.js/filterbar";
import "./galaxy.css";

const Galaxy = () => {
  const [key, setKey] = useState("people");
  const [cardListData, setCardListData] = useState([]);
  //   const [pageNumb, setPageNumb] = useState(undefined);

  useEffect(() => {
    async function getNumbPage(key, pageNumb) {
      console.log(key);
      const res = await reqNumbPage(key, pageNumb);
      setCardListData(res.results);
    }
    getNumbPage(key);
  }, [key]);

  return (
    <div className="galaxy-container">
      <Container fluid>
        <Filterbar setKey={setKey} />
        <Row>
          {cardListData.length > 0 ? (
            cardListData.map((el) => {
              return <Col key={el.name}>{el.name}</Col>;
            })
          ) : (
            <Col>Loading resources</Col>
          )}
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Galaxy;
