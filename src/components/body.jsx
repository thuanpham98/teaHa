import React ,{Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Body extends Component {
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
                        fiehoihoieHFEPOGnoegnoihuEHGKDSJgnJKdslgbD
                    </Col>
                    <Col md={"auto"}>
                    <img src="/images/logo.png" alt="Logo self-make" width="400" height="400"/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Body;