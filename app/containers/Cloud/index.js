/*
 * Storage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Background from 'images/cloud.png';

export default class Cloud extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container-fluid cloud" style={{backgroundImage: "url(" + Background + ")", width:"100%", height:"100%", backgroundRepeat:"no-repeat", backgroundPositionX:"center"}}>
        <div className="row">
          <p className="leftAlign">Access to Personal Storage and File Sharing sites is restricted to mitigate risks associated with the loss of Ralph Lauren’s sensitive data. To securely share files with external users you can utilize Ralph Lauren’s Accellion Secure File Transfer platform. For access to Accellion please contact the RL Service Desk. </p>
          <p className="leftAlign"><button>Go Back</button></p>
          <p>or use the browser’s Back button to <br/>return to the previous page</p>
        </div>
        <div className="row">
          <hr/>
          <p className="leftAlign">If you believe that you are being blocked from accessing a business critical site or have any other questions related to this incident, please contact your local Help Desk for assistance and provide the following information :</p>
          <p className="leftAlign">Destination: <br/>Reason:</p>
          <hr/>
        </div>
      </div>
    );
  }
}
