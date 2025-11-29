import React from "react";

interface TimerProps {
  stage: number;
  switchStage: (value: number) => void;
  getTickingTime: () => number;
}



export default function Timer({stage, switchStage, getTickingTime}: TimerProps) {
  const options = ["Classic Pomodoro", "Short Breaks", "Long Breaks"];
  return (
    <div className="w-10/12 mx-auto pt-5 text-white flex flex-col justify-center items-center mt-10">
      <div className="flex gap-5 items-center">
        {options.map((option, index) => {
          return (
            <h1
              key={index}
              className={`${index === stage ? "bg-gray-500 bg-opacity-30" : ""} p-1 cursor-pointer transition-all rounded`}
              onClick={()=>switchStage(index)}
            >
              {option}
            </h1>
          );
        })}
      </div>

      <div>
            <div className="mt-10 mb-10">
                    <h1 className="text-8xl font-bold select-none ">
                        {getTickingTime()}:00
                    </h1>
            </div>
      </div>
      <button className="px-16 py-2 text-2xl rounded-md bg-white text-blue-500 uppercase font-bold">
        Start
      </button>
    </div>
  );
}
