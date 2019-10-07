import React, { Component } from "react";
import M from 'materialize-css';
import $ from 'jquery';


class App extends Component {
  componentDidMount(){
    window.addEventListener('DOMContentLoaded', (event) => {


      $("#DateTimePickerDiv").click(function () {
          setTimeout(function () {
              $("#DatePickerDiv").click();
          });
      });

      var DatePickInit = document.querySelectorAll('.datepicker');
      var DatePickOpt = {
          'minDate': new Date(),
      }

      var DatePickInstances = M.Datepicker.init(DatePickInit, DatePickOpt);
      setTimeout(function () {
          $('button.datepicker-done').attr("id", "DatePickerID");
          $("#DatePickerID").click(function () {
              $("#TimePickerDiv").click();
          })
      }, 10);
      var dt = new Date();
      dt.setHours(dt.getHours() + 3);
      console.log(dt);
      var hr = dt.getHours();
      var min = dt.getMinutes();
      var ampm = hr >= 12 ? 'PM' : 'AM';
      hr = hr % 12;
      hr = hr ? hr : 12;
      min = min < 10 ? '0'+min : min;
      if(hr<10){
        hr="0"+hr;
      }
      var strTime = hr + ':' + min + ' ' + ampm;

          var TimePickInit = document.querySelectorAll('.timepicker');
          var TimePickOpt = {
            'defaultTime': strTime
          }

          var TimePickInstances = M.Timepicker.init(TimePickInit, TimePickOpt);
          setTimeout(function () {
         
          $('button.timepicker-close').addClass("TimePickerClassAdd");
          $(".TimePickerClassAdd").click(function () {
              var gettingTheDiv = $(".TimePickerClassAdd")[1];
              console.log(gettingTheDiv);
              var tym1 = $("#TimePickerDiv").val();
              var t1=JSON.stringify(tym1);
              var t2=JSON.stringify(strTime);
              if(t1<t2)
              {
                $("#DateTimePickerDiv").val($("#DatePickerDiv").val() + " | " + strTime);
              }
              else{
                $("#DateTimePickerDiv").val($("#DatePickerDiv").val() + " | " + $("#TimePickerDiv").val());
              }
             
          });
      }, 10)
  });


}


  render(){
    return (
      <div className="App">
        <div className="row">
  
        <div className="col s12">
              <input type="text" id="DateTimePickerDiv" placeholder="Click Me!!"/>
        </div>
  
        <div className="col s6">
              <input type="text" className="datepicker" id="DatePickerDiv" style={{display:"none"}}/>
        </div>

        <div className="col s6">
        <input type="text" className="timepicker" id="TimePickerDiv" style={{display:"none"}}/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
