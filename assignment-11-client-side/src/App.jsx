
import MainLayout from "./Layouts/MainLayout"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer"


function App() {

  return (
    <MainLayout>
      <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
     <Toaster></Toaster>     
    </MainLayout>
  )
}

export default App
