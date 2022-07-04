import AnraFooter from "./components/Footer/AnraFooter";
import AnraHeader from "./components/Header/AnraHeader";
import FormSignUp from "./components/Forms/Auth/FormSignUp";


function App() {
  return (
      <div className="App container">
        <AnraHeader></AnraHeader>
        <FormSignUp></FormSignUp>
        <AnraFooter></AnraFooter>
      </div>
  );
}

export default App;
