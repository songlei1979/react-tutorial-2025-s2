import logo from './logo.svg';
import './App.css';
import Helloworld from "./components/Helloworld";
import SecondComponent from "./components/SecondComponent";
import ThireComponent from "./components/ThireComponent";
import InputBox from "./components/InputBox";
import Conditiion from "./components/Conditiion";
import Loop from "./components/Loop";
import Form from "./components/Form";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
        <Posts/>
        <Form/>
        <Loop/>
        <Conditiion/>
        <InputBox />
      <Helloworld name={'Lei Song'} age={50}/>
        <SecondComponent />
        <ThireComponent />
      <Helloworld name={'Simon Dacey'} age={60}/>
    </div>
  );
}

export default App;
