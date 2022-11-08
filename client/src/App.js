import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const { value } = useSelector((state) => state.value);
  const { count } = useSelector((state) => state.count);

  const addValue = () => {
    dispatch({ type: "increment" });
  };
  const subValue = () => {
    dispatch({ type: "decrement" });
  };
  const resetValue = () => {
    dispatch({ type: "reset" });
  };
  const pushButton = () => {
    dispatch({ type: "push" });
  };
  return (
    <>
      <div>value: {value}</div>
      <button onClick={addValue}> + </button>
      <button onClick={subValue}> - </button>
      <button onClick={resetValue}> reset </button>
      <div>count: {count}</div>
      <button onClick={pushButton}> click </button>
    </>
  );
}

export default App;
