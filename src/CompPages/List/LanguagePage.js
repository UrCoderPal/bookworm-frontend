import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../Navbars/Header'

function LanguagePage() {
  const cardData = [
    { id: 1, image: '/Images/marathi.jpg', link: '/EbookShowByCard' },
    { id: 2, image: '/Images/english.jpg', link: '/EbookShowByCard' },
    { id: 3, image: '/Images/bangla.png', link: '/EbookShowByCard' },
    { id: 4, image: '/Images/kannada.jpg', link: '/EbookShowByCard' }];

  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [languageBooks, setLanguageBooks] = useState([]);

  return (
    <>
    <Header/>
    <div>
      <div className='LanguagePage'>
        <div style={{ textAlign: 'center' }}>
          <h1><i>Select Language</i></h1><br></br>
        </div>
        <div>
          <Row xs={2} md={4} className="g-4">
            {cardData.map((card) => (
              <Col key={card.id}>
                <Card className="custom-card">
                  <a href='/EBook'>
                    <Card.Img className="img card-img-animation" variant="top" src={card.image} />
                  </a>
                  <span content="center">
                    <div className="text-center">
                    </div>
                  </span>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
    </>
  );
}

export default LanguagePage;