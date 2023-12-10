import React from 'react'
import NavbarHamIcon from './NavbarHamIcon'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-none md:hidden lg:hidden">
                <button>
                    <NavbarHamIcon />
                </button>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>

        </div>
    )
}

export default Navbar