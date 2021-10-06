import React, { Component } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../../css/general.css'


export default class Paginations extends Component {

    constructor(props) {
        super(props);
        this.state={
           currentPage:1
        }
    }

    changeHandlerPagination=(e,page)=>{
        this.setState({
            currentPage:page
        },()=>this.props.getStatePagination(this.state.currentPage))
        // console.info(e.target.innerText)
    }
    
    render() {
        return (
            <Stack className='mt-5 txtCEN' spacing={2}>
                <Pagination 
                    count={2} 
                    shape="rounded" 
                    onChange={this.changeHandlerPagination}
                    page
                />
            </Stack>
        )
    }
}
