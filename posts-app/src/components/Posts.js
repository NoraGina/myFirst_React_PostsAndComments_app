import {
  ListGroup,
  InputGroup,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

const Posts = ({ posts }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = posts.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.body.toLowerCase().includes(searchInput.toLowerCase())
        );
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(posts);
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Header />
      <Container style={{ marginTop: "67px" }}>
        <InputGroup
          className="mb-3"
          value={searchInput}
          placeholder="Search..."
          onChange={(e) => searchItems(e.target.value)}
        >
          <InputGroup.Text id="inputGroup-sizing-default">
            Search post
          </InputGroup.Text>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
      </Container>
      <ListGroup style={{ width: "70%", margin: "auto auto auto auto" }}>
        {searchInput.length > 1
          ? filteredResults.map((post) => {
              return (
                <div key={post.id}>
                  <Link
                    to={`/comments/${post.id}`}
                    style={{ textDecoration: "none", cursor: "pointer" }}
                  >
                    <ListGroup.Item>
                      <strong>
                        <span>{post.id}</span>
                      </strong>
                      <h3 style={{ color: "#0a0426", textAlign: "center" }}>
                        {post.title}
                      </h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <img
                        src={post.image}
                        alt={post.title}
                        style={{ width: "100%" }}
                      ></img>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p>{post.body.substring(0, 200)}</p>
                    </ListGroup.Item>
                  </Link>
                </div>
              );
            })
          : posts.map((post) => {
              return (
                <div
                  key={post.id}
                  style={{
                    marginBottom: "3px",
                    borderBottom: "1px solid black",
                  }}
                >
                  <Link
                    to={`/comments/${post.id}`}
                    style={{ textDecoration: "none", cursor: "pointer" }}
                  >
                    <ListGroup.Item>
                      <strong>
                        <span>{post.id}</span>
                      </strong>
                      <h3 style={{ color: "#0a0426", textAlign: "center" }}>
                        {post.title}
                      </h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <img
                        src={post.image}
                        alt={post.title}
                        style={{ width: "100%" }}
                      ></img>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p>{post.body.substring(0, 200)}</p>
                    </ListGroup.Item>
                  </Link>
                </div>
              );
            })}
      </ListGroup>
      <Container style={{ marginTop: "5px", marginBottom: "20px" }}>
        <Row>
          <Col md={{ span: 6, offset: 5 }}>
            <Button
              variant="outline-secondary"
              style={{ width: "60%" }}
              onClick={handleClick}
            >
              Back to home
            </Button>

            {/*} <Link
                to="/"
                className="nav-link"
                style={{ fontSize: "1.2em", fontWeight: "bold" }}
              >
                <Button variant="outline-secondary" style={{ width: "60%" }}>
              Back to home
              </Button>
        </Link>*/}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Posts;
/*onClick={()=>{navigate("/post/{post.id}")}}
 <Link to={`/comments/${post.id}`}>
 input value={searchTerm} onChange={(e) => setSearchTerm({searchTerm: e.target.value})} />
 `/posts/${post.title}`
 
*/
