import { useClerk, useUser } from "@clerk/clerk-react"
import ExplpreBook from "../Components/ExploreBook"
import Feature from "../Components/Features"
import Books from "./Books"
import { AtSign } from 'lucide-react'
import { useNavigate } from "react-router-dom"
import { UserPlus } from "lucide-react"
import './Home.css'
import { HeroSection } from "../components/hero"
import { Background } from "../components/background"
import OSSection from "../Components/oss"
import Footer from "../Components/Footer"




const Home = () => {
    
    // const {theme , setTheme} = useTheme()
    const user = useUser()
    const clerk = useClerk()
    const navigate = useNavigate()
    const handleClick = () => {

        clerk.openSignIn()


    }
    return (

        <div>
               
            <Background />
            <section className="mt-10">
            <HeroSection />
    

            <Feature />
            </section>
            <OSSection />
            <ExplpreBook />
            <Footer />




        </div>
    )
}
export default Home
