
import Product from './Product';

export function ProductsGrid({ products, loadCart }) {
    console.log(products)
    return (
        <div className="products-grid">
            {products.map((p) => {
                return (
                    <Product p={p} loadCart={loadCart} key={p.id} />
                )
            })}
        </div>
    )
}