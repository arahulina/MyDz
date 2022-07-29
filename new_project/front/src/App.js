import './App.css';
import FormLogin from "./components/auth/Forms/FormLogin";
import FormRegister from "./components/auth/Forms/FormRegister";


function App() {
  return (
      <div className="App">
          <FormRegister></FormRegister>
          <p>...........................</p>
          <FormLogin></FormLogin>
      </div>
  );
}

export default App;
