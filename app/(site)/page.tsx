import Image from "next/image";
import logo from "../../public/images/logo.png";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="w-[150px] h-[150px] mx-auto">
          <Image src={logo} alt="logo" />
        </div>
        <h2 className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-sky-500 text-transparent bg-clip-text mt-6 text-center text-3xl font-bold tracking-tight cursor-default">
          MensagensTop
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
