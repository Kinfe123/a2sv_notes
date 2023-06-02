import { useState, useEffect } from "react"
import { supabase } from "../configs/supabaseClient"
import fileDownload from "js-file-download";
import {useOnlineEffect , useNetworkStatus} from 'react-network-detect'
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import byteSize from "byte-size";
// import {relativeTime} from 'dayjs/esm/plugin/relativeTime'
import { useNavigate } from "react-router-dom";
import SkeletonLoader from "../Components/Skeleton";
dayjs.extend(relativeTime)

const Books = () => {
  const [files, setFiles] = useState([])
  const [error  , setError] = useState()
  const [link, setLink] = useState()
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate()



  const fileRef = supabase.storage.from('test')
  console.log(fileRef)
  useEffect(() => {
    const fetchData = async () => {
       setLoading(true)
   
      const datas = await fileRef.list()
      console.log('Thee fetched: ', datas)
      const { data, error } = datas


      setFiles(data)
      if(data || error)  {
        setLoading(false)
        
      }






    }

    fetchData()
  }, [])

  const {isOnline} = useOnlineEffect()
  const handleClick = async (file) => {
      
      try {
        
          const res = await fileRef.download(file.name)

          const url = window.URL.createObjectURL(new Blob([res.data]))

          // Create a link and click it to trigger the download
          const link = document.createElement('a')
          link.href = url
          link.download = `${file.name}`
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)

      }catch(err) {
        setError('Error has occured! 😞')
        console.log(err)
      }
      // console.log('This is from the download : ' ,file , )


    // fileRef.download(urls.publicURL)
    //href={fileRef.getPublicUrl(file.name).data.publicURL}

  }

  if(!isOnline){
    return <div className="flex flex-col justify-center items-center my-10">
      <p className="text-center">❌  Please Check Your Newtwork Connection</p>
      <a className="my-2 cursor-pointer rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => navigate('/books') }
              >
                Reload
              </a>
    
    </div>
  }

  if(loading) {

    <div>
      <p>Lpading</p>
          <div role="status" className="max-w-sm animate-pulse">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
          <span className="sr-only">Loading...</span> */
          </div>

      
    </div>

  }
  

  return (
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

      {loading && (
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4">

     
          {[1 , 2 , 3 ,4 ,5 , 6, 7, 8].map((x) => {
            return (
              <div key={x} className="">
                <SkeletonLoader />

              </div>

            )
          })}
          


        </div>

        
          

      )}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

      
      {files.map((file) => {
        return (

          
          <div key={file.id} className="m-3">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    📚 {file.name.slice(0 , file.name.indexOf('.'))}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Download the latest slides or book to sharpen your technical knowledge..
                  </p>
                  <a

                    href={link}
                    className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => handleClick(file)}
                    download
                 >
                    Download ⬇
                    {/* <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg> */}
                  </a>

                  <div className="flex flex-row justify-between items-center my-5">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">📅 Created - {dayjs(new Date(file.created_at).toString()).fromNow()}</p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">📁 Size - {byteSize(file.metadata.size).toString()}</p>
                  </div>
                </div>
              </div>

            

            
           
           
            

          </div>
        )
      })}
      </div>
      {/* <a href={link}>Download</a> */}
    </div>
  )
}
export default Books
