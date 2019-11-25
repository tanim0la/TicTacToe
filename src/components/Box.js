import React, {Component} from 'react'

class Box extends Component{      
    render(){
        const Box = this.props.boxes.map((box, index) => <div className="box" key={index} onClick={() => this.props.handlePlayer(index)}>{box}</div>)
        return(
            <div className="border">
                {Box}
            </div>
        )
    }
}

export default Box;