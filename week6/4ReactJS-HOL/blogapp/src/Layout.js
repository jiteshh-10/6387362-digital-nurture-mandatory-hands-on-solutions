import {Link , Outlet} from "react-router-dom";
const Layout=()=>{
    return(
        <><h1>
            <Link to="home"> Home </Link>

            <Link to="display"> Display </Link>

            <Link to="contact"> Contact </Link>
        </h1><hr size="3" color="red" /><Outlet /><hr size="3" color="red" />
        <h7>www.company.com All Rights Reserved 2025.</h7>
        </>
    )
}

export default Layout;