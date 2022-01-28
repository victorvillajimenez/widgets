import StarRating from './widgets/StarRating';
import Carousel from './widgets/Carousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Widgets:</h1>
      <h4>Star Rating</h4>
      <StarRating value='4' />
      <h4>Carousel</h4>
      <Carousel autoPlay />
      <h2>Coming Soon:</h2>
      <ul>
        <li>Calendar</li>
        <li>Poll</li>
        <li>API Progress bar</li>
        <li>Typeahead</li>
      </ul>
    </div>
  );
}

export default App;
