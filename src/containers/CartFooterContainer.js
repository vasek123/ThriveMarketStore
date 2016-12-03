import { connect } from 'react-redux';
import CartFooter from '../components/CartFooter';

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const CartFooterContainer = connect(
  mapStateToProps
)(CartFooter)

export default CartFooterContainer;
