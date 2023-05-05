import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

export default function Home() {
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [selectedDirector, setSelectedDirector] = useState();
  const [selectedMovie, setSelectedMovie] = useState();
  const [selectedActor, setSelectedActor] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    fetch("MoviesData.json")
      .then((response) => response.json())
      .then((data) => setData1(data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("Filter.json")
      .then((response) => response.json())
      .then((data) => setData2(data))
      .catch((error) => console.log(error));
  }, []);

  function selectDirectorHandler(e) {
    setSelectedDirector(e.target.value);
  }
  function selectMovieHandler(e) {
    setSelectedMovie(e.target.value);
  }
  function selectActorHandler(e) {
    setSelectedActor(e.target.value);
  }
  function onClickHandler(e) {
    setVideoUrl(data1[e.target.id - 1].Details.VideoLink);
    setSelectedDirector(data1[e.target.id - 1].Details.DirectorName);
    // setSelectedMovie(data1[e.target.id - 1].MovieName);
    setSelectedActor(data1[e.target.id - 1].Details.ActorsNames);
    console.log(data1[e.target.id - 1].Details.ActorsNames);
  }
  return (
    <>
      <div className="m-2 flex justify-center">
        <select
          onChange={selectDirectorHandler}
          className="p-2 mx-2 bg-blue-400 text-white border border-1 rounded-md overflow-hidden"
        >
          <option>--Please select--</option>

          {data2?.Directors.map((c, i) => (
            <Dropdown id={i + 1} name={c} value={c} />
          ))}
        </select>
        <select
          onChange={selectMovieHandler}
          className="p-2 mx-2 bg-blue-400 text-white border border-1 rounded-md overflow-hidden"
        >
          <option>--Please select--</option>

          {data2?.Movies.map((c, i) => (
            <Dropdown id={i + 1} name={c.MovieName} />
          ))}
        </select>
        <select
          onChange={selectActorHandler}
          className="p-2 mx-2 bg-blue-400 text-white border border-1 rounded-md overflow-hidden"
        >
          <option>--Please select--</option>

          {data2?.Actors.map((c, i) => (
            <Dropdown id={i + 1} name={c} />
          ))}
        </select>
      </div>
      <div className="m-1 py-10 bg-blue-400 text-white text-xl font-bold">
        DirectorName : {selectedDirector}
      </div>
      <div className="flex">
        {selectedMovie ? (
          <div className="w-1/5">
            <div
              // id={data1?.MovieID}
              className="py-5 m-1 py-10 bg-blue-400 text-white"
              onClick={onClickHandler}
            >
              {selectedMovie}
            </div>
          </div>
        ) : (
          <div className="w-1/5">
            {data1?.map((c, i) => {
              return (
                <div
                  id={c.MovieID}
                  className="py-5 m-1 py-10 bg-blue-400 text-white"
                  onClick={onClickHandler}
                >
                  {c.MovieName}
                </div>
              );
            })}
          </div>
        )}
        <div className="w-3/5 m-1 bg-blue-400 p-2 grid">
          <video
            className="w-full place-self-center"
            src={videoUrl}
            
            autoPlay
            autoFocus
            controls
          />
        </div>
        <div className="w-1/5 m-1 bg-blue-400 text-left p-2 px-4">
          <span className="text-xl font-bold text-white "> Actors Name:</span>
          <br />
          {selectedActor.map((c, i) => (
            <p>
              {i + 1 + ". "}
              {c}
            </p>
          ))}
          {/* {data2?.Actors.map((c, i) => {
            return (
              <p>
                {i + 1 + ". "}
                {c}
              </p>
            );
          })} */}
        </div>
      </div>
    </>
  );
}
