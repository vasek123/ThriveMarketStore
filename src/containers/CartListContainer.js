import { connect } from 'react-redux';
import CartList from '../components/CartList';

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const CartListContainer = connect(
  mapStateToProps
)(CartList);

export default CartListContainer;
