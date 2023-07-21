import { useUser } from "@clerk/clerk-react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import AdminCtx from "../hooks/adminContext"

const Dashboard = () => {

    const email = import.meta.VITE_APP_ADMIN
    const values = useContext(AdminCtx)
    console.log("This is from the context:   ",  values)
    const user = useUser()
    const navigate = useNavigate()
    // console.log(user)
    const verifyEmail = user.user.emailAddresses[0].emailAddress
    if(!user.isSignedIn || verifyEmail && verifyEmail !== email){
        navigate('/')
    }
    return (
        <div className="">
            <h1>Welcome {user.user.username} To Dashboard</h1>

        </div>
    )
}
export default Dashboard