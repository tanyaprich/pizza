import storeItems from '../data/items.json'
import { Row, Col } from 'react-bootstrap'
import { StoreItem } from '../components/StoreItem'
export function Store() {
    return (
        <>
        <h2 id="pizza" className="mt-3 fs-lg">Пиццы</h2>
        <Row sm={2} xs={1} lg={3} xl={4} className="g-3">
            {storeItems.filter(item => item.category === "pizza").map(item => (
                <Col key={item.id}>
                    <StoreItem {...item} 
                    />
                </Col>
            ))}
            <Col>
            </Col>
        </Row>
        
        <h2 id="pasta" className="mt-5 fs-lg">Паста</h2>
        <Row sm={2} xs={1} lg={3} xl={4} className="g-3">
            {storeItems.filter(item => item.category === "pasta").map(item => (
                <Col key={item.id}>
                    <StoreItem {...item} 
                    />
                </Col>
            ))}
            <Col>
            </Col>
        </Row>


        <h2 id="deserts" className="mt-5 fs-lg">Десерты</h2>
        <Row sm={2} xs={1} lg={3} xl={4} className="g-3">
            {storeItems.filter(item => item.category === "desert").map(item => (
                <Col key={item.id}>
                    <StoreItem {...item} 
                    />
                </Col>
            ))}
            <Col>
            </Col>
        </Row>
        
        <h2 id="drinks" className="mt-5 fs-lg">Напитки</h2>
        <Row sm={2} xs={1} lg={3} xl={4} className="g-3">
            {storeItems.filter(item => item.category === "drink").map(item => (
                <Col key={item.id}>
                    <StoreItem {...item} 
                    />
                </Col>
            ))}
            <Col>
            </Col>
        </Row>
       </>
    )
    
}