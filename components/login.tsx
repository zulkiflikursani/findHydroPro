"use client";
import { EyeFilledIcon } from "@/components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/EyeSlashFilledIcon";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React, { useRef, useState } from "react";
import { useFormState } from "react-dom";
interface Props {
  className?: string;
}

const Login = (props: Props) => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  // const callbackUrl = ;
  const [isVisible, setIsVisible] = useState(false);
  // const [errorMessage, dispatch] = useFormState(, undefined);
  const userName = useRef("");
  const password = useRef("");
  const toggleVisibility = () => setIsVisible(!isVisible);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn("credentials", {
      username: userName.current,
      password: password.current,
      redirect: true,
      callbackUrl: "http://localhost:3000/admin",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="w-screen h-screen">
        <div className="flex justify-center ">
          <div className="flex mt-20 pb-10 flex-col w-full mx-1 bg-primary-200 rounded-lg md:w-4/12 ">
            <div className="flex justify-end">
              <div className=" mt-2 mr-2 cursor-pointer ">
                <ThemeSwitch />
              </div>
            </div>
            <div className="flex justify-center mx-3">
              <div className="flex-col justify-center md:w-10/12 w-full ">
                <h1 className="text-xl text-center font-bold mt-5">Login</h1>
                <h1 className="sm:text-[50px] text-center font-bold mt-5">
                  FindHydroPro
                </h1>
                {!!error && (
                  <p className="bg-red-100 text-red-500 text-center p-2">
                    Authentication Failed
                  </p>
                )}
                <div className="flex-col mt-2 space-y-2 ">
                  <div className="flex  flex-wrap md:flex-nowrap gap-4">
                    <Input
                      type="email"
                      label="Email"
                      onChange={(e) => (userName.current = e.target.value)}
                    />
                  </div>
                  <div className="flex flex-wrap md:flex-nowrap gap-4">
                    <Input
                      label="password"
                      onChange={(e) => (password.current = e.target.value)}
                      endContent={
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={toggleVisibility}
                        >
                          {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                      type={isVisible ? "text" : "password"}
                      // className="max-w-xs"
                      // className="max-h-xs"
                    />
                  </div>
                  <div>
                    {/* <div
                      className="flex h-8 items-end space-x-1"
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      {errorMessage && (
                        <>
                          <p className="text-sm text-red-500">{errorMessage}</p>
                        </>
                      )}
                    </div> */}
                  </div>
                  <div className="flex justify-center gap-2">
                    <Button className="bg-primary-foreground" type="submit">
                      Login
                    </Button>
                    <Button className="bg-primary-foreground">
                      Registrasi
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
