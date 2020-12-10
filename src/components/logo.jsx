import React ,{Component} from 'react';

class LogoTea extends Component {
    state ={
        sourceImg : "/images/logo.png",
        height : "400",
        width : "400"
    }
    render() {
        return (
            <div>
                <img src={this.state.sourceImg} alt="Logo self-make" width={this.state.width} height={this.state.height}/>
            </div>
        );
    }
}

export default LogoTea;