import { Card, Button } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utilities/formatCurrency'
import { ModalForItem } from './ModalForItem'
type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
    category?: string
    description?: string
    weight?: string
}

export function StoreItem({ id, name, price, imgUrl, description, weight } : StoreItemProps) {
    
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity
    } = useShoppingCart()

    const quantity = getItemQuantity(id)

    return (
    <Card border="white" className="h-100">
        <Card.Img 
            variant="top" 
            src={imgUrl} 
            height="200px" 
            style={{ objectFit: "contain" }} 
        />
        <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-3">
            <p className="fs-3 my-0">{name}</p>
            <p className="ms-2 text-muted fs-6 my-0">{weight}</p>
        </Card.Title>


        <ModalForItem name={name} imgUrl={imgUrl} description={description}/>



        <div className="mt-auto py-4">
            {quantity === 0 ? (
                <button className="w-100 bg-orange border-black py-1 price-btn" onClick={() => increaseCartQuantity(id)}>{formatCurrency(price)}</button>
            ) : (<div 
                    className="d-flex align-items-center flex-column" 
                    style={{ gap: '.5rem'}}>
                
                    <div className="d-flex align-items-center justify-content-center">
                        <button className="w-100 bg-orange border-black price-btn p-inline-1" onClick={() => decreaseCartQuantity(id)}>-</button>
                        <span className="fs-3 px-4">{quantity} </span> 
                        <button className="w-100 bg-orange border-black p-inline-1 price-btn" onClick={() => increaseCartQuantity(id)}>+</button>
                    </div>
                    
                    </div>
                    
            )}
        </div>
        </Card.Body>
    
        
    </Card>
    )
}