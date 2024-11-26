import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { fetchBlogPost } from '../store/slices/blogSlice';

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const { currentPost: post, loading, error } = useSelector((state: RootState) => state.blog);

    useEffect(() => {
        if (id) {
            dispatch(fetchBlogPost(Number(id)));
        }
    }, [dispatch, id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!post) return <div>Post not found</div>;

    return (
        <>
            <Helmet>
                <title>{post.title} - Cognetra Blog</title>
                <meta name="description" content={post.content.substring(0, 155)} />
            </Helmet>

            <Container className="py-5">
                <Row>
                    <Col lg={8} className="mx-auto">
                        <Card>
                            {post.image_url && (
                                <Card.Img variant="top" src={post.image_url} alt={post.title} />
                            )}
                            <Card.Body>
                                <Card.Title className="h1 mb-4">{post.title}</Card.Title>
                                <div className="mb-3">
                                    <small className="text-muted">
                                        Published on {new Date(post.createdAt).toLocaleDateString()}
                                    </small>
                                </div>
                                <Card.Text style={{ whiteSpace: 'pre-wrap' }}>
                                    {post.content}
                                </Card.Text>
                                <div className="mt-4">
                                    {post.tags.map((tag, index) => (
                                        <Badge 
                                            key={index} 
                                            bg="secondary" 
                                            className="me-2"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default BlogPost;
