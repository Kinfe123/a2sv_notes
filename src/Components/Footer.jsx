import { Link } from "react-router-dom"
import { Coffee } from "lucide-react"
const Footer = () => {
    return (
        <div className="min-h-screen">
            <footer className="sticky top-[81vh]  bg-white rounded-lg shadow dark:bg-gray-900 m-4">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a
        href="https://kinfish-owns-computer.vercel.app/"
        target="_blank"
        className="flex items-center mb-4 sm:mb-0"
      >
       
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          KiNFiSH
        </span>
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
          <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
            About
          </Link>
        </li>
        <li>
          <Link to="/books" className="mr-4 hover:underline md:mr-6">
            Books
          </Link>
        </li>
        <li>
          <Link href="/jobs" className="mr-4 hover:underline md:mr-6 ">
            Jobs/Internships
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © {new Date().getFullYear()}{" "}
      <a href="https://kinfish-owns-computer.vercel.app/" target="_blank" className="hover:underline">
        KiNFiSH
      </a>  
      . Made with 🍵  KinfeMichael Tariku
    </span>
  </div>
</footer>

        </div>
    )
}

export default Footer