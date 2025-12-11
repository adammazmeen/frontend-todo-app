import HabitCard from "../components/HabitCard";

const MOCK_HABITS = [
  { id: 1, name: "Drink water", completedToday: true, streak: 4 },
  { id: 2, name: "Read 30 mins", completedToday: false, streak: 2 },
  { id: 3, name: "Morning stretch", completedToday: false, streak: 10 },
];

export default function Home() {
  return (
    <div>
      <h2 className="mb-3">Your Habits</h2>

      {MOCK_HABITS.map((h) => (
        <HabitCard key={h.id} habit={h} />
      ))}
    </div>
  );
}
