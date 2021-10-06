import React, { Component } from 'react'
import '../../css/general.css'
import AutoComplete from '../materialComponents/AutoComplete'
import AutoComplete2 from '../materialComponents/AutoComplete2'

export default class Options extends Component {

    constructor(props) {
        super(props);
        this.state={
            
        }
    }
    
    render() {
        return (
            <div className='card'>
                <div className='card-header'>Options</div>
                <div className='card-body , AIC' >
                    <AutoComplete 
                        getStatePrintedSides={(PrintedSides , IdOfPrintedSides)=>this.props.getStatePrintedSides(PrintedSides , IdOfPrintedSides)}
                        PrintedSides={this.props.PrintedSides}
                    />
                    <AutoComplete2 
                        getStateTurnAround={(TurnAround , IdOfTurnAround )=>this.props.getStateTurnAround(TurnAround , IdOfTurnAround)}
                        TurnAround={this.props.TurnAround}
                    />
                </div>
            </div>
        )
    }
}
