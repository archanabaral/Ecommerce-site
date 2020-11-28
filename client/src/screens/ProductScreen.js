import React, { useEffect,useState } from "react"
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import Rating from "../components/Rating"
import LoadingBox from "../components/LoadingBox"
import MessageBox from "../components/MessageBox"


const ProductScreen= (props) =>{
  const [qty, setQty] = useState(1)
  const productDetails = useSelector((state) => state.productDetails);
  const productId = props.match.params.id
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(detailsProduct(productId))
  },[dispatch,productId])

  const addToCartHandler =() =>{
    props.history.push(`/cart/${productId}/?qty=${qty}`)
  }
   
 return(
   <div>
    {loading ? <LoadingBox /> : error? <MessageBox variant="danger">{error}</MessageBox>:
    <div>
    <Link to="/">Back to result</Link>
    <div className="row top">
        <div className="col-2">
         <img className="large"src={product.image} alt={product.name} ></img>
        </div>
        <div className="col-1">
          <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>
                  <Rating rating={product.rating} numReviews={product.numReviews}/>
              </li>
              <li>
                  Price: ${product.price}
              </li>
              <li>Description:
                 <p>{product.description}</p>
              </li>
          </ul>
        </div>
        <div className="col-1">
            <div className="card card-body">
                <ul>
                    <li>
                        <div className="row">
                          <div>Price</div>
                          <div className="price">${product.price}</div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                          <div>Status</div>
                            <div>{product.countInStock > 0 ? <span className="success">In Stock</span>:
                            <span className="error">Unavailable</span>
                            }</div>
                        </div>
                    </li>
                    {
                      product.countInStock > 0 && (
                        <>
                        <li>
                          <div className="row">
                            <div>
                                Qty
                            </div>
                            <select value={qty} onChange={e=>setQty(e.target.value)}>
                             {/* suppose our countInStock is 5 this function returns an array from 0 to 4  in option we do item + 1 to make it 1 to 5 since function return from 0 to 4*/}
                              {
                                [...Array(product.countInStock).keys()].map(item=>(
                                <option key ={item + 1} value={item + 1}>{item + 1}</option>
                                ))
                              }
                            </select>
                          </div>
                        </li>
                        <li>
                         <button onClick={addToCartHandler}className="primary block">Add to Cart</button>
                       </li>
                       </>
                      )
                    }
                    
                </ul>
            </div>

        </div>
    </div>
  </div>
    
    }
  </div>
   
 )
}
export default ProductScreen