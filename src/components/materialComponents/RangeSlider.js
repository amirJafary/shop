import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import '../../css/general.css'


export default class RangeSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      value:[0,400]
    }
  }
  
  valueText=(value) =>`${value}`;

  changeHandlerRangeSliderPrice=(e)=>{
    this.setState({
      value:e.target.value
    },()=>this.props.getStateValue(this.state.value))
    // ,()=>console.info(this.state.value)
  }

  render(){
    return (
      <Box style={{ width:'90%' , marginLeft:'10px'}}>
        <Slider
          min={0}
          size='small'
          color='secondary'
          max={400}
          value={this.props.value}
          onChange={(e)=>this.changeHandlerRangeSliderPrice(e)}
          valueLabelDisplay="auto"
          getAriaValueText={this.valueText}
        />
      </Box>
    );
  }
}
