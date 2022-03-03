import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {increment, descrement} from './reducers/reducer'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

return (
  <div>
     <button onClick={() => dispatch(increment())}>Add</button>
     {count}
     <button onClick={() => dispatch(descrement())}>Rmv</button>
  </div>
)
}

export default App;
