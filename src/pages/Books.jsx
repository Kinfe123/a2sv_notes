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
import { useUser } from "@clerk/clerk-react";
import FallBack from "../Components/AuthFallBack";

import { ToastContainer , toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import BookCard from "../Components/BookCard";

dayjs.extend(relativeTime)

const Books = () => {
  const [files, setFiles] = useState([])
  const [error  , setError] = useState()
  const [link, setLink] = useState()
  const [loading , setLoading] = useState(false)
  const [fileLoader , setFileLoader] = useState(false)
  const navigate = useNavigate()



  const fileRef = supabase.storage.from('test')

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
  const user = useUser()

  const {isOnline} = useOnlineEffect()
  
  const handleClick = async (file) => {
    setFileLoader(true)
  
      
        
      try {
        toast(`⬇ Downloading ${file.name} !`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        
          const res = await fileRef.download(file.name)

          const url = window.URL.createObjectURL(new Blob([res.data]))


          setFileLoader(false)

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
  
  if(user && !user.isSignedIn){
    return <FallBack/>
  }
  // if(fileLoader){
  //   return <div><ToastContainer /></div>
  // }
  return (
    <div>
      {fileLoader && (<ToastContainer />)}
  
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

      
      {files.map((file) => {
        return (
          <BookCard file={file} key={file.id} />
          

       // th
          
          
        )
      })}
      </div>
      </div>
      {/* <a href={link}>Download</a> */}
    </div>
  )
}
export default Books
