import { useState } from 'react';
import '../App.css';
import { useEffect } from 'react';
function CartList({cart}){
    const [Cart,setCart]=useState([])
    useEffect(()=>{
        setCart(cart)
    },[cart])
    return(
        <div>
     {
        Cart?.map((cartItem,cartIndex)=>{
            return(
                <div>
                    <img src={cartItem.url} width={40}/>
                    <span>{cartItem.name}</span>
                    <button
                    onClick={()=>{
                        const _Cart=Cart.map((item,index)=>{
                            return cartIndex ===index?{...item,quantity:item.quantity > 0 ?item.quantity-1 :0}:item
                        })
                        setCart(_Cart)
                    }}>-</button>
                    <span>{cartItem.quantity}</span>
                    <button 
                    onClick={()=>{
                        const _Cart=Cart.map((item,index)=>{
                            return cartIndex ===index?{...item,quantity:item.quantity+1}:item
                        })
                        setCart(_Cart)
                    }}>+</button>
                    <span>Rs.{cartItem.price*cartItem.quantity}</span>
                    
                    </div>
            )
        })
     }
<p> Total <span></span>
    {
        Cart.map(item=>item.price*item.quantity).reduce((total,value)=>total+value,0)
    }
</p>










        </div>
    )
}
export default CartList;