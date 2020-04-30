import React from 'react';
import {saveStudentData} from "../actions/studentAction";
import {connect} from "react-redux";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


class Student extends React.Component{
    state = {
        name: "",
        email: "",
        phone: '',
        age: '',
        address: "",
        stream: ""
    }

     handleChange1 = (event) =>{
        this.setState({name : event.target.value})
      }
      handleChange2 = (event) =>{
        this.setState({email : event.target.value})
      }
      handleChange3 = (event) =>{
        this.setState({phone : event.target.value})
      }
      handleChange4 = (event) =>{
        this.setState({age : event.target.value})
      }
      handleChange5 = (event) =>{
        this.setState({address : event.target.value})
      }
      handleChange6 = (event) =>{
        this.setState({stream : event.target.value})
      }
      onSubmit = () => {
        confirmAlert({
          title: 'Confirm to submit',
          message: 'Are you sure to do this.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => {
                const data = {
                  name : this.state.name,
                  email : this.state.email,
                  phone : this.state.phone,
                  age : this.state.age,
                  address : this.state.address,
                  stream : this.state.stream
                }
                this.props.dispatch(saveStudentData(data))
                this.props.history.push('/');
                alert('Record Saved');
              }
            },
            {
              label: 'No',
              onClick: () =>{
                this.props.history.push('/');
                alert('Record Not Saved');
              }
            }
          ]
        });
      }


    render(){
        return(<div className='parentS'>
            <div className='student'>
            <h1>STUDENT DETAILS</h1>
            </div>
            <div className= 'student_design'>
                    <h2 className= 's_page'>Student Name</h2>
                    <input className= 'student_page' type = "text" placeholder="  Enter Name" onChange={this.handleChange1} value={this.state.name}/>
                    <h2 className= 's_page'>E-Mail</h2>
                    <input className= 'student_page' type = "text" placeholder="  Enter Email ID" onChange={this.handleChange2} value={this.state.email}/>
                    <h2 className= 's_page'>Phone</h2>
                    <input className= 'student_page' type = "number" placeholder="  Enter Phone(10 digits)" onChange={this.handleChange3} value={this.state.phone}/>
                    <h2 className= 's_page'>Age</h2>
                    <input className= 'student_page' type = "number" placeholder="  Enter Age" onChange={this.handleChange4} value={this.state.age}/>
                    <h2 className= 's_page'>Address</h2>
                    <input className= 'student_page' type = "text" placeholder="  Enter Address" onChange={this.handleChange5} value={this.state.address}/>
                    <h2 className= 's_page'>Stream</h2>
                    <select onChange={this.handleChange6} className='student_page'>
                    <option>Select Stream</option>
                    <option value="cse">CSE</option>
                    <option value="it">IT</option>
                    <option value="ece">ECE</option>
                    <option value="ee">EE</option>
                    <option value="eee">EEE</option>
                    <option value="me">ME</option>
                    </select>
                    <p><button className='buttonS' onClick ={this.onSubmit}>SUBMIT</button></p>
            </div>
            </div>

        );
    }
}
export default connect(null,null)(Student);