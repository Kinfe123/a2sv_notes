import { useClerk, useUser } from "@clerk/clerk-react"
import ExplpreBook from "../Components/ExploreBook"
import Feature from "../Components/Features"
import Books from "./Books"
import { AtSign } from 'lucide-react'
import { useNavigate } from "react-router-dom"
import { UserPlus } from "lucide-react"
import './Home.css'



const Home = () => {
    
    const user = useUser()
    const clerk = useClerk()
    const navigate = useNavigate()
    const handleClick = () => {

         clerk.openSignIn()
    

    }
return (

    <div>
        <section className= "mt-10 bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                <a
                    href="#"
                    className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm  rounded-full bg-blue-900 text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
                >
                    <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
                        For
                    </span>{" "}
                    <span className="text-sm font-medium">
                    African
                    </span>
                    <svg
                        aria-hidden="true"
                        className="ml-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd" />
                    </svg>
                </a>
                <h1 className="magicText mb-5 mt-2 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6x">
                    We invest in the world’s potential
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                    Explore <p className="text-gray-800 font-bold inline-flex">Internship</p> Jobs and visually engaging learning slides cover data structures, algorithms, and other tech skills, providing a comprehensive understanding of concepts to help you grasp the skills you desire
                </p>
                <form className="w-full max-w-md mx-auto">
                    <label
                        htmlFor="default-email"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only text-white"
                    >
                        Email sign-up
                    </label>
                    <div className="relative">
                        <div className=" flex items-center justify-center items-center">
                           
                           
                        {user.isSignedIn ? <div>
                            <button
                            type="button"
                            onClick={() => navigate('/books')}
                            className="text-white text-md  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex  justify-center items-center self-center cursor-pointer"
                            >
                            Explore Books
                            </button>
                        </div> : (
                            <div className="flex items-center justify-center gap-5">

                            <button
                            type="button"
                            onClick={handleClick}
                            className="text-white text-md  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex  justify-center items-center self-center cursor-pointer"
                            >
                            Join the team <span className=" ml-2 w-5 h-5 flex justify-center items-center"><UserPlus /></span>
                            </button>
                            <button
                            type="button"
                            onClick={() => navigate('/jobs')}
                            className="text-white text-md  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex  justify-center items-center self-center cursor-pointer"
                            >
                           Explore Internships
                            </button>
                        </div>
                        )}
                            {/* <svg
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg> */}
                        </div>
                        {/* <input
                            type="email"
                            id="default-email"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your email here..."
                            required="" />
                        <button
                            type="submit"
                            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Sign up
                        </button> */}
                    </div>
                </form>
            </div>
            <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full max-h-max absolute top-0 left-0 z-0" />
        </section>
       <Feature />
       <ExplpreBook />




    </div>
)}
export default Home