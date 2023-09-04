import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './CompPages/Navbars/Header';

function Feedback() {
  const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
    feedback: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    feedback: Yup.string().required('Feedback is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
    <Header/>
    <div className="feedback-container">
      <Card className="feedback-card">
        <Card.Body className="feedback-card-body">
          <Card.Title><h2>Feedback Page</h2></Card.Title>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {formik => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="name" style={{ color: "white" }}>Enter your name</label>
                  <Field type="text" id="name" name="name" className="form-control" />
                  <ErrorMessage name="name" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" style={{ color: "white" }}>Email address</label>
                  <Field type="email" id="email" name="email" className="form-control" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="phoneNumber" style={{ color: "white" }}>Phone number</label>
                  <Field type="text" id="phoneNumber" name="phoneNumber" className="form-control" />
                  <ErrorMessage name="phoneNumber" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="feedback" style={{ color: "white" }}>Enter your feedback</label>
                  <Field as="textarea" id="feedback" name="feedback" rows={3} className="form-control" />
                  <ErrorMessage name="feedback" component="div" className="text-danger" />
                </div>

                <div className="d-flex justify-content-center">
                  <Button variant="primary" type="submit" disabled={formik.isSubmitting}>Submit</Button>
                </div>
              </Form>
            )}
          </Formik>
          </Formik>
        </Card.Body>
      </Card>
    </div>
    </>
  );
}
export default Feedback;