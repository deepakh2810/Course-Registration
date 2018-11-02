import React from "react";
import './Form.css';
import './TheForm.css';

import { Button } from 'react-bootstrap';



//const Form = props =>(
class NewForm extends React.Component{
  render(){
    return(

  <form onSubmit = {this.props.submitFunction} >
  <h1>Payment</h1> <br/> <br/>
<div className="form-inline" >

  <div className="form-group">
    <label htmlFor="nameoncard">Full Name</label>
    <div className="input-group">
      <div className="input-group-addon">
        <i className="fa fa-user"></i>
      </div>
      <input id="nameoncard" name="nameoncard" placeholder="Jimmy Green" type="text" required="required" className="form-control here"/>
    </div>
  </div>
 <div className="spacer" /> <div className="spacer" />
  <div className="form-group"> <br/>
    <label htmlFor="creditcardnumber">Card Number</label>
    <input id="creditcardnumber" name="creditcardnumber" placeholder="5514 1254 7459 2391" type="text" required="required" className="form-control here"/>
    </div>

    </div>

<div className="form-inline" >

  <div className="form-group">   <br/> <br/>
    <label htmlFor="expirationmonth">Expiration Month</label>
    <input id="expirationmonth" name="expirationmonth" placeholder="September" type="text" required="required" className="form-control here"/>
  </div>
  <div className="spacer" />   <div className="spacer" />
  <div className="form-group">  <br/>
    <label htmlFor="expirationyear">Expiration Year</label>
    <div className="input-group">
    <input id="expirationyear" name="expirationyear" placeholder="1996" type="text" required="required" className="form-control here"/>
    <div className="input-group-addon">
    <i className="fa fa-credit-card"></i>
        </div>
      </div>
  </div>

  </div>

  <div className="form-inline" >

  <div className="form-group">   <br/>
    <label htmlFor="cardcvv">CVV</label>
    <input id="cardcvv" name="cardcvv" placeholder="543" type="text" required="required" className="form-control here"/>
  </div>

  <div className="spacer" /> <div className="spacer" />

  <div className="form-group">
    <label htmlFor="emailaddress">Email Address</label>
    <div className="input-group">
      <input id="emailaddress" name="emailaddress" placeholder="jimmygreen@iu.edu" type="text" aria-describedby="emailaddressHelpBlock" required="required" className="form-control here"/>
      <div className="input-group-addon append">
        <i className="fa fa-at"></i>

      </div>
    </div>
    <br/>
  </div>
  </div>



  <div className="form-group">
  <span id="emailaddressHelpBlock" className="form-text text-muted"> <br/>Receipt will be sent to this email</span>
  <br/>  <br/>
  </div>

  {this.props.formSubmitted && <p> {this.props.formSubmitted} </p> }
  {this.props.error && <p> {this.props.error} </p> }
  <div className="form-actions">
    <button  type="submit" className="btn btn-primary">Submit</button>
  </div>

</form>



);
}
};

export default NewForm;
