import React from "react";
import '../payment/Searchbox.css';
import ReviewPage from "./ReviewPage"


class Searchbox extends React.Component{

render(){
  return(

  <form onSubmit={this.props.getResults } className="form-inline md-form mr-auto mb-4  float-right m-2">


<div id="top ">

        <div className="search-box ">
          <form className="search-form">

          {this.props.getResults && <p> {this.props.getResults} </p> }

            <input onChange={this.props.searchHandler} id="thesearch" name="thesearch" placeholder="Search" className="form-control" />
            <button className="btn btn-link search-btn ">
              <i className="glyphicon glyphicon-search"></i> Search
            </button>
          </form>

    </div>
    </div>



  </form>





);
}

}

export default Searchbox;
