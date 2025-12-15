import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function HabitForm({ name = "", onSubmit }) {
  const [habitName, setHabitName] = useState(name);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(habitName);
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Habit Name</Form.Label>
        <Form.Control
          type="text"
          value={habitName}
          placeholder="e.g. Drink Water"
          onChange={(e) => setHabitName(e.target.value)}
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
