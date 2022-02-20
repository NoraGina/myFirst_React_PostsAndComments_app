import { Container, Card, ListGroup, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import Header from "./Header";
import "../style.css";

const Comments = ({ posts, comments }) => {
  const { postId } = useParams();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
    //navigate("/posts")
  };

  /* console.log(postId);
  console.log(posts);
  console.log(comments);
  const filterPost = comments
    .filter((item) => item.postId === postId)
    .map((item) => item.name);
  console.log(filterPost);*/
  return (
    <div>
      <Header />
      {posts
        .filter((post) => post.id === +postId)
        .map((post) => (
          <div className="comments-container" key={post.id}>
            <Card  className="card "  style={{ width: "60%", margin: "auto"}}>
              <Card.Img variant="top" src={post.image} style={{height:'200px'}} />
              <Card.Body>
                <Card.Title>Post</Card.Title>
                <Card.Text
                  style={{
                    color: "#083b13",
                    textAlign: "center",
                    fontSize: "1.2em",
                  }}
                >
                  {post.title}
                </Card.Text>
                <Card.Text>{post.body}</Card.Text>
                <Card.Title style={{ color: "#263d73" }}>Comments</Card.Title>
                {comments
                  .filter((comment) => comment.postId === +postId)
                  .map((comment) => (
                    <div key={comment.id}>
                      <ListGroup style={{ marginBottom: "2px" }}>
                        <ListGroup.Item style={{ color: "#020229" }}>
                          <small> Post: {comment.postId}</small>
                        </ListGroup.Item>
                        <ListGroup.Item style={{ color: "#020229" }}>
                          Name: {comment.name}
                        </ListGroup.Item>
                        <ListGroup.Item style={{ color: "#020229" }}>
                          Email: {comment.email}
                        </ListGroup.Item>
                        <ListGroup.Item style={{ color: "#020229" }}>
                          Body: {comment.body}
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                  ))}
              </Card.Body>
            </Card>
          </div>
        ))}
      <Container style={{ marginBottom: "20px" }}>
        <Row>
          <Col md={{ span: 6, offset: 5 }}>
            <Button
              variant="outline-secondary"
              style={{ width: "60%" }}
              onClick={handleClick}
            >
              Back to posts
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Comments;
/*
              <Link  to="/posts"
                className="nav-link"
                style={{ fontSize: "1.2em", fontWeight: "bold" }}
              >
                Posts
              </Link>
              style={{ width: "30rem", margin: "auto"}}
              
              */
