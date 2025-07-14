import { ArrowRight, BriefcaseBusiness, MapPin, X } from "lucide-react";
import type { JobPostingModel } from "@/models";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

export default function JobPosting({ job }: { job: JobPostingModel }) {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex flex-col justify-start items-start border-[1.55px] border-emerald-500 rounded-lg w-[425px] h-[225px] px-8 py-8 shadow-md shadow-emerald-500/50 bg-[#162820] cursor-pointer hover:bg-emerald-500/20">
          <p className="font-bold text-xl text-emerald-500">{job.title}</p>
          <div className="text-emerald-500 font-semibold">
            <div className="flex gap-x-5 my-2">
              <div className="flex gap-x-2">
                <BriefcaseBusiness className="w-5 h-5 text-emerald-500" />
                <p>{job.company}</p>
              </div>
              <div className="flex gap-x-2">
                <MapPin className="w-5 h-5 text-emerald-500" />
                <p>{`${job.city}, ${job.state}`}</p>
              </div>
            </div>
          </div>
          <p className="overflow-hidden text-ellipsis line-clamp-4 text-left">
            {job.description}
          </p>
        </div>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="min-w-[700px] max-w-none bg-[#162820] border-l-[2.55px] border-emerald-500/70"
      >
        <SheetClose asChild>
          <X className="w-5 h-5 absolute right-8 top-8 cursor-pointer text-emerald-500" />
        </SheetClose>
        <SheetHeader>
          <SheetTitle className="mx-3 mt-8 text-2xl text-emerald-500">
            {job.title}
          </SheetTitle>
        </SheetHeader>
        <div className="mx-10">
          <div className="flex justify-between">
            <div className="flex gap-x-10 my-2 text-emerald-500 text-lg font-semibold">
              <div className="flex gap-x-2">
                <BriefcaseBusiness className="w-6 h-6 text-emerald-500" />
                <p>{job.company}</p>
              </div>
              <div className="flex gap-x-2">
                <MapPin className="w-6 h-6 text-emerald-500" />
                <p>{`${job.city}, ${job.state}`}</p>
              </div>
            </div>
            <Button className="filled-green-button font-semibold">
              Apply
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          <p className="mt-8 text-lg whitespace-pre-line">{job.description}</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
