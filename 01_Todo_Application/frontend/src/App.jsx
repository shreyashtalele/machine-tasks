import "./App.css";
import { TodoFrom, TodoList } from "./components";
function App() {
  return (
    <>
      <h2>Todo Application</h2>
      <div className="min-h-screen bg-gray-100 flex items-start justify-center pt-10">
        <TodoFrom />
      </div>
      <TodoList />
    </>
  );
}

export default App;
