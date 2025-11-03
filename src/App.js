import logo from './logo.svg';
import './App.css';
import Helloworld from "./components/Helloworld";
import SecondComponent from "./components/SecondComponent";
import ThireComponent from "./components/ThireComponent";
import InputBox from "./components/InputBox";

function App() {
  return (
    <div className="App">
        <InputBox />
      <Helloworld name={'Lei Song'} age={50}/>
        <SecondComponent />
        <ThireComponent />
      <Helloworld name={'Simon Dacey'} age={60}/>
    </div>
  );
}

export default App;
