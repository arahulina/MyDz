import './App.css';
import CatsMain from "./components/Cats/CatsMain";
import AnraHeader from "./components/Header/AnraHeader";
import AnraFooter from "./components/Footer/AnraFooter";


function App() {
  return (
      <div className="App container">
        <AnraHeader></AnraHeader>
        <CatsMain></CatsMain>
        <AnraFooter></AnraFooter>
      </div>
  );
}

export default App;
