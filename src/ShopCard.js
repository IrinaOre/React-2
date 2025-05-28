import { products } from "./products.js";

export function ShopCard() {
  return (
    <>
      <ul className="shop-cards">
        {products.map((product) => (
          <li
            className="shop-card"
            style={{
              backgroundImage: `url(${product.img})`,
            }}
          >
            <div shop-card_header>
              <h2 className="header-title">{product.name}</h2>
              <p>{product.color}</p>
            </div>
            <div className="shop-card_footer">
              <p className="footer-price">＄{product.price}</p>
              <button className="footer-btn">Add to cart</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
