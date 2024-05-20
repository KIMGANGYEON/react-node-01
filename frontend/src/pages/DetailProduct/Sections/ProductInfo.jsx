import PropTypes from "prop-types";

const ProductInfo = ({ product }) => {
  ProductInfo.propTypes = {
    product: PropTypes.object,
  };

  console.log(product);
  return <div>ProductInfo</div>;
};

export default ProductInfo;
