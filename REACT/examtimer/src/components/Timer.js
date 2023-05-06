import React from 'react'

export default function Timer() {
    function examStart() {
      var second = 0;
      var minute = 10;
      var hour = 3;

      var examTime = setInterval(function () {
        second--;
        if (second < 0) {
          minute--;
          second = 59;
        }
        if (minute < 0) {
          hour--;
          minute = 59;
        }
        if (second == 0 && minute == 0 && hour == 0) {
          clearInterval(examTime);
        }
          return hour + ":" + minute + ":" + second;
      }, 1000);
    }

  return (
    <div>
      {examStart}
    </div>
  );
}
