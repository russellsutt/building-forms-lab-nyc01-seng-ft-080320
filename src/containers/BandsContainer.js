import React, { Component } from 'react'
import { connect } from 'react-redux'
import Bands from '../components/Bands'
import BandInput from '../components/BandInput';

class BandsContainer extends Component {



  render() {
    return(
      <div>
        <BandInput />
        <h1>List of Bands</h1>
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return ({ bands: state.bands })
}

export default connect(mapStateToProps)(BandsContainer)
