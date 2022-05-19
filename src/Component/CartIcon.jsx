import React,{useContext} from 'react';
// import { CartCount } from '../Cart/Cart';
// import { CartCountItem } from '../Header/NavBar';
import { CartCount } from '../Context';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartIcon = () => {
    const CartCounts = useContext(CartCount);
    return (
        <div className="cart-icon">
            <ShoppingCartIcon />
            <p>{CartCounts}</p>
        </div>
    )
}

export default CartIcon