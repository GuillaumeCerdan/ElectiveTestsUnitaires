import React from "react";
import useCart from "../hooks/useCart";

const Cart = ({ setRoute }: { setRoute: (data: any) => void }) => {
  const { loading, products, message, loadCart, removeToCart } = useCart();
  return (
    <div>
      {loading && <div>Loading....</div>}
      {message && <p className="message">{message}</p>}
      <div id="goBack" onClick={() => setRoute({ route: "home" })}>Retour</div>
      <div className="listProducts">
        {products.map((product, id) => {
          return (
            <React.Fragment key={'produit-' + id}>
              <div>
                <img src={product.image} alt="" />
                <p>Figurine de {product.name}</p>
                <p>Quantitée {product.quantity}</p>
              </div>
              <button id={"suppr-" + id} onClick={() => removeToCart(product)}>
                Supprimer du panier
              </button>
              <hr />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
