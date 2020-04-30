const initialData ={
    studentData : []
}

const studentReducer = (store = initialData, action) =>{
    if(action.type ==="SAVE_STUDENT_DATA"){
        return{
            ...store,
            studentData : [...store.studentData,action.payLoad]
        }
    }

    return{...store}    

}
export default studentReducer;