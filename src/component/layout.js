import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Layout = ({children}) => (
  <div>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to={{pathname: '/'}} className="text-decoration-none text-reset">
            Todo App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Link
              to={{pathname:'/login'}}
              className="text-decoration-none text-reset">
                Login
            </Link>
            <Link
              to={{pathname:'/register'}}
              className="text-decoration-none text-reset">
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
      <Row className="my-5">
        <Col>
          {children}
        </Col>
      </Row>
    </Container>
  </div>
)

export default Layout