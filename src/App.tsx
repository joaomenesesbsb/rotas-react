import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Welcome from "./components/Welcome"
import Home from "./routes/home"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Welcome />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
