import './HomePage.css';
import { Header } from '../../components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductsGrid } from './ProductsGrid';
import { useSearchParams } from 'react-router';

function HomePage({ cart, loadCart }) {
    // const products = [];
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search')
    useEffect(() => {
        const getHomeData = async () => {
            const response = await axios.get(
                search ? `/api/products?search=${search}` : '/api/products'
            );
            setProducts(response.data);
        }
        getHomeData();
    }, [search])


    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart}/>
            </div>
        </>
    )
}

export default HomePage;