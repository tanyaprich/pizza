import { Container, Nav, Navbar as NavbarBs, Button, DropdownButton, Dropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import {BsFillCartFill} from 'react-icons/bs'
import './styles.css'
import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
    <NavbarBs className="bg-white mb-3" sticky="top">
        <Container>
            <Nav className="me-auto">
                <a className="nav--link" href="/#pizza">Пицца</a>
                <a className="nav--link" href="/#pasta">Паста</a>
                <a className="nav--link" href="/#drinks">Напитки</a>
                <a className="nav--link" href="/#deserts">Десерты</a>
            </Nav>
            {cartQuantity > 0 && 
            <button 
                onClick={openCart}
                style={{borderRadius: '0', display: 'flex', alignItems: 'center', padding: '0'}} 
                className="price-btn bg-orange border-black"
                >
                
               <div style={{ padding: '.8em', paddingInline: '1.7em', borderRight: '1.5px solid black'}}>
                    <BsFillCartFill style={{fontSize: '1.2rem'}}/>
                </div>
                
                <div style={{
                    fontSize: '1.2rem', 
                    borderRadius: '0', 
                    paddingInline: '1em'
                }}>
                    {cartQuantity}
                </div>
                
            </button>}
        </Container>
    </NavbarBs>
    )
}