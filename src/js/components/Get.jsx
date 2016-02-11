import React, { Component, PropTypes } from 'react';
import request from 'superagent'
import DataMap from './DataMap'

export default class Get extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired
  };

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    request
      .get(this.props.url)
      .end( (err, res) => {
        this.setState({
          data: res.body
        });
      })
  }

  render () {
    var { data } = this.state;

    return (
      <div className="get">
        {
          data instanceof Array ? data.map( d =>
            <DataMap data={d}>
              {this.props.children}
            </DataMap>
          ) : data instanceof Object ? (
            <DataMap data={data}>
              {this.props.children}
            </DataMap>
          ) : ''
        }
      </div>
    )
  }
}