import {LogIn} from "lucide-react"
import { useClerk } from "@clerk/clerk-react"
const SignInFallback = () => {
    const clerk = useClerk()
    const handleClick = () => {
        clerk.openSignIn()

    }
    return (
        <div className="mt-32">
            <div className="flex flex-col justify-center items-center">
            <h1 className=" mb-5 mt-2 text-dm font-bold tracking-tight leading-none text-gray-700 md:text-2xl lg:text-2xl">
                    Please Sign in with Organizational email address 
                </h1>

            <button
             type="button"
                onClick={handleClick}
                 className="text-white text-md  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex  justify-center items-center self-center cursor-pointer" >
                   Join the team <span className=" ml-2 w-5 h-5 flex justify-center items-center"><LogIn /></span>
                    </button>
            </div>


        </div>
    )
}
export default SignInFallback