import {useState} from 'react'

const Jobs = () => {
    const api = import.meta.env.VITE_APP_API_JOBS
    

    const [search , setSearch] = useState()
    return (
        <>

        <div>
          <h1 className="m-10 text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">
        <span className=" text-center text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-sky-400">
          Explore Books
        </span>{" "}
        .
      </h1>
      <p className="my-2 text-center text-lg font-normal text-indigo-600 lg:text-xl dark:text-gray-400">
       ✅ Here are the list of shorthand slides with the most downloads and usecases. 
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
            placeholder="Search Books..."
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
      <div className="flex flex-col items-center justify-center">

     
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-col-2  xl:grid-cols-3">

      {filtered.length == 0 && (
        <div className="my-10">
          <h1 className=" absolute left-1/3">😟 Sorry, It seems like we could not find what you looking for :( </h1>
        </div>
      )}
      {filtered.map((file) => {
        return (
          <BookCard file={file} key={file.id} />
          

       // th
          
          
        )
      })}
      </div>
      </div>
      {/* <a href={link}>Download</a> */}
    </div>


        
        </>
    )
}
export default Jobs;