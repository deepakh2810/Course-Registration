import React  from "react";
import Component from "react";
import '../payment/Searchbox.css';
//import '../App.js';

import Searchbox from "./Searchbox"
import ReviewPage from "./ReviewPage"
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



render(){

  return(

      <form>

      // Not needed right now because you use Link in SearchFilter.js  /////
            {/*
                  <Router>
                          <Route path="/101" exact strict component={Math101} />
              </Router>
              <Router>
                      <Route path="/565" exact strict component={ComSci565} />
            </Router>
          */}

          <p>  <h1>Search Results { this.props.searchtext  } </h1>  </p>

          <h1> Review Page For:  </h1>


      </form>

);
}

}

export default SearchResults;
