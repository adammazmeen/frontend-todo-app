import useLocalStorage from "use-local-storage";
import HabitForm from "../components/HabitForm";
import { useNavigate } from "react-router-dom";

export default function AddHabit() {
  const [habits, setHabits] = useLocalStorage("habits", []);
  const navigate = useNavigate();

  const addHabit = (name) => {
    const id = Date.now();
    const newHabit = {
      id,
      name,
      completedToday: false,
      streak: 0,
      lastCompleted: null,
    };

    setHabits([...habits, newHabit]);
    navigate("/");
  };

  return (
    <div>
      <h2 className="mb-3">Add New Habit</h2>

      <HabitForm onSubmit={addHabit} />
    </div>
  );
}
