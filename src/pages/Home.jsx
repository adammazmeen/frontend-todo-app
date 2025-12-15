import HabitCard from "../components/HabitCard";
import useLocalStorage from "use-local-storage";
import { useEffect } from "react";

export default function Home() {
  const [habits, setHabits] = useLocalStorage("habits", []);
  const [lastReset, setLastReset] = useLocalStorage("lastReset", null);
  const completedTodayCount = habits.filter((h) => h.completedToday).length;

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];

    if (lastReset === today) return;

    const updated = habits.map((h) => ({ ...h, completedToday: false }));
    setHabits(updated);
    setLastReset(today);
  }, [habits]);

  const toggleDone = (id) => {
    const today = new Date().toISOString().split("T")[0];

    const updated = habits.map((h) => {
      if (h.id !== id) return h;

      if (h.completedToday) {
        return { ...h, completedToday: false };
      }

      if (h.lastCompleted === today) {
        return { ...h, completedToday: true };
      }

      let newStreak = h.streak;
      const yesterday = new Date(Date.now() - 86400000)
        .toISOString()
        .split("T")[0];
      if (h.lastCompleted === yesterday) {
        newStreak += 1;
      } else {
        newStreak = 1;
      }

      return {
        ...h,
        completedToday: true,
        streak: newStreak,
        lastCompleted: today,
      };
    });
    setHabits(updated);
  };

  return (
    <div>
      <h2 className="mb-3">Your Habits</h2>
      {habits.length === 0 ? (
        <p className="text-muted">No habits added.</p>
      ) : (
        <div className="mb-3">
          <h4>
            Habits Done Today: {completedTodayCount} / {habits.length}
          </h4>
        </div>
      )}

      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          onDelete={(id) => {
            const filtered = habits.filter((h) => h.id !== id);
            setHabits(filtered);
          }}
          onToggleDone={toggleDone}
        />
      ))}
    </div>
  );
}
