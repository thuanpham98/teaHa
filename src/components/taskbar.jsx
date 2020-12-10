import React ,{Component} from 'react';
import ButtonNavigator from './button_navigator';
import { Container, Row, Col } from 'react-bootstrap';


class TaskBarNavigator extends Component {
    // state ={
    //     sourceImg : "/images/logo.png",
    //     height : "400",
    //     width : "400"
    // }
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={1}><ButtonNavigator/></Col>
                    <Col sm={1}><ButtonNavigator/></Col>
                    <Col sm={1}><ButtonNavigator/></Col>
                    <Col sm={1}><ButtonNavigator/></Col>
                    <Col sm={1}><ButtonNavigator/></Col>
                </Row>
            </Container>
        );
    }
}

export default TaskBarNavigator;