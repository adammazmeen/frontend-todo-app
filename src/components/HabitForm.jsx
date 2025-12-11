import { Form, Button } from "react-bootstrap";

export default function HabitForm({ name = "" }) {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Habit Name</Form.Label>
        <Form.Control
          type="text"
          defaultValue={name}
          placeholder="e.g. Drink Water"
          required
        />
      </Form.Group>

      <div className="d-flex">
        <Button type="submit" variant="primary" className="me-2">
          Save
        </Button>
        <Button variant="secondary" onClick={() => window.history.back()}>
          Cancel
        </Button>
      </div>
    </Form>
  );
}
