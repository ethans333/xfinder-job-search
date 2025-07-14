import { useEffect, useState } from "react";
import type { JobPostingModel } from "../models";
import JobPosting from "../components/JobPosting";
import Radar from "@/components/Radar";
import HomeTopBar from "@/components/HomeTopBar";

function Home() {
  const [jobPostings, setJobPostings] = useState<JobPostingModel[]>([]);

  async function getJobPostings() {
    const url = `${import.meta.env.VITE_API_URL}/job_posting`;

    const response = await fetch(url);
    const data = await response.json();
    setJobPostings(data);
  }

  useEffect(() => {
    (async () => {
      await getJobPostings();
    })();
  }, []);

  return (
    <div className="page">
      <HomeTopBar />
      <div className="flex gap-x-5 py-60">
        <div className="title text-emerald-500">X Finder</div>
        <Radar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10">
        {jobPostings.map((job) => (
          <JobPosting key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default Home;
