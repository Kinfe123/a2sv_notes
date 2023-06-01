import { useState, useEffect } from "react"
import { supabase } from "../configs/supabaseClient"

const Home = () => {
  const [file, setFile] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const fileRef = await supabase.storage.from('test')
      console.log(fileRef)
      const { data, error } = await fileRef.list()
      console.log('The data output from : ', data)





    }

    fetchData()
  }, [])
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  )
}
export default Home
