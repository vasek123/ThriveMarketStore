import { connect } from 'react-redux';
import { setQuantity } from '../redux/actions';
import ProductQuantity from '../components/ProductQuantity';

const mapStateToProps = (state, ownProps) => {
  return {
    quantity: state.cart[ownProps.productId]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setQuantity: (quantity) => {
      dispatch(setQuantity(ownProps.productId, quantity))
    }
  }
}

const CurrentProductQuantity = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductQuantity)

export default CurrentProductQuantity;
