import { useState } from "react";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
// import './counter.css'

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1
          style={{
            color: "white",
            fontFamily: "cursive",
          }}
        >
          Counter
        </h1>

        <h1
          style={{
            color: "white",
            fontFamily: "cursive",
          }}
        >
          {count}
        </h1>

        <div className="d-flex justify-content-around align-items-center w-100 gap-2">
          <img src={plus} width="50px" onClick={() => setCount(count + 1)} />
          <button 
          onClick={() => setCount(0)}
            style={{
              padding: "13px  18px",
              boxShadow: "0px 3px 1px 0px rgba(229,229,229,0.73)",
              webkitBoxShadow: "0px 3px 1px 0px rgba(229,229,229,0.73)",
              mozBoxShadow: "0px 3px 1px 0px rgba(229,229,229,0.73)",
            }}
          >
            <h6
              style={{
                padding: 0,
                margin: 0,
                fontFamily: "cursive",
                fontWeight: 700,
              }}
            >
              Reset
            </h6>
          </button>
          <img src={minus} width="50px" onClick={() => setCount(count - 1)} />
        </div>
      </div>
    </>
  );
}

export default Counter;
