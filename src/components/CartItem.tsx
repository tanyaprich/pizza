import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from "../data/items.json"
import { Stack, Button , Container } from "react-bootstrap"
import { formatCurrency } from '../utilities/formatCurrency'
import './styles.css'

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem( {id, quantity}: CartItemProps ) {
    // useShoppingCart обеспечивает нас функциями, в число которых входит removeFromCart. Мы импортировали uSC и поэтому можем таким образом деструктурировать
    const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart()
    const item = storeItems.find( i => i.id === id)
    if (item == null) return null

    return (
        <Stack gap={2} direction="horizontal" className="d-flex align-items-center">
            <img src={item.imgUrl} style={{
                width: "125px", 
                height: "75px",
                objectFit: 'contain'
            }} />

            <div className="me-auto">
               
                <div className="fs-sm">
                    {item.name} 
                </div>


              


                <div className="fs-xs">
                    {formatCurrency(item.price * quantity)}
                </div>

                
                
                
                <div 
                    className="d-flex align-items-center flex-column" 
                    style={{ gap: '.5rem'}}>
                
                    <div className="d-flex align-items-center justify-content-center">
                        <button className="w-100 bg-orange price-btn p-inline-1" onClick={() => decreaseCartQuantity(id)}>-</button>
                        <span className="fs-4 px-4">{quantity} </span> 
                        <button className="w-100 price-btn p-inline-1" onClick={() => increaseCartQuantity(id)}>+</button>
                    </div>
                    
                </div>

            </div>

            <button className="close-button"  onClick={() => removeFromCart(item.id)}>&times;</button>
        </Stack>
    )
}