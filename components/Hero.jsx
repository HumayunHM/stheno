import React from "react";
import HabitTracker from "./HabitTracker";
import TaskTracker from "./TaskTracker";
import GoalTracker from "./GoalTracker";

const Hero = () => {
  return (
    <div className="flex col-3 justify-between mx-16 my-16 gap-36">
      <HabitTracker />
      <TaskTracker />
      <GoalTracker />
    </div>
  );
};

export default Hero;
