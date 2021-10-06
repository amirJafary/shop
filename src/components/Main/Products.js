import React, { Component } from 'react'
import axios from 'axios'
import photo from '../../imajes/no-image-available-icon.jpg'
import '../../css/general.css'

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state={
            products:[],
        }
    }

    getDataOfProductsFromAPI=()=>{

        let product=this.props.categoriesSelectedID?.map((product ,index) =>'&filter.categoryIds['+index+']='+product+'');
console.info('***this.props.categoriesSelectedID=',this.props.categoriesSelectedID,product)
        let url = 'http://172.17.17.101:8088/api/en/Nas/Product/GetProductList?&pageLength=12&currentPageIndex='+this.props.currentPage+'&Filter.productSortType='+this.props.sortById+'&filter.MinimumPrice='+this.props.value[0]+'&filter.MaximumPrice='+this.props.value[1]+'&filter.search='+this.props.inputSearch+''+product?.join('')+''

        if(!!this.props.IdOfPrintedSides){
            url=url+'&filter.twoSidePrintingType='+this.props.IdOfPrintedSides
        }

        if(!!this.props.IdOfTurnAround){
            url=url+'&filter.turnaround='+this.props.IdOfTurnAround
        }

        axios.get(url)
        .then(response => {
            if(!response.data.hasError){
                if(response.data.messageItems[0].data.dataItems.length != this.state.products.length)
                this.setState({
                    products:response.data.messageItems[0].data.dataItems
                },()=>console.info(url))
            }else{
                console.info(response.data)
            }
        });
    }

    componentDidMount(){
        this.getDataOfProductsFromAPI()
    }

    componentDidUpdate(){
        this.getDataOfProductsFromAPI()
    }

    render() {
        return (

            <div className='d-flex products cardParent'>
                {this.state.products.map(product=>
                    <div key={product.id} className="card OV-HI col-4 mx-10 cardParent2" >
                        <div className='POS-REL'>
                            <img src={photo} className="ImgProducts cardImg" alt="card" />
                            <p className='POS-ABS'>{product.name}</p>
                        </div>
                        <div className="card-body">
                            <p className="card-text FSize12 cardTITLE" >Available Circulations: </p>
                            <div className='txtCEN d-flex'>
                                {product.printCirculations[0] && <p className='p10  FSize'>{product.printCirculations[0].value} pcs </p>}
                                {product.printCirculations[1] && <p className='p10 BDR FSize'>{product.printCirculations[1].value} pcs</p>}
                                {product.printCirculations[2] && <p className='p10 BDR FSize'>{product.printCirculations[2].value} pcs</p>}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
