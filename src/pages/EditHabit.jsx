import { useParams } from "react-router-dom";
import HabitForm from "../components/HabitForm";

export default function EditHabit() {
  const { id } = useParams();

  const habit = { name: "Mock Habit" };

  return (
    <div>
      <h2 className="mb-3">Edit Habit</h2>

      <HabitForm name={habit.name} />
    </div>
  );
}
