import React, { Component } from 'react';
import Get from './components/Get';

export default class TestApp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="test-app-wrapper">
        <Get url="/test-data">
          <div dataKey="username" />
          <div dataKey="text" />
          <div dataKey="date" />
          <div dataKey="likes" />
        </Get>
      </div>
    )
  }
}