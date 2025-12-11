import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HabitCard({ habit }) {
  return (
    <Card className="mb-3">
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div>
          <Card.Title className="mb-1">{habit.name}</Card.Title>
          <div className="small text-muted">
            Streak: <Badge bg="info">{habit.streak}</Badge>
          </div>
        </div>

        <div>
          <Button
            variant={habit.completedToday ? "success" : "outline-success"}
            className="me-2"
          >
            {habit.completedToday ? "Done Today ✓" : "Mark"}
          </Button>
          <Link to={`/edit/${habit.id}`} className="btn btn-warning me-2">
            Edit
          </Link>
          <Button variant="danger">Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
