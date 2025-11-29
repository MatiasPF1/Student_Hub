"use client";

import Navigation from "@/components/Navigation";
import Timer from "@/components/Timer";
import { useState } from "react";

export default function Page() {
  
  const [pomodoro, setPomodoro] = useState<number>(25);
  const [shortBreak, setShortBreak] = useState<number>(5);
  const [longBreak, setLongBreak] = useState<number>(10);

  const [stage, setStage] = useState<number>(0);

  const switchStage = (index: number) => {
    setStage(index);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-2xl min-h-screen mx-auto">
        <Navigation />
        <Timer stage={stage} switchStage={switchStage} />
      </div>
    </div>
  );
}
