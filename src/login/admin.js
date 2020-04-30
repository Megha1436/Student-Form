import React from 'react';
import {connect} from 'react-redux';
import { saveStudentData } from '../actions/studentAction';
class Admin extends React.Component{

    onDetails =(email) =>{
    this.props.history.push(`/details/${email}`)
    }
    render(){
        return(
            <div className='parent_page'>
                <div className='admin_page'>
                <h2>REGISTERED  STUDENTS</h2>
                </div>
                <div className='admin_design'>
                    {this.props.data.map((studentData)=>{
                    return(
                        <div className='admin2_design'>
                        <span><b>Name : </b>{studentData.name}</span>
                        <span>  /  </span>
                        <span><b>Email : </b>{studentData.email}</span>
                        <span>.....  </span>
                        <button onClick = {()=>this.onDetails(studentData.email)}>Details</button>
                        </div>
                    )})
                    }
                </div>
            </div>
        );
    }
}
const mapStoreToProps =(store) =>{
    return{data : store.studentData}
}
export default connect(mapStoreToProps,null)(Admin);