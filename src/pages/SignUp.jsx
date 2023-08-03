import { useClerk, useSignIn   } from "@clerk/clerk-react"
import Clerk from "@clerk/clerk-js"
import { SignIn , ClerkProvider , SignInButton} from "@clerk/clerk-react"

const SignUp = () =>  {
    const clerk = useClerk()
    const signin = useSignIn()
    

    const handleGihub = async () => {
        try {
            
            const session = await signin.signIn.attemptFirstFactor('github')

            console.log(session)

        }catch(e) {
            console.log(e)
        } 

        
    }
    const handleGoogle = () => {
        
    }
    return (
        <div className="min-h-full m-auto flex justify-center items-center">
            <div className="absolute top-1/3 ">
            <div className="flex flex-col ">
                <SignInButton />
                <h1 className="text-center text-xl text-gray-500">Please Sign In with 🔒</h1>

              <button onClick={handleGihub} className=" px-20 my-4 text-white antialiased font-bold bg-blue-500 py-4 border-gray-500 rounded-lg gap-4">
                Continue with Github

              </button>
              <button className="text-white antialiased font-bold py-4 px-20 bg-blue-500  border-gray-500 rounded-lg">
                Continue with Google

              </button>

            </div>


          

            </div>
        
        </div>

    )
}

export default SignUp