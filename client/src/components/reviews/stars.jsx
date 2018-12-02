
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







      <div id="css-script-menu">
        <div className="css-script-center">
          <ul>
            <li><a href="http://www.cssscript.com/pure-css-star-rating-component/">Download</a></li>
            <li><a href="http://www.cssscript.com/">Back To CSS Script</a></li>
          </ul>


          <div className="css-script-clear"></div>
        </div>
      </div>
      <div className="content">
        <h1>CSS Only Rating Control</h1>
      </div>

      <div className="wrapper">
        <input type="checkbox" id="st1" value="1" />
        <label for="st1"></label>
        <input type="checkbox" id="st2" value="2" />
        <label for="st2"></label>
        <input type="checkbox" id="st3" value="3" />
        <label for="st3"></label>
        <input type="checkbox" id="st4" value="4" />
        <label for="st4"></label>
        <input type="checkbox" id="st5" value="5" />
        <label for="st5"></label>
      </div>
      <script>
        function(i,s,o,g,r,a,m) {
        i['GoogleAnalyticsObject']=r;
        i[r]=i[r]||
        function(){
        (i[r].q=i[r].q||[]).push(arguments)}, i[r].l=1*new Date();
        a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];
        a.async=1;
        a.src=g;
        m.parentNode.insertBefore(a, m)
        }

      (window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-46156385-1', 'cssscript.com');
        ga('send', 'pageview');

      </script>






      <h2> Hola</h2>



      </div>
    );
  }
}


export default Stars;
