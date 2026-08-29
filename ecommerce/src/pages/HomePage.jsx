import './HomePage.css';
import { Header } from '../components/Header';
import checkmark from '../assets/images/checkmark.png';
// import { products } from '../../starting-code/data/products';
import { products } from '../../starting-code/data/products';
// import { useState } from 'react';
import axios from 'axios';

function HomePage() {
    // const products = [];
    //const [products, setProducts] = useState([]);

    axios.get('http://localhost:3000/api/products')
        .then((response)=>{
            console.log(response.json())
    })

    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
            <Header />


            <div className="home-page">
                <div className="products-grid">
                    {products.map((p) => {
                        return(
                            <div className="product-container" key={p.id}>
                                <div className="product-image-container">
                                    <img className="product-image"
                                        src={p.image} />
                                </div>

                                <div className="product-name limit-text-to-2-lines">
                                    {p.name}
                                </div>

                                <div className="product-rating-container">
                                    <img className="product-rating-stars"
                                        src={"images/ratings/rating-"+(p.rating.stars*10)+".png"} />
                                    <div className="product-rating-count link-primary">
                                        {p.rating.count}
                                    </div>
                                </div>

                                <div className="product-price">
                                    ${(p.priceCents/100).toFixed(2)}
                                </div>

                                <div className="product-quantity-container">
                                    <select>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>

                                <div className="product-spacer"></div>

                                <div className="added-to-cart">
                                    <img src={checkmark} />
                                    Added
                                </div>

                                <button className="add-to-cart-button button-primary">
                                    Add to Cart
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default HomePage;