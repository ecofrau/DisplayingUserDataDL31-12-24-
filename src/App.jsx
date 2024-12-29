import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoDetails from "./Components/TodoDetails";



import UserDetailPage from './Pages/UserDetailPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Form />
              <TodoList />
            
            </div>
          }
        />
        <Route path="/todos/:id" element={<TodoDetails />} />

        <Route path="/user/:id" component={UserDetailPage} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
