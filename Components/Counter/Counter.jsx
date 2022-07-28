import { useSelector, useDispatch } from "react-redux"
import { decrement, increment } from "../../features/counter/counterSlice"

const Counter = () => {
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter</h1>
      <p>This is a simple example of a React component.</p>
      <p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </p>
      <p>Current count: {counter}</p>
    </div>
  )
}

export default Counter
