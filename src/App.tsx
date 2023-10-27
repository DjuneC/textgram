import { Routes, Route } from "react-router-dom"

import "./globals.css"

import SignInForm from "./_auth/forms/SignInForm"
import SignUpForm from "./_auth/forms/SignUpForm"
import { Home } from "./_root/pages"

const App = () => {
  return (
    <main className="flex h-screen">
        <Routes>
            {/* Public routes */}
            <Route path="/sign-in" element={ <SignInForm /> } />
            <Route path="/sign-in" element={ <SignUpForm /> } />

            {/* Private routes */}
            <Route index element={ <Home /> }/>
        </Routes>
    </main>
  )
}

export default App