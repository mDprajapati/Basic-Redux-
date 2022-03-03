import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../reducers/reducer';

function Index() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() => dispatch(increment)}>Incr</button>
        {count}
        <button onClick={() => dispatch(decrement)}>Dcre</button>
    </div>
  )
}

export default Index