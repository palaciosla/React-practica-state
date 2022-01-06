import "./App.css";
import Navbar from "./Component/Navbar";
import ToDoList from "./Component/ToDo/ToDoList";
import TextEditor from "./Component/TextEditor/TextEditor";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        {/* <ToDo /> */}
        <ToDoList />
        <hr />
        <TextEditor />
        <hr />
      </header>
    </div>
  );
}

export default App;
