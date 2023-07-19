import React, { PureComponent } from 'react'
import loading from './loading.gif'

export default class Spinner extends PureComponent {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <img src={loading} alt="loading" />
      </div>
    )
  }
}
