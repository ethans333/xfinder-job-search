import { Input } from "@/components/ui/input";
import NavMenu from "./NavMenu";
import FilterPopover from "./FilterPopover";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchTopBar() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search?keyword=${encodeURIComponent(searchText)}`);
    }
  };

  return (
    <div className="w-full flex justify-between items-center py-2">
      <NavMenu />
      <div className="flex gap-x-5 items-center">
        <Input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search Jobs..."
          className="green-input w-64"
        />
        <FilterPopover />
      </div>
    </div>
  );
}
