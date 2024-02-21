import { useState } from 'react'
import plus from "../assets/plus.png"
import minus from "../assets/minus.png"
// import './counter.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 style={{
            color:"white",
            fontFamily:"cursive",
            }}>
            Counter
        </h1>

        <h1 style={{
            color:"white",
            fontFamily:"cursive",
            }}>{count}</h1>

        <div className="d-flex justify-content-around align-items-center w-100">
        <img  src={plus} width="50px" onClick={() => setCount(count + 1)}  />
        <img  src={minus} width="50px" onClick={() => setCount(count - 1)}  />
        </div>



    </div>
    </>
  )
}

export default Counter