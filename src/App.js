import Form from "./components/form/form.component";
import Table from "./components/table/table.component";
import { UserProvider } from "./userContext";

import "./App.css";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>User Details</h1>
        <Form />
        <Table />
      </div>
    </UserProvider>
  );
}

export default App;
