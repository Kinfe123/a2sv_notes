import { useState, useEffect } from "react"
import { supabase } from "../configs/supabaseClient"
import fileDownload from "js-file-download";


import byteSize from "byte-size";

const Home = () => {
  const [files, setFiles] = useState([])
  const [error  , setError] = useState()
  const [link, setLink] = useState()


  const fileRef = supabase.storage.from('test')
  console.log(fileRef)
  useEffect(() => {
    const fetchData = async () => {
   
      const datas = await fileRef.list()
      console.log('Thee fetched: ', datas)
      const { data, error } = datas


      setFiles(data)






    }

    fetchData()
  }, [])
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

  return (
    <div>
      <h1>This is a home page for downloading the book</h1>
      {files.map((file) => {
        return (
          <div key={file.id}>
            <h1>NAME: {file.name}</h1>
            <p>Created at: {new Date(file.created_at).toString()}</p>
            <p>Size: {byteSize(file.metadata.size).toString()}</p>
            <div className="my-3">
              <a  target="_blank" className="bg-red-300 border-spacing-0 border-b-slate-400 rounded-sm px-2 py-2" onClick={() => handleClick(file)} download>Download</a>

            </div>

          </div>
        )
      })}
      {/* <a href={link}>Download</a> */}
    </div>
  )
}
export default Home
