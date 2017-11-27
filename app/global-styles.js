import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  * {
  margin: 0;

  padding: 0;
}
/* use border-box so block elements don't include padding when figuring out their dimensions */
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  font-family:"Didot W01 Roman";
  font-size: 16px;
}
h1, h2, h3, h4, h5, p, ul, ol {
  margin-bottom: 1em;
}
p {
  font-size: 1.1875em; /*19px*/
  line-height: 1.6em;
  margin-bottom: 1em;
}
label {
  font-family:"DIN_1451 LT W01 Engschrift";
  font-size: 1em;
  letter-spacing: .05em;
  text-transform: uppercase;
}
.form-control,
.react-tagsinput,
.react-tagsinput-input {
  background: transparent;
  border: .1em solid #bc9c5b;
  color: #bc9c5b;
  font-family: Arial, Verdana, sans-serif;
  -webkit-border-radius: .3em;
  border-radius: .3em;
  outline: none;
  padding: 1em .7em;
  text-align: left;
}
.form-control:focus,
.react-tagsinput--focused {
  box-shadow: 0 0 0.625em #bc9c5b;
}
select.form-control:focus {
  box-shadow: 0 0 0.625em #2c7a31;
}
.react-tagsinput {
  overflow: hidden;
}
.react-tagsinput-input {
  border: 0;
  padding: 0em .5em;
  width: 100%;
}
.has-error .form-control,
.react-tagsinput--focused.has-error,
.editable-message.has-error {
  border-color: #da3f3f !important;
  box-shadow: 0 0 0.625em #da3f3f  !important;
}
.has-success .form-control,
.react-tagsinput--focused.has-success,
.editable-message.has-success {
  border-color: #2c7a31;
  box-shadow: 0 0 0.625em #2c7a31;
}
select.form-control {
  background: #2c7a31;
  border: 0;
  color: #fff;
  padding: .7em .5em;
}
ul, ol {
  padding-left: 1em;
  list-style-type: none;
}
ul li, ol li {
  margin-bottom: .5em;
}
ul li:last-child, ol li:last-child {
  margin-bottom: 0;
}




/* ******************** ---------- PAGE CONTAINER ---------- ******************** */
#page-container {
  margin: 0 auto;
  padding: 2.875em 0;
  text-align: center;
  width: 60.625em; /*970px*/
}

.cloud {
	background-image:url('../../../Security/PublishingImages/cloud.png');
	width:100%;
	height:100%;
	background-repeat:no-repeat;
	background-position-x:center;
}


.stop {
	background-image:url('../../../Security/PublishingImages/stop.png');
	width:100%;
	height:100%;
	background-repeat:no-repeat;
	background-position-x:center;
}

hr {
	border: none;
    height: 9px;
    /* Set the hr color */
    color: #1B1E38; /* old IE */
    background-color: #1B1E38; /* Modern Browsers */
}

.overlay {
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background-color:#000;
  opacity:0.8;
  z-index:1001;
  display: none;
}
.overlay-message {
  color: #fff;
  display: none;
  font-family:"SnellRoundhandW01-Scrip";
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  opacity:1;
  z-index:1002;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.overlay-message p,
.overlay-message .progress {
  font-size: 2em;
}



/* +++++++++ ---------- PAGE HEADER ---------- +++++++++ */
#page-logo img {
  width: 28.125em; /*398px*/
  height: 2.063em; /*29px*/
}
#page-header #page-title h1 {
  color: #efcf1e;
  display: inline-block;
  font-family:"Didot W01 Italic";
  font-size: 1.8125em; /*29px*/
  font-weight: normal;
  line-height: 1em;
  margin-bottom: 0;
  vertical-align: top;
}
#page-header #page-title h1:after {
  background-color: #847421;
  content: " ";
  display: block;
  height: .04em;
  margin: .8em auto 0;
  width: 70%;
}
#page-header #page-desc {
  margin-bottom: 2.5375em;
  padding: 0 9.75em;
}
#page-header #page-desc p {
  color: #a99e6a;
  font-family:"DIN_1451 LT W01 Engschrift";
  font-size: 1.0625em;
  line-height: 1.8em;
  letter-spacing: .05em;
  margin-bottom: 1em;
}
#page-header #page-desc p:last-child {
  margin-bottom: 0;
}

/* ************* PAGE CORE ************* */
#page-core {
  padding: 1.0625em 0 2.5em;
}



/* ************* PAGE BUTTONS ************* */
#page-buttons {
  margin: 0 auto 4.6875em;
}
.button {
  background-color: transparent;
  border: 0;
  -webkit-border-radius: .3em;
  border-radius: .3em;
  cursor: pointer;
  display: inline-block;
  font-family: Arial, Verdana, sans-serif;
  font-size: 1em;
  min-width: 12.5em;
  margin: 0 0 1em;
  padding: .7em 1em;
  text-align: center;
  text-transform: none;
  vertical-align: middle;
}
.button.continue {
  background-color: #2c7a31;
  color: #fff;
}
.button.continue:hover {
  background-color: #4c9751;
}
.button.back {
  color: #fff;
}
.button.back:hover {
  color: #bc9c5b;
}


@media (max-width: 940px) {
  #page-container { width: 90%; }
  #page-header #page-desc { padding: 0 2em; }
  #page-indicator ul li { margin: 0 3%; }
  .content-pickcard #card-list .card-item { width: 18em; margin-top: 3.5em; }
  .content-pickcard #card-list .card-item:nth-child(odd) { margin-right: 3.5em; }
  .content-writemessage #data-entry,
  .content-writemessage #page-buttons,
  .content-reviewsend #page-buttons { width: 76%; }
  .content-login .form-group { width: 50%; }
}
@media (max-width: 720px) {
  body { font-size: 85%; }
  .content-pickcard #card-list .card-item { display: block; width: 80%; margin-top: 3.5em; margin-left: auto !important; margin-right: auto !important; }
  .content-pickcard #card-list .card-item:nth-child(2) { margin-top: 3.5em; }
  #page-buttons .button { float: none !important; }
  .content-reviewsend .renderedContainer .renderedImage img { height: auto; width: 100%; }
}
@media (max-width: 320px) {
  body { font-size: 65%; }
  .content-reviewsend .renderedContainer .renderedImage img { height: auto; width: 100%; }
}


`;
