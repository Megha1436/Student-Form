import React from 'react';
import {connect} from "react-redux";

class Details extends React.Component{

    render(){
        return(
                this.props.data.map((studentData) =>{
                    if(studentData.email===this.props.match.params.email)
                        return(
                            <div >
                                <h1 className='detailPage_design'>STUDENT  RECORD</h1>
                                <div className='details_wrap'>
                                    <p style={{fontSize: "20px", fontFamily: "Times New Roman"}}><b>Name : </b></p><p className='details_design' >{studentData.name}</p>
                                    <p style={{fontSize: "20px", fontFamily: "Times New Roman"}}><b>Email : </b></p><p className='details_design'>{studentData.email}</p>
                                    <p style={{fontSize: "20px", fontFamily: "Times New Roman"}}><b>Phone : </b></p><p className='details_design'>{studentData.phone}</p>
                                    <p style={{fontSize: "20px", fontFamily: "Times New Roman"}}><b>Age : </b></p><p className='details_design'>{studentData.age}</p>
                                    <p style={{fontSize: "20px", fontFamily: "Times New Roman"}}><b>Address : </b></p><p className='details_design'>{studentData.address}</p>
                                    <p style={{fontSize: "20px", fontFamily: "Times New Roman"}}><b>Stream : </b></p><p className='details_design'>{studentData.stream}</p>
                                </div>
                            </div>
                            
                        )  
                })

        );
    }
}

const mapStoreToProps =(store) =>{
    return{data : store.studentData}
}
export default connect(mapStoreToProps,null)(Details);