import HeaderCom from '../components/Header.jsx';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    data:state.productsItem
})

const mapDispatchToProps = dispatch => ({
    // addToCartHandler:data => dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCom)
