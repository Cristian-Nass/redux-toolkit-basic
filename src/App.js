import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, test} from "./redux/CounterSlice";



function App() {

  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}> Increment </button>
      <button onClick={() => dispatch(decrement())}> Decrement </button>
      <button onClick={() => dispatch(test(5))}> Add by 5 </button>
    </div>
  );
}

export default App;
