import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './CompPages/Navbars/Header';

const Contactus = () => {
  return (
    <>
    <Header/>
    <div className="contactus">
      <Card>
        <Card.Body>
          <Card.Title><h2>Contact Us</h2></Card.Title>
          <Card.Text>
            Thank you for your interest in Bookworm.com! We're excited to hear from you. If you have any questions, suggestions, or inquiries, please get in touch with us here:
          </Card.Text>
          <Card.Text>
            <strong>Email:</strong> info@bookwormproject.com
            <br />
            <strong>Phone:</strong> +1 (555) 123-4567
            <br />
            <strong>Mailing Address:</strong>
            <address>
              Bookworm Project Headquarters
              <br />
              1234 Reading Avenue
              <br />
              Mumbai
            </address>
          </Card.Text>
          <Card.Text>
            <strong>Social Media: </strong>
            <a href="https://twitter.com/bookwormproject" target="_blank" rel="noopener noreferrer">Twitter</a> and <a href="https://instagram.com/bookwormproject" target="_blank" rel="noopener noreferrer">Instagram</a> for the latest updates and news.
          </Card.Text>
          <Card.Text>
            <strong>Feedback and Support: </strong>
            If you're facing any issues with our website or app, or if you have suggestions for improvement, please email our support team at <a href="mailto:support@bookwormproject.com">support@bookwormproject.com</a>.
          </Card.Text>
          <Card.Text>
            <strong>Collaborations and Partnerships: </strong>
            If you're interested in collaborating with us or exploring partnership opportunities, please contact our partnerships team at <a href="mailto:partnerships@bookwormproject.com">partnerships@bookwormproject.com</a>.
          </Card.Text>
          {/* <Card.Text>
            <strong>Media Inquiries: </strong>
            For media inquiries, interviews, or press releases, please reach out to our media relations team at <a href="mailto:media@bookwormproject.com">media@bookwormproject.com</a>.
          </Card.Text> */}
          <Card.Text>
            We value your feedback and are committed to providing the best experience possible. Don't hesitate to contact us – we're here to help!
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </>
  );
};

export default Contactus;