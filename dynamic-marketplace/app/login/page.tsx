// 'use client'
// import { Josefin_Sans } from "next/font/google";
// const josefinSans = Josefin_Sans({
//   subsets: ["latin"],
//   weight: ["100", "300", "400", "500", "600", "700"],
// });
// import useAuthStore from "@/store/useAuthStore";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardFooter,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
 
// import { Button } from "@/components/ui/button";

// import * as React from "react"

// const LoginForm = () => {

//   const password = 12345
//   const email = 'abc@gmail.com'

//   const {login} = useAuthStore()
//   const {isLogin} = useAuthStore()
//   console.log(isLogin)
//   return (
// <div>
// <div className="h-[20vh] mx-0 px-[40px] flex flex-col justify-center bg-[#F6F5FF] w-[100%]">
//         <h1
//           className={`${josefinSans.className} text-[#101750] text-[22px] font-bold`}
//         >
//          My Account
//         </h1>
//         <li className="text-[10px]">
//           <p>Home . </p>
//           <p>Pages . </p>
//           <p className="text-[#FB2E86]">My Account</p>
//         </li>
//       </div>

      
// <div className="flex items-center justify-center  mx-[20px] mt-[40px]">
//             <Card className="w-[420px] rounded-none">
//       <CardHeader>
//         <CardTitle className="text-[28px] font-extrabold text-center">Login</CardTitle>
//         <CardDescription className="text-center text-[#9096B2] text-[14px]">Please login using account detail bellow.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form>
//           <div className="grid w-full items-center gap-4">
//             <div className="flex flex-col space-y-1.5">
//               <Input id="email-address" placeholder="Email Adress" className="rounded-none text-[14px]"/>
//             </div>
//             <div className="flex flex-col space-y-1.5">
//             <Input id="password" placeholder="Password" className="rounded-none text-[14px]"/>
//             </div>
//           </div>
//         </form>


//       <p className="hover:underline text-[#9096B2] mt-[10px]">Forgot your password?</p>
//       </CardContent>
      
//       <CardFooter className="flex flex-col justify-between">

//         <Button className="w-[100%] text-[12px] rounded-none bg-[#FB2E86] hover:bg-[#FB2E86] hover:opacity-[0.9]" onClick={login}>Login </Button>
//         <p className="hover:underline text-[#9096B2] mt-[10px]">Don’t have an Account? Create account</p>
//       </CardFooter>
//     </Card>
//     </div>
//     <div className="flex justify-center items-center">
//         <img src="/grid-default/image 1174.png" alt="" className="mt-[50px]" />
//       </div>
// </div>  



//   )
// }

// export default LoginForm;

'use client'
import { useEffect, useState } from "react";
import { Josefin_Sans } from "next/font/google";
import useAuthStore from "@/store/useAuthStore";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";



const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLogin, logout } = useAuthStore();

  // Hardcoded credentials for testing
  const validEmail = "abc@gmail.com";
  const validPassword = "12345";

  const handleLogin = () => {
    if (email === validEmail && password === validPassword) {
      login(); // Update Zustand state
      toast.success("Logged in successfully")
      router.push('/')
    } else {
      toast.error("Invalid Credintials")
      logout()
    }
  };

  useEffect(() => {
    console.log("isLogin updated:", isLogin);
  }, [isLogin]); // Runs whenever `isLogin` changes


  return (
    <div>
      <div className="h-[20vh] px-[40px] flex flex-col justify-center bg-[#F6F5FF] w-full">
        <h1 className={`${josefinSans.className} text-[#101750] text-[22px] font-bold`}>
          My Account
        </h1>
        <li className="text-[10px]">
          <p>Home . </p>
          <p>Pages . </p>
          <p className="text-[#FB2E86]">My Account</p>
        </li>
      </div>

      <div className="flex items-center justify-center mx-[20px] mt-[40px]">
        <Card className="w-[420px] rounded-none">
          <CardHeader>
            <CardTitle className="text-[28px] font-extrabold text-center">Login</CardTitle>
            <CardDescription className="text-center text-[#9096B2] text-[14px]">
              Please login using account detail below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input
                    id="email-address"
                    placeholder="Email Address"
                    className="rounded-none text-[14px]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input
                    id="password"
                    placeholder="Password"
                    type="password"
                    className="rounded-none text-[14px]"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </form>

            <p className="hover:underline text-[#9096B2] mt-[10px]">Forgot your password?</p>
          </CardContent>

          <CardFooter className="flex flex-col">
            <Button
              className="w-full text-[12px] rounded-none bg-[#FB2E86] hover:bg-[#FB2E86] hover:opacity-[0.9]"
              onClick={handleLogin}
            >
              Login
            </Button>
            <p className="hover:underline text-[#9096B2] mt-[10px]">
              Don’t have an Account? Create account
            </p>
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-center items-center">
        <img src="/grid-default/image 1174.png" alt="" className="mt-[50px]" />
      </div>
    </div>
  );
};

export default LoginForm;
