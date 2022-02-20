import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isCurrentURL = (url) => {
    return location.pathname.toLowerCase() === url.toLowerCase();
  };

  return (
    <div className="header">
      <Navbar
        expand="lg"
        variant="dark"
        fixed="top"
        className="mb-3"
        style={{ fontSize: "1.2em", backgroundColor: "#3f5052" }}
      >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto" activeKey="/home">
            <Nav.Item>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </Nav.Item>
          </Nav>
          {!isCurrentURL("/posts") ? (
            <Nav className="me-auto">
              <Nav.Item>
                <Link to="/posts" className="nav-link">
                  Posts
                </Link>
              </Nav.Item>
            </Nav>
          ) : null}
          {!isCurrentURL("/contact") ? (
            <Nav className="justify-content-end">
              <Nav.Item>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </Nav.Item>
            </Nav>
          ) : null}
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
