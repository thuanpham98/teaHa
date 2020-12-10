import React ,{Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Footer extends Component {
    // state ={
    //     sourceImg : "/images/logo.png",
    //     height : "400",
    //     width : "400"
    // }
    render() {
        return (
            <Container fluid="md"  justify-content= "flex-start" display= "flex" Width="100%">
                <Row sm={2}>
                    <Col md={"auto"}>afsadsdsad</Col>
                    <Col md={"auto"}>asdsad</Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;