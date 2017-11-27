/*
 * HomePage
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

export default class SpeedBump extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      <h2 className="dangerous bold">THIS WEBSITE MAY BE DANGEROUS</h2>
      <table width="100%" border="0" cellspacing="0" cellpadding="3"><tbody><tr><td rowspan="3" ><img src="/Security/PublishingImages/caution.png" alt=""/></td>
      <td><input type="hidden" value="$*WS_CONTINUECGIDATA*$"/> <p className="bold" id="ContinueButton">If you are sure it is safe you can click here to <input type="button" value="       Continue       "/> </p>
      <p className="bold" id="BackButton">If you are not sure, please go back or click here<input type="button" value="       Go Back       "/> </p></td></tr>
      <tr></tr></tbody></table>
      <div className="row"><hr/>
      <p className="leftAlign">This safeguard mitigates risks that could result from visiting malicious websites. For more information on Ralph Lauren’s Acceptable Use policies, please visit <a>RL Today</a>.</p>
      <p className="leftAlign">Destination: <br/>Reason:</p>
      <hr/></div>
      <div>&#160;</div>
      </div>

    );
  }
}
