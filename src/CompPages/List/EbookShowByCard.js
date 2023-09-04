import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import Carousel from 'react-bootstrap/Carousel';
import Header from '../Navbars/Header'

function EbookShowByCard() {
  const [Products, setProducts] = useState([]);

  const init = () => {
    fetch("https://example-data.draftbit.com/books")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <>
    <Header/>
    <div className="">
      <Container>
        <Row>
          <Col>
            <h2 style={{ textAlign: "center" }}><u>eBooks</u></h2><br></br>
          </Col>
        </Row>
        <Row xs={1} sm={2} md={3} lg={4} xl={4} gap={3}>
          {Products.map((prod) => (
            <Col key={prod.id}>
              <Card className="h-100">
                <div className="d-flex justify-content-center">
                  <Card.Img
                    style={{ maxHeight: '200px', width: 'auto' }}
                    variant="top"
                    src={prod.image_url}
                  />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text>
                      {showDescription ? prod.description : `${prod.description.slice(0, 100)}...`}
                    </Card.Text>
                    <Card.Text>{prod.category}</Card.Text>
                  </div>
                  <Button
                    className="mt-2"
                    variant="warning"
                    onClick={toggleDescription}
                    block
                  >
                    {showDescription ? "Show Less" : "Show More"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Dropdown>
              {/* ... Dropdown content */}
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default EbookShowByCard;