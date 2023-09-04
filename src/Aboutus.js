import React from 'react';
import Card from 'react-bootstrap/Card';
import Header from './CompPages/Navbars/Header'
import backgroundImage from '../src/glasses-1052010_1280.jpg';




const Aboutus = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensures the background covers the entire viewport height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };


    return (
        <>
        <Header/>
        <div style={backgroundStyle} className="aboutus">
            <Card>
                <Card.Body>
                    {/* <Card.Title>Welcome to Bookworm</Card.Title> */}
                    <Card.Text>
                        <h2>Welcome to Bookworm</h2>
                        <p>
                            Bookworm is a passionate community of literature and performing art lovers. Our journey began with a shared love for books, music, and films, and the desire to create a virtual haven where enthusiasts like us can explore, buy, store, and enjoy digital content.
                        </p>
                    </Card.Text>
                    <Card.Text>
                        <h3>Our Vision</h3>
                        <p>
                            At Bookworm, we envision a world where creativity knows no bounds. Our aim is to provide a seamless online platform where you can immerse yourself in the realms of literature, music, and film, all from the comfort of your digital space. We're here to redefine how you experience and appreciate art in its diverse forms.
                        </p>
                    </Card.Text>
                    <Card.Text>
                        <h3>What We Offer</h3>
                        <p>
                            Our virtual bookshop is more than just a shop; it's a sanctuary for the soul. Browse through a wide collection of digital books, from timeless classics to contemporary masterpieces. Lose yourself in the harmonious rhythms of music albums that span genres and eras. Immerse yourself in thought-provoking short films and captivating documentaries that open windows to new perspectives.
                        </p>
                    </Card.Text>
                    <Card.Text>
                        <h3>Our Commitment</h3>
                        <p>
                            Bookworm is committed to curating a selection that inspires, educates, and entertains. We're dedicated to providing an intuitive and user-friendly platform that makes your digital journey smooth and delightful. With our love for art and technology, we're excited to bring you an experience that transcends boundaries.
                        </p>
                    </Card.Text>
                    <Card.Text>
                        <h3>Join Us</h3>
                        <p>
                            Whether you're a seasoned bookworm, a music aficionado, a film enthusiast, or simply someone eager to explore, Bookworm welcomes you with open arms. Join our virtual community and embark on a journey of endless imagination and creativity.
                        </p>
                        <p>Stay tuned as we continue to weave stories, melodies, and visuals in the digital realm.</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </>

    );
};

export default Aboutus;



