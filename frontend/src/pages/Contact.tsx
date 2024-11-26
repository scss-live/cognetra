import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactFormValues {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const initialValues: ContactFormValues = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
};

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().matches(/^[0-9]{10}$/, 'Please enter a valid phone number'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
});

const Contact: React.FC = () => {
    const handleSubmit = async (values: ContactFormValues, { setSubmitting, resetForm }: any) => {
        try {
            // TODO: Implement API call to send message
            console.log(values);
            resetForm();
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Contact Us - Digital Marketing Agency</title>
                <meta
                    name="description"
                    content="Get in touch with our digital marketing experts. We're here to help grow your business online."
                />
            </Helmet>

            {/* Contact Header */}
            <section className="bg-primary text-white py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h1 className="display-4 fw-bold">Get In Touch</h1>
                            <p className="lead">
                                Have a question or ready to start your next project? We're here to help!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <FaPhone className="text-primary mb-3" size={30} />
                                    <h3 className="h5">Call Us</h3>
                                    <p className="mb-0">
                                        <a href="tel:+1234567890" className="text-decoration-none">
                                            +1 (234) 567-890
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <FaEnvelope className="text-primary mb-3" size={30} />
                                    <h3 className="h5">Email Us</h3>
                                    <p className="mb-0">
                                        <a href="mailto:info@digitalagency.com" className="text-decoration-none">
                                            info@digitalagency.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <FaMapMarkerAlt className="text-primary mb-3" size={30} />
                                    <h3 className="h5">Visit Us</h3>
                                    <p className="mb-0">
                                        123 Marketing Street<br />
                                        Digital City, DC 12345
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="card border-0 shadow">
                                <div className="card-body p-4 p-md-5">
                                    <h2 className="text-center mb-4">Send Us a Message</h2>
                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={handleSubmit}
                                    >
                                        {({ isSubmitting }) => (
                                            <Form>
                                                <div className="mb-3">
                                                    <label htmlFor="name" className="form-label">Name</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        id="name"
                                                        name="name"
                                                    />
                                                    <ErrorMessage
                                                        name="name"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <Field
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                    />
                                                    <ErrorMessage
                                                        name="email"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="phone" className="form-label">Phone (optional)</label>
                                                    <Field
                                                        type="tel"
                                                        className="form-control"
                                                        id="phone"
                                                        name="phone"
                                                    />
                                                    <ErrorMessage
                                                        name="phone"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="subject" className="form-label">Subject</label>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        id="subject"
                                                        name="subject"
                                                    />
                                                    <ErrorMessage
                                                        name="subject"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="message" className="form-label">Message</label>
                                                    <Field
                                                        as="textarea"
                                                        className="form-control"
                                                        id="message"
                                                        name="message"
                                                        rows={5}
                                                    />
                                                    <ErrorMessage
                                                        name="message"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>

                                                <div className="text-center">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary btn-lg"
                                                        disabled={isSubmitting}
                                                    >
                                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                                    </button>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="ratio ratio-21x9">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970693!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1677062082980!5m2!1sen!2s"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
