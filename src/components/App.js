import React, { Component } from 'react'
import SideBar from './SideBar/SideBar'
import Main from './Main/Main'
import '../css/general.css'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            categoriesSelected : [],
            inputSearch : '',
            value : [0,400],
            IdOfTurnAround : null,
            IdOfPrintedSides : null,
            categoriesSelectedID : [],
            categoriesList : [],
        }
    }

    StatesOFSideBar=(categoriesSelected,inputSearch,value,IdOfTurnAround,IdOfPrintedSides,categoriesSelectedID,categoriesList,)=>{
        console.info('***categoriesSelected=,',categoriesSelected,categoriesSelectedID)
        this.setState({
            categoriesSelected : categoriesSelected,
            inputSearch : inputSearch,
            value : value,
            IdOfTurnAround : IdOfTurnAround,
            IdOfPrintedSides : IdOfPrintedSides,
            categoriesSelectedID : categoriesSelectedID,
            categoriesList :categoriesList
        })
    }
    
    render() {
        return (
            <div className='App'>
                <SideBar 
                    StatesOFSideBar={(categoriesSelected,inputSearch,value,IdOfTurnAround,IdOfPrintedSides,categoriesSelectedID,categoriesList,)=>this.StatesOFSideBar(categoriesSelected,inputSearch,value,IdOfTurnAround,IdOfPrintedSides,categoriesSelectedID,categoriesList,)}
                />
                <Main
                    categoriesSelected={this.state.categoriesSelected}
                    inputSearch={this.state.inputSearch}
                    value={this.state.value}
                    IdOfTurnAround={this.state.IdOfTurnAround}
                    IdOfPrintedSides={this.state.IdOfPrintedSides}
                    categoriesSelectedID={this.state.categoriesSelectedID}
                    categoriesList={this.state.categoriesList}
                />
            </div>
        )
    }
}
