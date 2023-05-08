import React, { useState, useReducer } from "react";

export default function TimeCount() {
  const initialState = { hour: 0, minute: 10, second: 0 };
  const [inter, setInter] = useState();
  const [flag, setFlag] = useState(true);

  const reducer = (state, action) => {
    if (action.type === "reducer") {
      if (state.second > 0 || state.minute > 0 || state.hour > 0) {
        return {
          second: state.second === 0 ? 59 : state.second - 1,
          minute:
            state.minute === 0 && state.second === 0 && state.hour > 0
              ? 59
              : state.second === 0 && state.minute >= 0
              ? state.minute - 1
              : state.minute,
          hour:
            state.minute === 0 && state.second === 0
              ? state.hour - 1
              : state.hour,
        };
      }
    } else if (action.type === "reset") {
      return {
        second: 0,
        minute: 10,
        hour: 0,
      };
    }
    clearInterval(setInterval);
    return state;
  };

  const [timerCount, dispatch] = useReducer(reducer, initialState);
  function startTime() {
    let timerInterval = setInterval(() => {
      dispatch({ type: "reducer" });
    }, 1000);
    setInter(timerInterval);
    setFlag(false);
  }
  function pauseTime() {
    clearInterval(inter);
    setFlag(true);
  }
  function resetTime() {
    clearInterval(inter);
    dispatch({ type: "reset" });
    setFlag(true);
  }

  return (
    <div className="text-4xl mt-20">
      {timerCount.hour} : {timerCount.minute} : {timerCount.second}
      <br />
      <button
        className="bordre border-1 bg-blue-600 text-white rounded px-2 text-xl m-2"
        onClick={flag ? startTime : () => {}}
      >
        Start
      </button>
      <button
        className="bordre border-1 bg-blue-600 text-white rounded px-2 text-xl m-2"
        onClick={pauseTime}
      >
        Pause
      </button>
      <button
        className="bordre border-1 bg-blue-600 text-white rounded px-2 text-xl m-2"
        onClick={resetTime}
      >
        Reset
      </button>
    </div>
  );
}
