import { useState } from "react"
import { supabase } from "../configs/supabaseClient"
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from "dayjs"
import byteSize from "byte-size";

dayjs.extend(relativeTime)


const BookCard = (props) => {

    const [fileLoader , setFileLoader] = useState()
    const [error , setError] = useState()
    const [link , setLink] = useState()

  
    const {file} = props
   
    const fileRef = supabase.storage.from('test')

    const handleClick = async (file) => {
        setFileLoader(true)
      
          
            
          try {
            // toast(`⬇ Downloading ${file.name} !`, {
            //   position: "top-right",
            //   autoClose: 5000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            //   theme: "light",
            //   });
            
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
    return (
        <div>
            <div key={file.id} className="m-6">
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
                      <div>
                        {fileLoader ? (<a

                            href={link}
                            className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => handleClick(file)}
                            download
                            >
                            ⬇ Downloading <div role="status">
                                        <svg
                                            aria-hidden="true"
                                            className="mx-2 inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"
                                            />
                                            <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill"
                                            />
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                        </div>


                            </a>
                        ): (

                          <a

                            href={link}
                            className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => handleClick(file)}
                            download
                        >
                            Download ⬇
                          
                          </a>
                        )}
                        
                      </div>
                    

                  <div className="flex flex-row justify-between items-center my-5">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">📅 Created - {dayjs(new Date(file.created_at).toString()).fromNow()}</p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">📁 Size - {byteSize(file.metadata.size).toString()}</p>
                  </div>
                </div>
              </div>

            

            
           
           
            

          </div>
        </div>
    )
}
export default BookCard