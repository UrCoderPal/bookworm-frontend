import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'; // Import the Link component
import Header from '../Navbars/Header';

function LanguagesForMusic() {
  const languages = [
    { id: 1, name: 'Marathi', image: '/Images/MarathiM.jpg' },
    { id: 2, name: 'English', image: '/Images/EnglishM.jpg ' },
    { id: 3, name: 'Bangla', image: '/Images/BangaliM.jpg' },
    { id: 4, name: 'Kannada', image: '/Images/KannadaM.jpg' }
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageClick = (languageId) => {
    setSelectedLanguage(languageId);
  };

  return (
    <div><Header/>
    
    <div className='LanguagePage'>
      <div style={{ textAlign: 'center' }}>
        <h1><i>Select Language</i></h1><br />
      </div>
      <div>
        <Row xs={2} md={4} className="g-4">
          {languages.map((language) => (
            <Col key={language.id}>
              <Card className="custom-card" onClick={() => handleLanguageClick(language.id)}>
                <Link to="/Music">
                  <Card.Img className="img card-img-animation" variant="top" src={language.image} />
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
    </div>
  );
}

export default LanguagesForMusic;
