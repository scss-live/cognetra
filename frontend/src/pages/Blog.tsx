import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { fetchBlogPosts } from '../store/slices/blogSlice';

const Blog: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { posts, loading, error } = useSelector((state: RootState) => state.blog);

    useEffect(() => {
        dispatch(fetchBlogPosts());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <Helmet>
                <title>Blog - Cognetra</title>
                <meta name="description" content="Latest insights and updates from Cognetra" />
            </Helmet>

            <Container className="py-5">
                <h1 className="text-center mb-5">Our Blog</h1>
                <Row>
                    {posts.map(post => (
                        <Col key={post.id} md={6} lg={4} className="mb-4">
                            <Card className="h-100">
                                {post.image_url && (
                                    <Card.Img variant="top" src={post.image_url} alt={post.title} />
                                )}
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>
                                        {post.content.substring(0, 150)}...
                                    </Card.Text>
                                    <div className="mt-auto">
                                        <Link to={`/blog/${post.id}`} className="btn btn-primary">
                                            Read More
                                        </Link>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    <small>
                                        {new Date(post.createdAt).toLocaleDateString()}
                                    </small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Blog;
