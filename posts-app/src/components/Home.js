
import { Carousel, Container, Row, Col } from "react-bootstrap";

import Header from "./Header";

const Home = () => {
  return (
    <div className="container-fluid">
    <Header/>
      <Carousel style={{marginTop:'64px'}}>
        <Carousel.Item style={{ height: "350px" }}>
          <img
            style={{ height: "350px" }}
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzkz5D-5dDCXITyN9r1Z8n96KvV351Dx8Vrg&usqp=CAU"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "350px" }}>
          <img
            style={{ height: "350px" }}
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fE3nk9QAs9bPPAu5y6c7_1u9ypUWwClE8g&usqp=CAU"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "350px" }}>
          <img
            style={{ height: "350px" }}
            className="d-block w-100"
            src="https://picsum.photos/500/300?img=1"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container fluid>
        <Row>
          <Col md={3}>
            <h2>First col</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              feugiat et nulla ac interdum. Quisque faucibus tempus placerat.
              Mauris interdum eros ut lacus laoreet pharetra.
            </p>
          </Col>

          <Col md={3}>
            <h2>Second col</h2>
            <p>
              Fusce porttitor diam et vestibulum maximus. Quisque in risus odio.
              Sed dapibus sodales sem, sit amet lobortis enim eleifend sit amet.
              Morbi in interdum turpis, eu feugiat neque.
            </p>
          </Col>
          <Col md={3}>
            <h2>Third col</h2>
            <p>
              Nullam pulvinar, dolor non congue consequat, diam ex congue dui,
              at aliquet est metus in lectus. Donec hendrerit tempus urna, at
              porttitor urna lobortis tincidunt.
            </p>
          </Col>
          <Col md={3}>
            <h2>Four col</h2>
            <p>
              Quisque bibendum blandit lacinia. Vivamus suscipit lectus et lacus
              rhoncus, et porta est pulvinar. Aenean sed nibh suscipit,
              vestibulum enim in, lacinia orci. Vivamus vulputate, nibh in porta
              varius, libero velit pretium enim, eu sagittis orci risus et
              velit.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;
