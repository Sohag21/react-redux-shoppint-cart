import './home.css'

export default function Home(props) {

    console.log("home", props)
    return (
        <div>
            <h3>Redux Shoping Cart</h3>
            <ul className="productsList">
                <li className="listItem">
                    <div className="img">
                        <img src="https://paragonfood.com.bd/wp-content/uploads/2021/02/mini-samusa.jpg" alt="" />
                    </div>
                    <div className="info">
                        <h4 className="ptitle">Chicken mini samosa</h4>
                        <p className="pdes">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, nihil?</p>
                        <span className="price">789 tk</span>
                    </div>
                    <div className="action">
                        <button onClick={()=>props.addToCartHandler({ptitle:"Product name", price: 200})} className="actionButton">Add to Cart</button>
                        <button onClick={()=>props.removeToCartHandler({ptitle:"Product name", price: 200})} className="actionButton">Remove</button>
                    </div>
                </li>
                <li className="listItem">
                    <div className="img">
                        <img src="https://paragonfood.com.bd/wp-content/uploads/2021/02/mini-samusa.jpg" alt="" />
                    </div>
                    <div className="info">
                        <h4 className="ptitle">Chicken mini samosa</h4>
                        <p className="pdes">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, nihil?</p>
                        <span className="price">789 tk</span>
                    </div>
                    <div className="action">
                        <button onClick={()=>props.addToCartHandler({ptitle:"Product name", price: 200})} className="actionButton">Add to Cart</button>
                        <button onClick={()=>props.removeToCartHandler({ptitle:"Product name", price: 200})} className="actionButton">Remove</button>
                    </div>
                </li>
            </ul>

            
        </div>
    )
}
