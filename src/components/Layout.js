import {NavLink, Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <header>
                <NavLink to ='/'>Home</NavLink>
                <NavLink to ='/about'>About</NavLink>
                <NavLink to ='/services'>Services</NavLink>
                <NavLink to ='/contacts'>Contacts</NavLink>
            </header>

            <Outlet />
        </>
    )
}

export {Layout}