import { useUser  , UserProfile , UserButton} from "@clerk/clerk-react"
import { useNavigate , Link } from "react-router-dom"
import {Blocks , AtSign} from 'lucide-react'
const Navbar = () => {
  const user = useUser()
  const navigate = useNavigate()
  return (
    <div className=" bg-transparent-400 ">


      <nav className=" fixed top-0 left-0 w-full bg-blue-white z-20 backdrop-blur-3xl  border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="text-xl text-blue-500 font-bold">
            <h1 className="cursor-pointer text-2xl" onClick={() => navigate('/')}>We Farm.</h1>

          </div>
          <div className="flex md:order-2 bg-transparent">

            {(user && user.isSignedIn) && <div className="flex justify-center items-center mx-3"> <UserButton/>  </div>}
            <div></div>

            <button
              type="button"
              onClick={() => navigate('/books')}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>


          <div
            className="  items-center justify-between hidden w-full z-30 bg-transparent md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
         <div className="bg-transparent z-30">
            <ul className="z-0  backdrop-blur-3xl flex flex-col font-medium p-4 md:p-0 mt-4   rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4  text-white   md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home 
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/jobs"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                  Jobs/Intern
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
           </div>
        </div>
      </nav>

    </div>
  )
}
export default Navbar
