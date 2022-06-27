import AnraFooter from "./components/Footer/AnraFooter";
import AnraHeader from "./components/Header/AnraHeader";
import TagsList from "./components/Tags/TagsList";


function App() {
  return (
      <div className="App">
        <AnraHeader></AnraHeader>
        <TagsList></TagsList>
        <AnraFooter></AnraFooter>
      </div>
  );
}

export default App;
