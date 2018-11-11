import React  from "react";
import Component from "react";
import '../payment/Searchbox.css';
import Searchbox from "./Searchbox"
import ReviewPage from "./ReviewPage"
import ReviewCourses from "./ReviewCourses"

class Math101 extends React.Component{



render(){

  return(

      <form>


        <div className="next2sidebar">

       </div>

       <div className="card w-75 m-2">
         <div className="card-body">
           <div className="card-title">

                <h1> Informatics - 401 - John Granger </h1>

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>

                  <div class="form-group">
                    <label for="bodyreview">Add a Review</label>
                    <textarea id="bodyreview" name="bodyreview" cols="40" rows="5" class="form-control"></textarea>
                  </div>
                  <div class="form-group">
                    <button name="submit" type="submit" class="btn btn-primary">Post Review</button>
                  </div>


                  </div>
                  </div>
                  </div>

     </form>

      );
      }

      }

      export default Math101;
