import NavMenu from "@/components/NavMenu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { User } from "lucide-react";

export default function CreateAccount() {
  return (
    <div className="page">
      <div className="w-full flex justify-between items-center py-2">
        <NavMenu />
      </div>
      <div className="green-border mt-64 w-[500px] pb-12 bg-[#162820] px-8 py-8">
        <div className="flex items-center justify-between w-full mb-6">
          <div className="flex items-center gap-3">
            <User className="w-6 h-6 text-emerald-500" />
            <Label className="font-bold text-2xl text-emerald-500">
              Create Account
            </Label>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="space-y-7 w-3/4">
            <div className="space-y-1">
              <Label className="font-bold text-lg text-emerald-500">
                Email
              </Label>
              <Input type="text" className="green-input" placeholder="Email" />
            </div>
            <div className="space-y-1 mb-10">
              <Label className="font-bold text-lg text-emerald-500">
                Password
              </Label>
              <Input
                type="password"
                className="green-input"
                placeholder="Password"
              />
              <Input
                type="password"
                className="green-input mt-3"
                placeholder="Confirm Password"
              />
            </div>
            <Button className="filled-green-button w-full">
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
