import HomeCom from '../components/Home.jsx';
import { connect } from 'react-redux';
import  {addToCart, removeToCart}  from '../services/actions/action';


const mapStateToProps = (state) => ({
    data:state.productsItem
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler:data => dispatch(addToCart(data)),
    removeToCartHandler:data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeCom)
