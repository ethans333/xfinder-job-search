import NavMenu from "@/components/NavMenu";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { User, LogOut } from "lucide-react";

export default function Account() {
  return (
    <div className="page">
      <div className="w-full flex justify-between items-center py-2">
        <NavMenu />
      </div>
      <div className="green-border mt-64 w-[800px] pb-12 bg-[#162820] px-8 py-8">
        <div className="flex items-center justify-between w-full mb-6">
          <div className="flex items-center gap-3">
            <User className="w-6 h-6 text-emerald-500" />
            <Label className="font-bold text-2xl text-emerald-500">
              My Account
            </Label>
          </div>
          <Button className="green-button">
            Log Out
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
        <div className="mt-10 space-y-10">
          <div className="space-y-1">
            <Label className="font-bold text-lg text-emerald-500">Email</Label>
            <p>ethanmstn33@gmail.com</p>
          </div>
          <div className="space-y-1">
            <Label className="font-bold text-lg text-emerald-500">
              Password
            </Label>
            <div className="flex justify-between">
              <p className="tracking-widest select-none">●●●●●●●●●●●</p>
              <Button className="green-button">Change Password</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
