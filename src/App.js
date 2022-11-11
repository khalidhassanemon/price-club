import './App.css';
import AssignmentMarks from './Component/AssignmentMarks/AssignmentMarks';
import Navbar from './Component/NavBar/Navbar';
import PhoneBar from './Component/PhoneBar/PhoneBar';
import Pricing from './Component/pricing/pricing';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <h1 className='text-3xl font-bold underline'>This is a Big Big header</h1>
     <p>This is just a paragraph</p>
     <Pricing></Pricing>
     <AssignmentMarks></AssignmentMarks>
     <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
