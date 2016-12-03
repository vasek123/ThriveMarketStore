import { connect } from 'react-redux';
import ProductFooter from '../components/ProductFooter';

const mapStateToProps = (state, ownProps) => {
  return {
    quantity: state.cart[ownProps.product.id],
    productId: ownProps.product.id
  }
}

const ProductFooterManager = connect(
  mapStateToProps
)(ProductFooter)

export default ProductFooterManager;
