import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindcssLogo from './assets/tailwindcss.svg'
import supabaseLogo from './assets/supabase.svg'
import { SignedIn, SignedOut, SignInButton, useClerk, UserButton } from '@clerk/clerk-react';
import { useUser } from '@clerk/clerk-react'
import { AiFillGithub } from 'react-icons/ai'
import './App.css'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home';
import BookShow from './Components/BookShow';

function App() {

  const user = useUser()

  const clerk = useClerk()
  const handleSignIn = () => {
    clerk.openSignUp()
  }
  return (

    <BrowserRouter>

      <div>

        <Navbar />
      </div>
      <Routes>
        <Route path='/books' element={<BookShow />} />
        <Route path='/' element={<Home />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
