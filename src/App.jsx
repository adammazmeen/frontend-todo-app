import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import Home from "./pages/Home";
import AddHabit from "./pages/AddHabit";
import EditHabit from "./pages/EditHabit";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">
            HabitTracker
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/add">
              Add Habit
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddHabit />} />
          <Route path="/edit/:id" element={<EditHabit />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
