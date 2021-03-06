import React from "react";
import "./App.scss";

// Components
import Job from "./components/job";
// Data
import { jobsAvailable } from "./data/data";

const App = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="job-container">
          {jobsAvailable.map((job, index) => {
            return (
              <Job Company={job.company} Title={job.title} Location={job.location} DatePosted={job.date}/>
            )
            })}
        </div>
      </div>
    </div>
  );
};

export default App;