import './home.css'
import {ShoppingCartOutlined} from '@ant-design/icons'

export default function Header(props) {
    return (
        <div className="home">
            <div className="cartArea">
                <ShoppingCartOutlined className="icon" />
                <span className="countNo">{props.data.length}</span>
            </div>
        </div>
    )
}
