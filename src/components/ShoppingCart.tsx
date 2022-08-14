import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart  } from '../context/ShoppingCartContext'
import {CartItem} from './CartItem'
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"
import { MINIMAL_SUM } from '../data/minimalSum'
type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()

    const total = cartItems.reduce((total, cartItem) => {
        const item = storeItems.find(i => i.id === cartItem.id)
        return total + (item?.price || 0) * cartItem.quantity
    }, 0
    )
    
    return (
    <Offcanvas show={isOpen} onHide={ closeCart } placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Корзина</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(item => (<CartItem key={item.id} {...item} />)
                )}
                <div className="ms-auto fw-bold fs-5">
                    Всего {formatCurrency(total)}
                </div>
            </Stack>

            {total < MINIMAL_SUM ? <button type="button" className="order-btn d-flex justify-content-center" disabled>Закажите еще на {formatCurrency(MINIMAL_SUM - total)}</button> : <button className="order-btn d-flex justify-content-center">Оформить заказ</button>}
   
        </Offcanvas.Body>
    </Offcanvas>
    )
}