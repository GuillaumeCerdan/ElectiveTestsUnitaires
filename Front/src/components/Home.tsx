import React from "react";
import useHome from "../hooks/useHome";

const Home = ({ setRoute }: { setRoute: (data: any) => void }) => {
  const { loading, products } = useHome();
  return (
    <div>
      {loading && <div>Loading....</div>}
      <div id="back" onClick={() => setRoute({ route: "cart" })}>Aller sur panier</div>
      <div>
        {products.map((product, id) => {
          return (
            <React.Fragment key={"productFromHome-" + id}>
              <div
                onClick={() => setRoute({ route: "product", data: product })}
              >
                <img src={product.image} alt="" />
                <p>Figurine de {product.name}</p>
                <p>Quantitée {product.quantity}</p> 
              </div>
              <hr />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
