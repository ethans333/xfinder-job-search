import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

export default function FilterPopover() {
  const [sortBy, setSortBy] = useState("most recent");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="green-button">
          Filters
          <Filter className="w-4 h-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 lg:w-84 bg-[#162820] border-[2.55px] border-emerald-500/70 text-emerald-500">
        <div className="space-y-5">
          {/* Sort By */}
          <div className="grid w-full max-w-sm gap-3">
            <Label className="font-bold text-lg text-emerald-500">
              Sort By
            </Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="green-button justify-start"
                >
                  {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-62 bg-[#162820] border-[2px] border-emerald-500/70 rounded-md shadow-md text-emerald-500 p-2">
                <DropdownMenuSeparator className="border-emerald-500/40" />
                <DropdownMenuRadioGroup
                  value={sortBy}
                  onValueChange={setSortBy}
                >
                  {["Relevance", "Most Recent"].map((pos) => (
                    <DropdownMenuRadioItem
                      key={pos}
                      value={pos}
                      className="hover:bg-emerald-500/10 data-[state=checked]:bg-emerald-500 data-[state=checked]:text-[#162820] rounded px-2 py-1 cursor-pointer"
                    >
                      {pos.charAt(0).toUpperCase() + pos.slice(1)}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Location */}
          <div className="grid w-full max-w-sm gap-3">
            <Label className="font-bold text-lg">Location</Label>
            <Input
              type="text"
              className="green-input"
              placeholder="Enter city or state"
            />
          </div>

          {/* Work Type */}
          <div className="grid w-full max-w-sm gap-3">
            <Label className="font-bold text-lg">Work Type</Label>
            <div className="flex flex-col gap-3 pl-1">
              {[
                { id: "remote", label: "Remote" },
                { id: "hybrid", label: "Hybrid" },
                { id: "inperson", label: "In Person" },
              ].map(({ id, label }) => (
                <Label
                  key={id}
                  htmlFor={id}
                  className="flex items-center gap-3 text-emerald-400"
                >
                  <Checkbox
                    id={id}
                    className="border-emerald-500/70 border-[1.55px] bg-[#1c3329] text-emerald-500 data-[state=checked]:bg-emerald-500 data-[state=checked]:text-[#162820] rounded-sm"
                  />
                  <span>{label}</span>
                </Label>
              ))}
            </div>
          </div>

          <div className="flex justify-between w-full">
            <Button className="green-button w-30">Clear Filters</Button>
            <Button className="filled-green-button w-30">Apply Filters</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
