
import React, { Component } from "react";
import { connect } from "react-redux";


class TheStars extends Component {





  findCheckboxvalue = e => {
    e.preventDefault();

    const inputElementSt1 = document.getElementById("st5");
    const inputElementSt2 = document.getElementById("st4");
    const inputElementSt3 = document.getElementById("st3");
    const inputElementSt4 = document.getElementById("st2");
    const inputElementSt5 = document.getElementById("st1");

    console.log("inputElementSt1.checked: ", inputElementSt1.checked);
    console.log("inputElementSt2.checked: ", inputElementSt2.checked);
    console.log("inputElementSt3.checked: ", inputElementSt3.checked);
    console.log("inputElementSt4.checked: ", inputElementSt4.checked);
    console.log("inputElementSt5.checked: ", inputElementSt5.checked);

    var ratingStar = "no rating";

    if(  inputElementSt1.checked  ) {
      ratingStar = "1";
      console.log("The star rating is:  = ", ratingStar);
      console.log("inputElementSt1.checked: ", inputElementSt1.checked);
    }
    else if(  inputElementSt2.checked  ) {
      ratingStar = "2";
      console.log("The star rating is:  = ", ratingStar);
      console.log("inputElementSt2.checked: ", inputElementSt2.checked);
    }
    else if(  inputElementSt3.checked  ) {
      ratingStar = "3";
      console.log("The star rating is:  = ", ratingStar);
      console.log("inputElementSt3.checked: ", inputElementSt3.checked);
    }
    else if(  inputElementSt4.checked  ) {
      ratingStar = "4";
      console.log("The star rating is:  = ", ratingStar);
      console.log("inputElementSt4.checked: ", inputElementSt4.checked);
    }
    else if(  inputElementSt5.checked  ) {
      ratingStar = "5";
      console.log("The star rating is:  = ", ratingStar);
      console.log("inputElementSt5.checked: ", inputElementSt5.checked);
    }
    else{
      ratingStar = "no rating";
      console.log("No star rating given");
    }
  //  console.log("The star rating is: ratingStar = ", ratingStar);

{/*
  this.setState({
    rating: "Submitted On TheStars"
  });
  console.log("state.rating: ", this.props.rating);
*/}
    }

    render() {
            const star1 = document.getElementById("st1");
            console.log("star1: ", star1);
    return (
      <form onSubmit={this.findCheckboxvalue} >
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link href="http://www.cssscript.com/wp-includes/css/sticky.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

        <style dangerouslySetInnerHTML={{__html: "\nbody { background-color:#fafafa;}\n.content {\n  text-align: center;\n  margin-top:150px;\n}\n.content h1 {\n  font-family: 'Sansita', sans-serif;\n  letter-spacing: 1px;\n  font-size: 50px;\n  color: #282828;\n  margin-bottom: 10px;\n}\n.content  i {\n  color: #FFC107;\n}\n.content span {\n  position: relative;\n  display: inline-block;\n}\n.content  span:before, .content  span:after {\n  position: absolute;\n  content: \"\";\n  background-color: #282828;\n  width: 40px;\n  height: 2px;\n  top: 40%;\n}\n.content  span:before {\n  left: -45px;\n}\n.content  span:after {\n  right: -45px;\n}\n.content p {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 18px;\n  letter-spacing: 1px;\n}\n.wrapper {\n  position: relative;\n  display: inline-block;\n  border: none;\n  font-size: 14px;\n  margin: 50px auto;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.wrapper input {\n  border: 0;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  position: absolute !important;\n  clip: rect(1px 1px 1px 1px);\n  clip: rect(1px, 1px, 1px, 1px);\n  opacity: 0;\n}\n\n.wrapper label {\n  position: relative;\n  float: right;\n  color: #C8C8C8;\n}\n\n.wrapper label:before {\n  margin: 5px;\n  content: \"\\f005\";\n  font-family: FontAwesome;\n  display: inline-block;\n  font-size: 1.5em;\n  color: #ccc;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.wrapper input:checked ~ label:before {\n  color: #FFC107;\n}\n\n.wrapper label:hover ~ label:before {\n  color: #ffdb70;\n}\n\n.wrapper label:hover:before {\n  color: #FFC107;\n}\n" }} />

        <div className="wrapper">
        <h4>Rate this course out of 5 stars</h4>
          <input type="checkbox" id="st1" defaultValue={1} />
          <label htmlFor="st1" />
          <input type="checkbox" id="st2" defaultValue={2} />
          <label htmlFor="st2" />
          <input type="checkbox" id="st3" defaultValue={3} />
          <label htmlFor="st3" />
          <input type="checkbox" id="st4" defaultValue={4} />
          <label htmlFor="st4" />
          <input type="checkbox" id="st5" defaultValue={5} />
          <label htmlFor="st5" />
        </div>
        <input type="submit" className="btn btn-success btn-block mt-4" />
      </div>
      </form>
    );
  }



}



export default TheStars;
