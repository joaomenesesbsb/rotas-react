import { Outlet } from "react-router-dom";
import NavProduct from "../../../components/NavProduct";

export default function ProductCatalog(){
    return(
        <>
        <NavProduct />
        <Outlet />
        </>
    )
}