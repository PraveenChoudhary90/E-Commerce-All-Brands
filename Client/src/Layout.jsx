import Footer from "./Component/Footer";
import TopNav from "./Component/TopNav";
import {Outlet} from "react-router-dom";
const Layout = ()=>{
    return(
        <>
        <TopNav/>
        <main id="out">
        <Outlet/>
        </main>
        <Footer/>
        </>
    )
}

export default Layout;