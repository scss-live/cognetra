import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import api from '../config/api';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .required('Required')
        }),
        onSubmit: async (values, { setSubmitting, setStatus }) => {
            try {
                const response = await api.post('/auth/login', values);
                localStorage.setItem('token', response.data.token);
                navigate('/dashboard');
            } catch (error: any) {
                setStatus(error.response?.data?.message || 'Login failed');
            } finally {
                setSubmitting(false);
            }
        }
    });

    return (
        <>
            <Helmet>
                <title>Login - Cognetra</title>
                <meta name="description" content="Login to your Cognetra account" />
            </Helmet>

            <Container className="py-5">
                <Row>
                    <Col md={6} lg={4} className="mx-auto">
                        <Card>
                            <Card.Body>
                                <h2 className="text-center mb-4">Login</h2>
                                {formik.status && (
                                    <div className="alert alert-danger">{formik.status}</div>
                                )}
                                <Form onSubmit={formik.handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            {...formik.getFieldProps('email')}
                                            isInvalid={!!(formik.touched.email && formik.errors.email)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formik.errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            {...formik.getFieldProps('password')}
                                            isInvalid={!!(formik.touched.password && formik.errors.password)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formik.errors.password}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="w-100"
                                        disabled={formik.isSubmitting}
                                    >
                                        {formik.isSubmitting ? 'Logging in...' : 'Login'}
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;
