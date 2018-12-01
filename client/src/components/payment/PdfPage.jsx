

import React, { Component } from "react";
import { connect } from "react-redux";
//const jsPDF = require("../../jsPDF-1.3.2/jspdf");


{/*
      <div>

              <meta charSet="UTF-8" />
              <title>Js-To-PDF</title>
              <style dangerouslySetInnerHTML={{__html: "\n\n\t\tbody {\n\t\t\tpadding: 40px;\n\t\t}\n\n\t\tbutton {\n\t\t\tpadding: 12px 50px;\n\t\t\tborder: none;\n\t\t\tbackground-color: rgb(91,234,208);\n\t\t\tcolor: #333;\n\t\t\tcursor: pointer;\n\t\t\tdisplay: inline-block;\n\t\t}\n\n\t\tinput {\n\t\t\tpadding: 12px 20px;\n\t\t}\n\t" }} />
              <input type="text" placeholder="name your price" />
              <hr />

              <input
                type="submit"
                value="receipt"
                className="btn btn-info btn-block mt-4"/>

              <button>receipt</button>

            </div>
*/}


{/*
theFunction= (e) => {
        		// init the jsPDF library
        		const pdf = new jsPDF();

        		// select the button
        		let button = document.querySelector('button');
        		// select the input
        		let input = document.querySelector('input');

        		// add 'click' event listener for the button
        		button.addEventListener('click', printPDF)

        		// actual PDF options
        		function printPDF() {

        			// @param 1 - Coordinate (in units declared at inception of PDF document) against left edge of the page
        			// @param 2 - Coordinate (in units declared at inception of PDF document) against upper edge of the page
        			// @param 3 - String or array of strings to be added to the page. Each line is shifted one line down per font, spacing settings declared before this call.
        			pdf.text(10, 10, `You have to pay ${input.value}$`);

        			// save the PDF document (downloadable)
        			pdf.save();

        		}
          }
*/}


class PdfPage extends React.Component{



  render(){

    return(


      <form onSubmit={this.props.theFunction}>

      <meta charSet="UTF-8" />
      <title>Js-To-PDF</title>
      <style dangerouslySetInnerHTML={{__html: "\n\n\t\tbody {\n\t\t\tpadding: 40px;\n\t\t}\n\n\t\tbutton {\n\t\t\tpadding: 12px 50px;\n\t\t\tborder: none;\n\t\t\tbackground-color: rgb(91,234,208);\n\t\t\tcolor: #333;\n\t\t\tcursor: pointer;\n\t\t\tdisplay: inline-block;\n\t\t}\n\n\t\tinput {\n\t\t\tpadding: 12px 20px;\n\t\t}\n\t" }} />


      <body>
      	<input type="text" placeholder="name your price" />
      	<hr />

        <input
          type="submit"
          value="receipt"
          className="btn btn-info btn-block mt-4"/>

      	<script
      		src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.min.js"
      	  integrity="sha256-vIL0pZJsOKSz76KKVCyLxzkOT00vXs+Qz4fYRVMoDhw="
      	  crossorigin="anonymous">
      	</script>





      </body>
      </form>



        );
      }

    };

export default PdfPage;
