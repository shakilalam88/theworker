import React, { useState, useEffect, createContext } from 'react';
import CartItem from './CartItem';
import { CartProduct } from './CartProduct';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomizedBadges from '../Component/CartBadge';
import CartIcon from '../Component/CartIcon';
import NavLink from '../Header/NavBar';
import { CartCountItem } from '../Header/NavBar';
import { CartCount } from '../Context';

// export const CartCount = createContext();
const Cart = () => {
    const [productItem, setProductItem] = useState(CartProduct);
    const [countItem, setCountItem] = useState(0);
    const [countPrice, setCountPrice] = useState(0)

    // single delete item
    const deleteItem = (id) => {
        const CartItem = productItem.filter((curEle) => {
            return curEle.id !== id
        })
        setProductItem(CartItem)
    }

    // plus item
    const addItems = (id) => {
        let CartItem = productItem.map((curEle) => {
            if (curEle.id === id) {
                return {
                    ...curEle,
                    quantity: curEle.quantity + 1
                }
            }
            return curEle;
        })
        setProductItem(CartItem)
    }

    // mins item
    const minItems = (id) => {
        let CartItem = productItem.map((curEle) => {
            if (curEle.id === id) {
                return {
                    ...curEle,
                    quantity: curEle.quantity - 1,
                }
            }
            return curEle
        }).filter((curEle) => {
            return curEle.quantity !== 0;
        })
        setProductItem(CartItem)
    }

    // count item
    const CountItem = () => {
        let quantity = 0;
        let totalPrice = 0;
        productItem.map((curEle) => {
            quantity = quantity + curEle.quantity;
            totalPrice += curEle.quantity * curEle.price
        })
        setCountItem(quantity)
        setCountPrice(totalPrice)

    }

    // count price 
    const CountPrice = () => {
        let price = 0;
        productItem.map((curEle) => {
            return price += curEle.price
        })
        setCountPrice(price)
    }

    useEffect(() => {
        CountItem();
    }, [productItem])

    return (
        <>
        <div className='cart-section'>
            <header className='cartHeader'>
                <div className="continue-shopping">
                    {/* <img src="./images/arrow.png" alt="arrow" className='arrow-icon' /> */}
                    <ArrowBackIcon className='arrow-icon' />
                    <h3>continue shopping</h3>
                </div>
                {/* <div className="cart-icon">
                    <ShoppingCartIcon/>
                    <p>{countItem}</p>
                </div> */}

                <CartCount.Provider value={countItem}>
                    <CartIcon />
                    {/* <NavLink/> */}
                </CartCount.Provider>
            </header>
            <section className="main-cart-section">
                <h1>shopping cart</h1>
                <p className="total-items">you have <span className="total-items-count">{countItem} </span>items in cart</p>
                <div className="cart-header">
                    <div className="cart-product-img">Product Image</div>
                    <div className="cart-title">Product Name</div>
                    <div className="cart-item-price">Price</div>
                    <div className="add-minus-quantity">Quantity</div>
                    <div className="cart-price">Total Price</div>
                    <div className="cart-remove-item">Delete</div>
                </div>
                <div className="cart-items">
                    <div className="cart-items-container">
                        {productItem.map((curEle, index) => {
                            return <CartItem key={index} {...curEle}
                                delItem={deleteItem}
                                addItem={addItems}
                                minItem={minItems}
                            />;
                        })}

                    </div>
                </div>
                <div className="card-total">
                    <h3>Cart Total: <span>{countPrice}</span></h3>
                    <button>Checkout</button>
                    <button className="clear-cart" onClick={() => setProductItem(0)}>Clear cart</button>
                </div>
            </section>
        </div>
        </>
    )
}

export default Cart