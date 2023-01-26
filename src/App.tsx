import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Welcome from "./components/Welcome"
import Home from "./routes/home"
import ProductCatalog from "./routes/home/ProductCatalog"
import Eletronics from "./routes/home/ProductCatalog/Eletronics copy"
import Computers from "./routes/home/ProductCatalog/Computers"
import Books from "./routes/home/ProductCatalog/Eletronics"
import AboutUs from "./components/AboutUs"
import NotFoundResouce from "./routes/home/NotFoundResouce"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Welcome />} />
          <Route path="home" element={<Welcome />} />
          <Route path="products" element={<ProductCatalog />}>
            <Route index element={<Navigate to={"/products/computers"} />} />
            <Route path="computers" element={<Computers />} />
            <Route path="eletronics" element={<Eletronics />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="about" element={<AboutUs />} />
        </Route>
        <Route path="not-found" element={<NotFoundResouce />} />
        <Route path="*" element={<Navigate to={"/not-found"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
