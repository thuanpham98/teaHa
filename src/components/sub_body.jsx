import React ,{Component} from 'react';
import { Container, Row, Col ,Card} from 'react-bootstrap';

class SubBody extends Component {
    // state ={
    //     sourceImg : "/images/logo.png",
    //     height : "400",
    //     width : "400"
    // }
    render() {
        return (
            <Container fluid="md"  justify-content= "flex-start" display= "flex" >
                <Row sm={2}>
                    <Col md={"auto"}>
                        <Row>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <button variant="primary">Go somewhere</button>
                                </Card.Body>
                            </Card>
                        </Row>

                        <Row>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <button variant="primary">Go somewhere</button>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                    <Col md={"auto"}>
                    <ul>
                        <li>
                            hfasud
                            {/* <Link to="/">Home</Link> */}
                        </li>
                        <li>
                            dsdsadsad
                            {/* <Link to="/about">About</Link> */}
                        </li>
                        <li>
                            sadsadsad
                            {/* <Link to="/dashboard">Dashboard</Link> */}
                        </li>
                    </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SubBody;