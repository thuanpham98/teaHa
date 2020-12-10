import React ,{Component} from 'react';
import LogoTea from './logo';
import TaskBarNavigator from './taskbar';
import { Container, Row, Col } from 'react-bootstrap';

class Header extends Component {
    // state ={
    //     sourceImg : "/images/logo.png",
    //     height : "400",
    //     width : "400"
    // }
    render() {
        return (
            <Container fluid="md"  justify-content= "flex-start" display= "flex" >
                <Row sm={2}>
                    <Col md={"auto"}><LogoTea/></Col>
                    <Col md={"auto"}><TaskBarNavigator/></Col>
                </Row>
            </Container>
        );
    }
}

export default Header;