import '../App.css';

function ProductList({product,addToCart}){
  return(
    <div className='amount'>
    
  {
    product.map((productItem,productIndex)=>{
       return(
        <div   style={{width:"30%"}}>
          <div className='product-item'>
            <img  src={productItem.url} width="50%"/>
            <p>{productItem.name} |{productItem.category}</p>
            <p>{productItem.seller}</p>
            <p>Rs.{productItem.price}/-</p>
            <button onClick={()=> addToCart(productItem)}>Add to Cart</button>
            </div>
        </div>
       )
    })
  }
    
    
    
    </div>
  )
}
export default ProductList;