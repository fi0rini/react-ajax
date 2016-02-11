import React, { Component } from 'react';

export default class DataMap extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    let { data, children: Components } = this.props;

    Components = Components instanceof Array ? Components : [ Components ];

    return (
      <div className="data-map">
        {
          Components.map( child => {
            var { type, type: { displayName }, props: { dataKey: key } } = child;
            var value = data[ key ];
            var keyList = Object.keys(data).filter(prop => prop.match(new RegExp(displayName, 'i')));

            if ( !displayName )
              return (
                <div
                  className={key}>
                    {value}
                </div>
              );

            if ( value )
              return (
                <displayName
                  className={displayName}
                  data={value}>
                  {value}
                </displayName>
              );

            else return <displayName {...data} className={displayName} />

          })
        }
      </div>
    )
  }

}