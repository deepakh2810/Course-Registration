import React from "react";
import './Form.css';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


//const Form = props =>(
class Form extends React.Component{
  render(){
    return(
  <form onSubmit = {this.props.submitFunction}   >
  <h1> Payment </h1>

<div className="wrapper">
<div id="firstTextFields">
    <p> <br/> <label htmlFor= "cardname"> Name on Card</label>
  <input type = "text" id="cardname" name="nameoncard" placeholder= "Name on Card..."/> </p>

  </div>
  <div id="second"> <br/>
    <p> <label htmlFor= "cardnumber"> Credit card number</label>
    <input type = "text" id="cardnumber" name="creditcardnumber" placeholder= "Credit card number..."/>  <br/> </p>
    </div>


<div id="firstTextFields">
    <p>  <label htmlFor= "expmonth"> Expiration Month</label>
  <input type = "text" id="expmonth" name="expirationmonth" placeholder= "September"/> </p>
  </div>
  <div id="second"> <p> <label htmlFor= "expyear"> Expiration Year </label>
  <input type = "text" id="expyear" name="expirationyear" placeholder= "1996"/>  <br/> </p>
</div>


<div id="firstTextFields">

    <p> <label htmlFor= "cvv"> CVV</label>
  <input type = "text" id="cvv" name="cardcvv" placeholder= "352"/> </p>
</div>
<div id="second">
    <p>  <label htmlFor= "emailadd"> Email Address</label>
  <input type = "text" id="emailadd" name="emailaddress" placeholder= "jimmy@iu.edu"/> </p><br/>


  </div>



{/*
     <Button onClick = {this.props.submitFunction} bsStyle="Success"> Submit </Button>  </p>
*/}

    </div >


    {this.props.formSubmitted && <p> {this.props.formSubmitted} </p> }
    {this.props.error && <p> {this.props.error} </p> }
    <div class="form-actions">

        <button type="submit" class="btn" >  Submit   </button>
    </div>


  </form>


);
}
};

export default Form;
