import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({id,img,price,quantity,title,description,delItem,addItem,minItem}) => {
    // const {id,img,price,quantity,title,description,delItem}=porps;
    return (
        <>
             <div className="cart-items-info" key={id}>
                <div className="cart-product-img">
                    <img src={img} alt={title} />
                </div>

                <div className="cart-title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="cart-item-price">
                    <h2>{price}</h2>
                </div>
                <div className="add-minus-quantity">
                    {/* <i className="fa-solid fa-minus minus" onClick={()=>minItem(id)}></i> */}
                    <RemoveIcon className="minus" onClick={()=>minItem(id)}/>
                    <input type="cart-text" name="" placeholder={quantity} id="" />
                    <AddIcon className="add" onClick={()=>addItem(id)}/>
                    {/* <i className="fa-solid fa-plus add" onClick={()=>addItem(id)}></i> */}
                </div>
                <div className="cart-price">
                    <h3>{quantity*price}</h3>
                </div>
                <div className="cart-remove-item">
                    {/* <i className="fas fa-trash-alt removee" onClick={()=>{delItem(id)}} ></i> */}
                    <DeleteIcon className="removee" onClick={()=>{delItem(id)}}/>

                </div>
            </div>
            <hr />
        </>
    )
}

export default CartItem;