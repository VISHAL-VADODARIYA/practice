import React, { useState } from "react";
import Timer from "./Timer";

export default function Exam() {
  const [examTimer, setExamTimer] = useState();
  const date = new Date();
  var currentDate =
    date.getDay() + " - " + (date.getMonth() + 1) + " - " + date.getFullYear();
  var currentTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  function examTimeHandler() {
    console.log("hello");
  }

  return (
    <div>
      <div className="bg-blue-200 md:w-4/5 mx-auto justify-center px-20 py-5 flex">
        <div className="">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wikimedia-logo.png/480px-Wikimedia-logo.png"
            className="w-max md:w-28"
          />
        </div>
        <div>
          <h2 className="text-4xl pl-5 pt-5">
            Shree Narandas Ninjabhai Nathanjji Engineering college
            <br />
            <span className="text-lg">the place which grows others future</span>
          </h2>
        </div>
      </div>
      <div className="flex justify-end md:w-4/5 mr-5 text-xl">
        {" "}
        Date : {currentDate} || Time : {currentTime}
        <Timer />
      </div>
      <div className="m-3">
        <button
          className="bg-blue-500 border rounded-md text-white px-3 py-1.5"
          onClick={examTimeHandler}
        >
          Start Exam
        </button>
      </div>
    </div>
  );
}
