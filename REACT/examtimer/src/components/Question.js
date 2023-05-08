import React from 'react'
import TimeCount from './TimeCount';

export default function Question({examTimer, setExamTimer}) {
    if (
      (examTimer.second >= 0) & (examTimer.second <= 59) ||
      (examTimer.minute >= 0) & (examTimer.minute <= 59) ||
      (examTimer.hour >= 0) & (examTimer.minute <= 12)
    ) {
      if (examTimer.second === 0) {
        setExamTimer({ ...examTimer, minute: examTimer.minute - 1 });
      }
      if (examTimer.minute === 0) {
        setExamTimer({ ...examTimer, hour: examTimer.hour - 1 });
      }
    }
  return (
    <div>
      <div className="flex justify-end md:w-4/5 mr-5 text-xl"><TimeCount /></div>
    </div>
  );
}
