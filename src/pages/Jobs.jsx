import {useState , useEffect} from 'react'
import SkeletonLoader from "../Components/Skeleton";
import JobCard from "../Components/JobCard";
import jobs from '../../server/jobs.json'
import {Helmet} from 'react-helmet'
const Jobs = () => {
    const api = import.meta.env.VITE_APP_API_JOBS
    // console.log(api)
    // console.log("The jobs json data: " , jbs)
    const [search , setSearch] = useState("")
    const [loading , setLoading] = useState(false)
    const [filterJob , setFilterJob] = useState([])
    // const [jobs , setJobs] = useState([])
    // useEffect(() => {
    //     const fetchedJobs = async () => {
    //        try {



    //          setLoading(true)

    //          const fetched = await fetch(jbs)


    //          const res = await fetched.json()

    //          // console.log("The result of fetched data from the json data " + res)
    //          // // setJobs(res)


    //        }catch(e) {
    //         console.log(e)



    //        }
    //        setLoading(false);
    //     }
    //     fetchedJobs()
    // } , [])
    // console.log(jobs)
    const filter = jobs.filter(job => job.Company.slice(0 , job.Company.indexOf('.')).toLowerCase().includes(search.toLowerCase())    )

    // console.log('The data : ' , jobs)
    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Jobs - Internship Opportunies</title>
                <link rel="canonical" href="https://a2sv-notes.vercel.app/jobs" />
            </Helmet>

        <div>
          <h1 className="m-10 mt-32 text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">
        <span className=" text-center text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-sky-400">
          Explore Opportunies
        </span>{" "}
        💼.
      </h1>
      <p className="my-6 text-center text-lg font-normal text-indigo-600 lg:text-xl dark:text-gray-400">
       ✅ Explore end to end opportunities where you can found and see your self in futures.
      </p>


      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative mx-80">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Opportunities..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
          {/* <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button> */}
        </div>
      </form>


      {loading && (
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">


          {[1 , 2 , 3 ,4 ,5 , 6, 7, 8].map((x) => {
            return (
              <div key={x} className="">
                <SkeletonLoader />

              </div>

            )
          })}



        </div>




      )}
      <div className="flex flex-col items-center justify-center mx-14">

         <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-col-2  xl:grid-cols-3 gap-4">



      {!loading && filter.length == 0 && (
        <div className="my-10">
          <h1 className=" absolute left-1/3">😟 Sorry, It seems like we could not find what you looking for :( </h1>
        </div>
      )}
      {filter.map((job) => {
        if(job.Company){

          return (
            <div className=''>
              <JobCard key={job.application_link} job={job}  />
            </div>



          )
        }
      })}
      </div>
      </div>
                <div
            id="bottom-banner"
            tabIndex={-1}
            className="fixed bottom-0 left-0 z-50 flex justify-between w-full p-4 border-t border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
          >
            <div className="flex items-center mx-auto">
              <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                <span className="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M18.435 7.546A2.32 2.32 0 0 1 17.7 5.77a3.354 3.354 0 0 0-3.47-3.47 2.322 2.322 0 0 1-1.776-.736 3.357 3.357 0 0 0-4.907 0 2.281 2.281 0 0 1-1.776.736 3.414 3.414 0 0 0-2.489.981 3.372 3.372 0 0 0-.982 2.49 2.319 2.319 0 0 1-.736 1.775 3.36 3.36 0 0 0 0 4.908A2.317 2.317 0 0 1 2.3 14.23a3.356 3.356 0 0 0 3.47 3.47 2.318 2.318 0 0 1 1.777.737 3.36 3.36 0 0 0 4.907 0 2.36 2.36 0 0 1 1.776-.737 3.356 3.356 0 0 0 3.469-3.47 2.319 2.319 0 0 1 .736-1.775 3.359 3.359 0 0 0 0-4.908ZM8.5 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3 9.063a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2.207-6.856-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="sr-only">Discount</span>
                </span>
                <span>
                  Want to contribute & join the gang{" "}
                  <a
                    href="https://github.com/Kinfe123/"
                    className="flex items-center ml-0 text-sm font-medium text-blue-600 md:ml-1 md:inline-flex dark:text-blue-500 hover:underline"
                  >
                    Become a partner{" "}
                    <svg
                      className="w-3 h-3 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <button
                data-dismiss-target="#bottom-banner"
                type="button"
                className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close banner</span>
              </button>
            </div>
          </div>

      {/* <a href={link}>Download</a> */}
    </div>



        </>
    )
}
export default Jobs;