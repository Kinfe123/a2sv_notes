import { date_convert } from "../lib/datefunc"

const JobCard = (props) => {
    // console.log("Props: " , props.job)
    // const {Role , Location , application_link , Company , date_posted} = props.job;
   
    const {url , title , company_name , company_url , date_posted, sponsership , locations} = props.job

    return (

            <div key={url} className="m-6 ">
            <div className=" h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    👨🏾‍💻 {title}
                    </h5>

                  </a>
                  <div className=" w-16 h-1 bg-gradient-to-r from-blue-500 to-yellow-500">
                  <span className=""></span>
                      {/* <
                      span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-yellow-500"></span> */}
                  </div>
                  <p className="mt-4 mb-3 font-bold text-gray-500 dark:text-gray-300">
                    🏢 Campany - {company_name}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    📍 {locations && (
                      locations.map((location) => {
                        return <span className="inline">{location}</span>
                      })
                    )}
                  </p>
                    <div className=''>
                            <p className=" text-gray-700 dark:text-gray-400">👤 Author - @KinfeMichael_Tariku</p>
                    </div>

                  <div className="flex flex-row items-end justify-end">
                  <a
                        href={url}
                        target="blank"
                        className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

                        download
                        >
                       ✅ Apply 💼

                        </a>

                  </div>



                  <div className="flex flex-row justify-end items-center my-5">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">📅 Posted - {date_convert(date_posted)}</p>
                  {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">📁 Size - {byteSize(file.metadata.size).toString()}</p> */}
                  </div>
                </div>
              </div>







          </div>



    )
}
export default JobCard
