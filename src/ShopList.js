import { products } from "./products.js";

export function ShopList() {
  return (
    <>
      <ul className="shop-lists">
        {products.map((product) => (
          <li className="shop-list">
            <img
              className="shop-list_img"
              src={product.img}
              alt={product.name}
            />
            <h2 className="shop-list_title">{product.name}</h2>
            <span className="shop-list_color">{product.color}</span>
            <span className="shop-list_price">${product.price}</span>
            <button className="shop-list_btn" type="button">
              ADD TO CART
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
