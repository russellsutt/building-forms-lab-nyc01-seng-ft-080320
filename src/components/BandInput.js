// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

  state = {
    name: '',
  }


  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({ name: ''})
  }

  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }



  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Add a Band</label>
          <input type='text' name="name" value={this.state.name} onChange={(event) => { this.handleOnChange(event) }}/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(null, mapDispatchToProps)(BandInput)
