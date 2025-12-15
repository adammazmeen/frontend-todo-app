import { useNavigate, useParams } from "react-router-dom";
import HabitForm from "../components/HabitForm";
import useLocalStorage from "use-local-storage";

export default function EditHabit() {
  const { id } = useParams();
  const [habits, setHabits] = useLocalStorage("habits", []);
  const navigate = useNavigate();

  const habit = habits.find((h) => h.id === parseInt(id));

  const editHabit = (updatedName) => {
    const updatedHabits = habits.map((h) =>
      h.id === habit.id ? { ...h, name: updatedName } : h
    );
    setHabits(updatedHabits);
    navigate("/");
  };

  return (
    <div>
      <h2 className="mb-3">Edit Habit</h2>

      <HabitForm name={habit.name} onSubmit={editHabit} />
    </div>
  );
}
