import { Button } from "@/components/ui/button";
import NavMenu from "./NavMenu";
import { ArrowRight } from "lucide-react";

export default function HomeTopBar() {
  return (
    <div className="w-full flex justify-between items-center py-2">
      <NavMenu />
      <a href="/search">
        <Button className="bg-[#162820] border-[1.55px] border-emerald-500/70 text-emerald-500 hover:bg-[#1c3329] focus-visible:ring-emerald-500/25 focus-visible:border-emerald-500/70 flex items-center cursor-pointer">
          Start Searching
          <ArrowRight className="w-4 h-4" />
        </Button>
      </a>
    </div>
  );
}
