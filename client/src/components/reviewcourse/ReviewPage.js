import React from "react";
import '../payment/Searchbox.css';
import Searchbox from "./Searchbox"
import ReviewCourses from "./ReviewCourses"
import { Link } from "react-router-dom";
import CourseCart from "../add-swap-delete-course/coursecart";
import ViewCourse from "../add-swap-delete-course/viewcourse";
import AddCourses from "../add-swap-delete-course/addcourses";
import ListCourses from "./ListCourses"

import { getCourses } from "../../actions/courseActions";
import { connect } from "react-redux";

const thecourses = [
{
  name: "Math -",
  number: "101",
  professor: "- Mary Snyder",
  id: 1
},
{
  name: "Computer Science -",
  number: "565",
  professor: "- Adeel Bhutta",
  id: 2
},
{
  name: "Informatics -",
  number: "401",
  professor: "- John Granger",
  id: 3
},
]

function searchingFor(term){
  return function(x){
    return x.name.toLowerCase().includes(term.toLowerCase())  || !term ||
    x.professor.toLowerCase().includes(term.toLowerCase()) ||
    x.number.toLowerCase().includes(term.toLowerCase());
  }
}

class ReviewPage extends React.Component{



  constructor(props){
    super(props);
    this.state = {
      thecourses: thecourses,
      term: '',
    }
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event){
    this.setState({ term: event.target.value})
  }

state = {
  requestedSearch : undefined,
  searchtext : undefined,
  error: undefined
}

  getResults = async(e) => {
    e.preventDefault();
    const whatsearched = e.target.elements.thesearch.value;
  if( whatsearched ){

    console.log(whatsearched);
    this.setState({
      requestedSearch: 1,
      searchtext: whatsearched,
      error: ""
      });
      //  return <Redirect to=  '/SearchResults' />
        //e.browserHistory.push('/SearchResults')
      }

      else{
        this.setState( {
        error: "Search form is missing information",
        searchtext: undefined,
        requestedSearch : undefined
      } );
      console.log(this.state.error);

      }
    }

render(){

  const { term, thecourses } = this.state;

  return(

  <form >


      <Searchbox  getResults = {this.getResults} // this is the top right Searchbox
        searchtext={this.state.searchtext}
        searchHandler = {this.searchHandler} value = {term} />

        <ListCourses/>

{/*
  <div className="row">

<div className="card w-75 m-5">
  <div className="card-body">
    <div className="card-title">


      {
        thecourses.filter( searchingFor(term) ).map( thiscourse =>
          <div key ={thiscourse.id} >

            <h3>  <Link to= { "/reviewcourses/"+ thiscourse.number } > {thiscourse.name} {thiscourse.number}   {thiscourse.professor}  </Link>  </h3>
          </div>
        )
      }
</div>
</div>
</div>
</div>
*/ }


{/*

<div className="col-md-9">
  {this.props.courses.courses.map(course => (
    <div>
    <ViewCourse
      key={course.coursenumber}
      course={course}
    />
    </div>
  ))}
</div>

*/ }




{/*
  <div className="card w-90 m-2">
    <div className="card-body">
      <div className="card-title">
        {this.props.courses.courses.map(course => (
        <h2>{  course.coursenumber + " " + course.name}</h2>
            ))}
      </div>
      <div className="card-text">
      {this.props.courses.courses.map(course => (
        <span>
        <p>{course.description}</p>

        <h4>{course.location}</h4>
        <h5>{course.schedule}</h5>  </span>
        ))}
        <a href="#" className="float-right">
          View More
        </a>
      </div>
    </div>
  </div>

*/}






  </form>

);




}

}

const mapStateToProps = state => {
  return {
    courses: state.courses

  };
};

export default connect(
  mapStateToProps,
  { getCourses}
)(ReviewPage);


//export default ReviewPage;
