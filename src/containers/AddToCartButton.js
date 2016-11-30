import { connect } from 'react-redux';
import { addToCart } from '../redux/actions';
import Button from '../components/Button';

const mapStateToProps = (state, ownProps) => {
  return {
    text: ownProps.text,
    className: ownProps.className
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(addToCart(ownProps.productId))
    }
  }
}

const AddToCartButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default AddToCartButton;
