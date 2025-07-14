import { Input } from "@/components/ui/input";
import NavMenu from "./NavMenu";
import FilterPopover from "./FilterPopover";

export default function SearchTopBar() {
  return (
    <div className="w-full flex justify-between items-center py-2">
      <NavMenu />
      <div className="flex gap-x-5 items-center">
        <Input placeholder="Search Jobs..." className="green-input w-64" />
        <FilterPopover />
      </div>
    </div>
  );
}
