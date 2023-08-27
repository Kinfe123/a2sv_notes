import { useUser } from "@clerk/clerk-react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import AdminCtx from "../hooks/adminContext"
import SignUp from '../pages/SignUp'
const Dashboard = () => {

    const user = useUser()
    console.log(user)
    if(!user.user){
        return <SignUp />
    }
    return (
        <div className="">
            <h1>Welcome to Admin and Use oinly page</h1>

        </div>
    )
}
export default Dashboard
