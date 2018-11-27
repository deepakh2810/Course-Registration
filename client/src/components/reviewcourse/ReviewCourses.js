import React  from "react";
import Component from "react";
import '../payment/Searchbox.css';
//import '../App.js';

import Searchbox from "./Searchbox"
import ReviewPage from "./ReviewPage"
import ViewCourseDetails from "../add-swap-delete-course/viewcoursedetails"

//import Math101 from "./Math101";
//import ComSci565 from "./ComSci565";
//import Info401 from "./Info401";



//state = {  }

{/*
const FuncComSci = () => {
  return(
    <div>  <h1> Review Page For:  </h1>   </div>
    <div>  <h1> Computer Science - 565 - Adeel Bhutta </h1> </div>
)
}
*/ }

class SearchResults extends React.Component{



  renderReview(){
    return (
      <React.Fragment>
        <main className="container-fluid">
          <div className="row">
            <div className="col-md-2">

              { this.props.namereview + "   " + this.props.reviewSubmitted  }


            </div>

          </div>
        </main>
      </React.Fragment>
    );
  }


render(){

  return(


  <form  onSubmit={this.props.reviewFunction}>



    {this.props.reviewSubmitted &&

      <p> <br/> <br/>

      <React.Fragment>
      <div className="card w-90 m-2">
        <div className="card-body">
          <div className="card-title">
          <h3>{ "Review from : "  +  this.props.namereview  }</h3>
        </div>

        <div className="card-text">
          <p>  { this.props.reviewSubmitted }  </p>

      </div>

    </div>
  </div>


  </React.Fragment>
  <br/>  <br/> <br/>   </p>


    }



    <React.Fragment>
    <br/> <br/> 
    <div className="card w-90 m-2">
      <div className="card-body">

                              <div class="form-group">
                                <div className="card-title">

                                <label for="nameReviewer" class="control-label">Enter Name</label>
                                <input id="nameReviewer" name="nameReviewer" type="text" class="form-control"/>

                                <label class="control-label" for="textarea">  <h3> Review This Course  </h3> </label>
                           </div>
                                <textarea id="textarea" name="textarea" cols="40" rows="5" required="required" class="form-control"></textarea>
                              </div>


                              <div class="form-group">
                                 <button  name="submit" type="submit" class="btn btn-primary">Submit Review</button>
                               </div>


                              </div>
                            </div>


                            </React.Fragment>








            {/*       // Not needed right now because you use Link in SearchFilter.js  /////

                  <Router>
                          <Route path="/101" exact strict component={Math101} />
              </Router>
              <Router>
                      <Route path="/565" exact strict component={ComSci565} />
            </Router>
          */}

        {/*  <p>  <h1>Search Results { this.props.searchtext  } </h1>  </p>

          <h1> Review Page For:  </h1>   */ }


      </form>

);
}

}

export default SearchResults;
