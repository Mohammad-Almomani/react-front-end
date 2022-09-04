import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div data-testid='title' className="App">
     <h1>Useless New Age Calculator</h1>
     <Person />
    </div>
  );
}

export default App;
