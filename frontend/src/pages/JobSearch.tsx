import { useEffect, useState } from "react";
import type { JobPostingModel } from "../models";
import JobPosting from "../components/JobPosting";
import SearchTopBar from "@/components/SearchTopBar";

function JobSearch() {
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
      <SearchTopBar />
      <div className="mt-15 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10">
        {jobPostings.map((job) => (
          <JobPosting key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default JobSearch;
