
import React, { Component } from "react";
import { connect } from "react-redux";


class Stars extends Component {



  render() {


      var html = [
          '<div> A line</div>',
          '<div> Add more lines</div>',
          '<div> To the array as you need.</div>'
      ].join('');




      var div = document.createElement('div');
        console.log("div: ", div );

          div.setAttribute('class', 'post block bc2');
          console.log("div setAttribute: ", div );

          div.innerHTML = html;
          console.log("div innerHTML: ", div );

        //  document.getElementById('posts').appendChild(div);
          console.log("div  document getElementById: ", div );


    return (
      <div>


      <h2> Hola</h2>

      </div>
    );
  }
}


export default Stars;
