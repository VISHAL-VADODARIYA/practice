import React from "react";
import data from "./data.json";

export default function () {
  const className1 = "p-2 text-white bg-cyan-900 text-center ";
  const className2 = "p-2 text-white bg-cyan-100 text-center ";
  const className3 = "p-2 text-white bg-cyan-300 text-center ";
  const className = "p-2 text-center ";
  return (
    <div className="m-20 grid justify-center">
      <div className="text-2xl mb-5 font-bold">Student Marksheet</div>
      <div className="rounded-md overflow-hidden">
        <table className="rounded-lg">
          <tr>
            <th className={className1}>UserName</th>
            <th className={className1}>Department</th>
            <th className={className1}>ComputerNetworks</th>
            <th className={className1}>DBMS</th>
            <th className={className1}>AI</th>
            <th className={className1}>Python Programming</th>
            <th className={className1}>Percentage</th>
            <th className={className1}>Grade</th>
          </tr>

          {data.map((i, index) => {
            const percentage =
              (i.MarksObtained.ComputerNetworks +
                i.MarksObtained.DBMS +
                i.MarksObtained.AI +
                i.MarksObtained["Pyhton Programming"]) /
              4;

            const Grade =
              percentage >= 85
                ? "A"
                : (percentage >= 70) & (percentage <= 85)
                ? "B"
                : (percentage >= 50) & (percentage <= 70)
                ? "C"
                : "D";
            const Color =
              Grade == "A"
                ? { color: "green" }
                : Grade == "B"
                ? { color: "blue" }
                : Grade == "C"
                ? { color: "yellow" }
                : { color: "red" };
            return (
              <tr className={index % 2 == 0 ? "bg-gray-200" : "bg-blue-200"}>
                <td className={className}>{i.UserName}</td>
                <td className={className}>{i.Department}</td>
                <td className={className}>
                  {i.MarksObtained.ComputerNetworks}
                </td>
                <td className={className}>{i.MarksObtained.DBMS}</td>
                <td className={className}>{i.MarksObtained.AI}</td>
                <td className={className}>
                  {i.MarksObtained["Pyhton Programming"]}
                </td>
                <td className={className}>{percentage}</td>
                <td className={className} style={Color}>
                  {Grade}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
