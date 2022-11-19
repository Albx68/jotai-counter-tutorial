import "./App.css";
import { useAtom } from "jotai";
import {
  counterAtom,
  decrementCounterAtom,
  incrementCounterAtom,
} from "../utils/atoms";
function App() {
  const [count] = useAtom(counterAtom);
  const [, decrement] = useAtom(decrementCounterAtom);
  //decrementCounterAtom is a read and write atom, imported only the write function here
  const [, increment] = useAtom(incrementCounterAtom);
  //incrementCounterAtom is a read and write atom, imported only the write function here

  return (
    <div className="App">
      <div className="counter">
        <div className="count" key={Math.random()}>
          {/*the random key is to trigger css animations on count change*/}
          {count}
        </div>
        <div className="btns">
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
