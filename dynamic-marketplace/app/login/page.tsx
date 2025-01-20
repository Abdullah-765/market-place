import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});


import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
import { Button } from "@/components/ui/button";

import * as React from "react"

const LoginForm = () => {
  return (
<div>
<div className="h-[20vh] mx-0 px-[40px] flex flex-col justify-center bg-[#F6F5FF] w-[100%]">
        <h1
          className={`${josefinSans.className} text-[#101750] text-[22px] font-bold`}
        >
         My Account
        </h1>
        <li className="text-[10px]">
          <p>Home . </p>
          <p>Pages . </p>
          <p className="text-[#FB2E86]">My Account</p>
        </li>
      </div>

      
<div className="flex items-center justify-center  mx-[20px] mt-[40px]">
            <Card className="w-[420px] rounded-none">
      <CardHeader>
        <CardTitle className="text-[28px] font-extrabold text-center">Login</CardTitle>
        <CardDescription className="text-center text-[#9096B2] text-[14px]">Please login using account detail bellow.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input id="email-address" placeholder="Email Adress" className="rounded-none text-[14px]"/>
            </div>
            <div className="flex flex-col space-y-1.5">
            <Input id="password" placeholder="Password" className="rounded-none text-[14px]"/>
            </div>
          </div>
        </form>


      <p className="hover:underline text-[#9096B2] mt-[10px]">Forgot your password?</p>
      </CardContent>
      
      <CardFooter className="flex flex-col justify-between">

        <Button className="w-[100%] text-[12px] rounded-none bg-[#FB2E86] hover:bg-[#FB2E86] hover:opacity-[0.9]">Deploy</Button>
        <p className="hover:underline text-[#9096B2] mt-[10px]">Don’t have an Account? Create account</p>
      </CardFooter>
    </Card>
    </div>
    <div className="flex justify-center items-center">
        <img src="/grid-default/image 1174.png" alt="" className="mt-[50px]" />
      </div>
</div>  



  )
}

export default LoginForm;