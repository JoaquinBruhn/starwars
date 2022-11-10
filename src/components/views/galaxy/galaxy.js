import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { reqObjNumb, reqNumbPage } from "../../../rquests/recData";
import Filterbar from "../../tools/filterBar.js/filterbar";
import GalaxyCard from "../../cards/galaxyCard/galaxyCard";
import Pagination from "../../tools/pagination/pagination";
import Loader from "../../tools/loader/loader";
import "./galaxy.css";

const Galaxy = () => {
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState("people");
  const [cardListData, setCardListData] = useState([]);
  const [pageTotal, setPageTotal] = useState(1);
  const [page, setPage] = useState(1);

  async function getNumbPage(key, pageNumb) {
    setLoading(true);
    const res = await reqNumbPage(key, pageNumb);
    const count = await reqObjNumb(key);
    const pages = Math.floor(count / 10) + 1;
    setPageTotal(pages);
    setCardListData(res.results);
    setLoading(false);
  }

  useEffect(() => {
    if (page === 1) {
      console.log("new fetch");
      getNumbPage(key);
    } else {
      setPage(1);
    }
  }, [key]);

  useEffect(() => {
    console.log("new fetch");

    getNumbPage(key, page);
  }, [page]);

  return (
    <div className="galaxy-container">
      <Container fluid>
        <Filterbar setKey={setKey} />
        {loading ? (
          <Loader />
        ) : (
          <>
            <Row>
              {cardListData.length > 0 ? (
                cardListData.map((el, index) => {
                  return <GalaxyCard item={el} characterType={key} key={index} />;
                })
              ) : (
                <Col>Loading resources</Col>
              )}
            </Row>
            {pageTotal ? (
              <Pagination pageTotal={pageTotal} setPage={setPage} />
            ) : (
              <Row>
                <Col>. . . Loading</Col>
              </Row>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default Galaxy;
