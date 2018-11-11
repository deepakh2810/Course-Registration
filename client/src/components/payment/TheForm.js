import React from "react";
import './Form.css';
import './TheForm.css';
import NewForm from "./NewForm";
import Cart from "./Cart";



class TheForm extends React.Component{
render(){

  return(

    <div class="container-flex">
        <div class="dock dock-left">
            <div class="container-fluid">
                <div class="panel panel-default">
                    <div class="panel-heading"><h1>Payment</h1></div>
                    <div class="panel-body">  <NewForm /> </div>
                </div>
            </div>
        </div>

        <div class="dock dock-right">
            <div class="container-fluid">
                <div class="panel panel-default">
                    <div class="panel-heading"> <Cart/> </div>
                    <div class="panel-body">Panel Body Right</div>
                </div>
            </div>
        </div>
    </div>

      );
    }

    }

    export default TheForm;
