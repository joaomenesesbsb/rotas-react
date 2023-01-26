import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Welcome from "./components/Welcome"
import Home from "./routes/home"
import ProductCatalog from "./routes/home/ProductCatalog"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Welcome />} />
          <Route path="home" element={<Welcome />} />
          <Route path="Product" element={<ProductCatalog />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
