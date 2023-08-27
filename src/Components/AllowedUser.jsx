import { useNavigate } from "react-router-dom"
import { useClerk, useUser } from "@clerk/clerk-react"
import { useState } from "react"
import { supabase } from "../configs/supabaseClient"
const AllowedUser = () => {

    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [message , setMesasge] = useState("")
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState(null)
    const [isChecked , setIsChecked] = useState(false)
    const navigate = useNavigate()
    

    const clerk = useClerk()
    const handleClick = () => {
        console.log("Hellow orld")
        clerk.signOut()
        navigate('/')
    


    }
    


    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        
        const {data , error} = await supabase.from('Requested').insert([
            {full_name: name , email: email , message: message},
           

        ])
        if(data) {
            setLoading(false)
            setName("")
            setEmail("")
            setMesasge('')
            console.log("The requested data : " , data)
        }
        if(error){
            setLoading(false)
            setError(error)
            console.log(error)
            
        }




    }
    return (
        <div className="flex justify-center items-center text-xl font-bold  mt-20 flex-col w-full" >   
           <p className="font-medium text-gray-900"> ❌ You are not logging in with your institutional email from A2SV , Please if you have <a onClick={handleClick} className="font-semibold text-gray-900 underline decoration-blue-500 hover:cursor-pointer">Re-Log in</a></p> <br />
            <p className="mt-3 mb-3">Or</p> <br />
            
        
            
            <p className="font-medium text-gray-900"> 📩 Use this form to identify you belong to A2SV</p>

            <div className="w-2/5">
            <form>
                <div className="mb-6">
                    <label
                    htmlFor="email"
                    className="block mb-2 mt-2 text-sm font-medium text-gray-900"
                    >
                    Your email
                    </label>
                    <input
                    type="email"
                    value={email}
                    id="email"
                    onChange={(E) => setEmail(E.target.value) }
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="abebe@something.com"
                    required=""
                    />
                </div>
                <div className="mb-6">
                    <label
                    htmlFor="email"
                    className="block mb-2 mt-2 text-sm font-medium text-gray-900"
                    >
                    Your Full Name
                    </label>
                    <input
                    type="text"
                    value={name}
                    id="text"
                    onChange={(E) => setName(E.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Abebe Kebede"
                    required=""
                    />
                </div>
                            
                <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Your message
                </label>
                <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(E) => setMesasge(E.target.value)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Leave a comment..."
                    defaultValue={""}
                />
            

                {/* <div className="mb-6">
                    <label
                    htmlFor="email"
                    className="block mb-2 mt-2 text-sm font-medium text-gray-900"
                    >
                    Your Appeal Letter
                    </label>
                    <input
                    type="text"
                    id="type"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="name@flowbite.com"
                    required=""
                    />
                </div> */}
               
                <div className="flex items-start mb-6 mt-2">
                    <div className="flex items-center h-5">
                    <input
                        id="terms"
                        type="checkbox"
                        defaultValue=""
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required=""
                    />
                    </div>
                    <label
                    htmlFor="terms"
                    className="ml-2 text-sm font-medium text-gray-90"
                    >
                    I agree with the{" "}
                    <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                        terms and conditions
                    </a>
                    </label>
                </div>
                <button
                    disabled={!isChecked}
                    onClick={handleSubmit}
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                > {loading ? <div className="flex flex-row gap-1">
                   <p>Submiting...</p> 
                   <div role="status">
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
                </div>:  <p> Submit 🔥</p> }


                 
                </button>
                </form>

            </div>
            

            
         </div>
    )
}
export default AllowedUser;
