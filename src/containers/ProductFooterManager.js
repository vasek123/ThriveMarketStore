import { connect } from 'react-redux';
import ProductFooter from '../components/ProductFooter';

const mapStateToProps = (state, ownProps) => {
  return {
    quantity: state.cart[ownProps.productId],
    productId: ownProps.productId
  }
}

const ProductFooterManager = connect(
  mapStateToProps
)(ProductFooter)

export default ProductFooterManager;
