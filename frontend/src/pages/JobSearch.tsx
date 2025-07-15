import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { JobPostingModel } from "../models";
import JobPosting from "../components/JobPosting";
import SearchTopBar from "@/components/SearchTopBar";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Link } from "react-router-dom";
import Radar from "@/components/Radar";
import { Frown } from "lucide-react";

function JobSearch() {
  const [jobPostings, setJobPostings] = useState<JobPostingModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, _] = useSearchParams();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [keyword, setKeyword] = useState("");

  async function getJobPostings(perPage = 12) {
    const url = `${
      import.meta.env.VITE_API_URL
    }/job_posting?page=${page}&per_page=${perPage}&keyword=${encodeURIComponent(
      keyword
    )}`;

    console.log("Fetching job postings from:", url);

    const response = await fetch(url);
    const data = await response.json();
    setJobPostings(data["data"] || []);
    setPages(data["pages"] || 1);
  }

  useEffect(() => {
    setPage(parseInt(searchParams.get("page") || "1", 10));
    setKeyword(searchParams.get("keyword") || "");
  }, [searchParams]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await getJobPostings();
      setIsLoading(false);
    })();
  }, [page, keyword]);

  return (
    <div className="page">
      <SearchTopBar />
      <div className="xl:flex flex-col items-center justify-center h-7/8">
        {isLoading ? (
          <div className="scale-50">
            <Radar />
          </div>
        ) : jobPostings.length === 0 ? (
          <div>
            <Frown className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-2xl text-emerald-500 mb-4 font-semibold">
              Nothing Found
            </h2>
          </div>
        ) : (
          <div>
            <div className="mt-15 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10 ">
              {jobPostings.map((job) => (
                <JobPosting key={job.id} job={job} />
              ))}
            </div>
            <div className="mt-12 flex justify-center text-emerald-500">
              <Pagination>
                <PaginationContent>
                  {page > 1 && (
                    <PaginationItem>
                      <Link to={`/search?page=${page - 1}`}>
                        <PaginationPrevious href="#" />
                      </Link>
                    </PaginationItem>
                  )}
                  {page > 1 && (
                    <PaginationItem>
                      <Link to="/search?page=1">
                        <PaginationLink>1</PaginationLink>
                      </Link>
                    </PaginationItem>
                  )}
                  {page > 1 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  <PaginationItem>
                    <Link
                      to={`/search?page=${page}${
                        keyword ? `&keyword=${encodeURIComponent(keyword)}` : ""
                      }`}
                    >
                      <PaginationLink className="text-white">
                        {page}
                      </PaginationLink>
                    </Link>
                  </PaginationItem>
                  {page + 1 < pages && (
                    <PaginationItem>
                      <Link
                        to={`/search?page=${page + 1}${
                          keyword
                            ? `&keyword=${encodeURIComponent(keyword)}`
                            : ""
                        }`}
                      >
                        <PaginationLink>{page + 1}</PaginationLink>
                      </Link>
                    </PaginationItem>
                  )}
                  {page + 2 < pages && (
                    <PaginationItem>
                      <Link
                        to={`/search?page=${page + 2}${
                          keyword
                            ? `&keyword=${encodeURIComponent(keyword)}`
                            : ""
                        }`}
                      >
                        <PaginationLink>{page + 2}</PaginationLink>
                      </Link>
                    </PaginationItem>
                  )}
                  {page + 9 < pages && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  {page + 9 < pages && (
                    <PaginationItem>
                      <Link
                        to={`/search?page=${page + 9}${
                          keyword
                            ? `&keyword=${encodeURIComponent(keyword)}`
                            : ""
                        }`}
                      >
                        <PaginationLink>{page + 9}</PaginationLink>
                      </Link>
                    </PaginationItem>
                  )}
                  {page < pages && (
                    <PaginationItem>
                      <Link
                        to={`/search?page=${page + 1}${
                          keyword
                            ? `&keyword=${encodeURIComponent(keyword)}`
                            : ""
                        }`}
                      >
                        <PaginationNext />
                      </Link>
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobSearch;
