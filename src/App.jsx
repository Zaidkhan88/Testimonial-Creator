import { BrowserRouter,Route,Routes } from "react-router-dom"
// import CreateSpaceForm from "./components/CreateSpaceForm"
import Home from "./pages/Home"
import CreateSpaceFormPage from "./pages/CreateSpaceForm"
import ReviewPage from './pages/ReviewPage'
import AllTestimonials from "./pages/AllTestimonials"
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>

        <Route path="/createSpace" element = {<CreateSpaceFormPage/>}/>
        <Route path="/reviewPage/:reviewLink" element = {<ReviewPage/>}/>
        <Route path="/Testimonials/:testLink" element = {<AllTestimonials/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
