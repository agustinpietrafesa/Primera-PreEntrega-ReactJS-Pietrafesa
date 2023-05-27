import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {

    const { carrito, vaciarCarrito, cantidadTotal, total } = useContext(CartContext)
 
    if( cantidadTotal === '0'){
        return(
            <div>
                <h1>No hay Items en el carrito</h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        )
    }


    return(
        <div>
            {
                carrito.map(p => <CartItem key={p.id} {...p} />)}
            <section>
                <h2>{total} </h2>
                <button onClick={() => vaciarCarrito()} className='btn'>Vaciar carrito</button>
                <Link to='/checkout' className='Option'>Checkout</Link>
            </section>


        </div>
    )
}

export default Cart