import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName='Harry' lastName="Potter" age={55} hairColor='brown' />
      <PersonCard firstName='Ron' lastName="Weasley" age={25} hairColor='brown' />
      <PersonCard firstName='Hermione' lastName="Granger" age={77} hairColor='brown' />
      <PersonCard firstName='Kevin' lastName="Chicken" age={19} hairColor='brown' />
    </div>
  );
}

export default App;
