import {Link} from 'react-router-dom'

const ComingSoon = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <h1>Page Not Found</h1>
                <Link
                        to={"/"}
                        target="blank"
                        className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                     
                        download
                        >
                        Home 

                        </Link>

            </div>

        </div>
    )
}
export default ComingSoon