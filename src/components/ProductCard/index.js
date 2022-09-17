import * as React from "react";

const ProductCard = (props) => {
  const { product, size } = props;

  return (
    <div className="product-card">
      <img
        className="product-card-img"
        src={product.img}
        alt={product.caption}
      />
      <h6 className="mt-2">{product.imgText}</h6>
      {size != "sm" && <h4>{product.caption}</h4>}
      {size == "sm" && <h5>{product.caption}</h5>}
      <h6>{product.description}</h6>
    </div>
  );
};

export default ProductCard;
