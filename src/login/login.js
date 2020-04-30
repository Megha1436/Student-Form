import React from 'react';
import {connect} from "react-redux";
import './style.css';
import './student';
import './admin';
const SID = ""
const AID = "54321"
const PASSWORD = "1234"


class Login extends React.Component{
    state = {
        aid:"",
        sid:"",
        password:"",
        admin:false
}

    handleChange = (event) =>{
        this.setState({sid : event.target.value})
      }
    Change = (event) =>{
        this.setState({aid : event.target.value})
      }
    Change2 = (event) =>{
        this.setState({password : event.target.value})
      }
    
    handleClick_s = () =>{
        this.props.history.push("/Student");
    }

    handleClick_a = () =>{
        if(this.state.aid==AID && this.state.password==PASSWORD)
          {
            this.props.history.push("/Admin");
         }
         else
           this.setState({isInvalid : "False"});
        }

    

    loginClick = () =>{
        this.setState({admin:!this.state.admin})
    }

    render(){
            return (
                <div>
                {this.state.admin===false ?
                <div className= 'loginPage_design'>
                    <h2 style={{fontSize: "30px", fontFamily: "Times New Roman"}}>STUDENT ID</h2>
                    <input className='input_design' type = "Number" placeholder="  Enter Your ID" onChange={this.handleChange} value={this.state.sid}/>
                    <p><button className='button' onClick ={this.handleClick_s}>SUBMIT</button></p>
                    <p className= 'login_design' onClick={this.loginClick}><u>Login as Admin</u></p>
                </div> 
                :
                <div className= 'loginPage_design'>
                    <h2 style={{fontSize: "30px", fontFamily: "Times New Roman"}}>ADMIN ID</h2>
                    <input className='input_design' type = "Number" placeholder="  Enter Your ID" onChange={this.Change} value={this.state.aid}/>
                    <h2 style={{fontSize: "30px", fontFamily: "Times New Roman"}}>PASSWORD</h2>
                    <input className='input_design' type = "Password" placeholder="  Enter Password" onChange={this.Change2} value={this.state.password}/>
                    <p><button className='button' onClick ={this.handleClick_a}>SUBMIT</button></p>
                    <p className= 'login_design' onClick={this.loginClick}><u>Login as Student</u></p>
                </div>
                }
            </div>
             );
        }
    }
    export default Login;
