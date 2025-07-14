import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Radar, Home, Search, Bookmark, Save, User } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Home Page",
    desc: "Browse all components in the library.",
    icon: <Home className="w-5 h-5 text-emerald-500" />,
    route: "/",
  },
  {
    title: "Search Jobs",
    desc: "Browse all components in the library.",
    icon: <Search className="w-5 h-5 text-emerald-500" />,
    route: "/search",
  },
  {
    title: "Saved Jobs",
    desc: "Browse all components in the library.",
    icon: <Bookmark className="w-5 h-5 text-emerald-500" />,
    route: "/saved-jobs",
  },
  {
    title: "My Account",
    desc: "Read our latest blog posts.",
    icon: <User className="w-5 h-5 text-emerald-500" />,
    route: "/account",
  },
];

export default function NavMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="green-button">
          <Radar className="w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-[#162820] border-[2px] border-emerald-500/70 rounded-md p-4 shadow-md text-emerald-500 w-[350px]">
        {menuItems.map(({ title, desc, icon, route }) => (
          <DropdownMenuItem
            key={title}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-emerald-500/10 cursor-pointer"
          >
            {icon}
            <Link to={route} className="flex flex-col w-full">
              <div className="font-bold">{title}</div>
              <div className="text-sm text-emerald-400">{desc}</div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
