import React, { ReactNode } from 'react'
import Brand from './Brand'
import Links from './Links'
import Search from './Search'
import WishlistIcon from './WishlistIcon'
import CartIcon from './CartIcon'



const Header = () => {
    return (
        <nav className="flex justify-between p-4 pl-0 border-b-2 mt-6 items-center">
            < Brand />
            <Links />
            <div className="flex items-center gap-4">
                < Search />
                < WishlistIcon />
                < CartIcon />
            </div>
        </nav>
    )
}

export default Header