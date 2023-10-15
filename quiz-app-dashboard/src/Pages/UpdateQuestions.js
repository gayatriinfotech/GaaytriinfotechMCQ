import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux';
import { setCorrectAnswer, setQuestion,fetchCourses } from '../Slice/QuestionSlice';
import { useParams } from 'react-router-dom';
import { UpdateData,setOption1,setOption2,setOption3,setOption4,addData, UpdateDataId,setCourseId} from '../Slice/QuestionSlice';
import Sidebar from './Sidebar';

function UpdateQuestions() {

    const {singlequestion,correctanswer,option1,option2,option3,option4,courseid,courses} = useSelector((state) => state.questionOperation);

    const params=useParams();
    const id=params.id;
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(UpdateDataId(id));
      dispatch(fetchCourses());
    },[])

    const data ={
        id:id,
        courseid:courseid,
        singlequestion:singlequestion,
        option1:option1,
        option2:option2,
        option3:option3,
        option4:option4,
        correctanswer:correctanswer
    }

    console.log('option3:'+option3);

    if(singlequestion===""){
      return 'Loading...';
    }


  return (
<React.Fragment>
<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
  data-sidebar-position="fixed" data-header-position="fixed">
  <Sidebar/>
  <div className="body-wrapper">
 <Header/>
<div className="container-fluid">
    <div className="container-fluid">
      <div className="card">
        <div className="card-body">
        <h2>Update Question</h2><br/>
          <div className="card">
            <div className="card-body">

            <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Course Name</label>
                  {/* <input type="text" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>dispatch(setCourseId(e.target.value))}/> */}
                  <select className='form-control' onChange={(e)=>dispatch(setCourseId(e.target.value))}>
                      <option>{courses && courses.map((course)=>{
                        if(courseid === course.id){
                          return course.course_name
                        }
                      })}</option>

                        {courses && courses.map((course)=>(
                          <option value={course.id}>{course.course_name}</option>
                        ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Question</label>
                  <input type="text" required className="form-control" Value={singlequestion}  id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>dispatch(setQuestion(e.target.value))}/>
                </div>

                <div className="mb-3" style={{ display:option1 ? 'block' :'none' }}>
                  <label for="exampleInputEmail1" className="form-label">Option 1</label>
                  <input type="text" required className="form-control" Value={option1} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>dispatch(setOption1(e.target.value))}/>
                </div>

                <div className="mb-3" style={{ display:option2 ? 'block' :'none' }}>
                  <label for="exampleInputEmail1" className="form-label">Option 2</label>
                  <input type="text" required className="form-control" Value={option2} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>dispatch(setOption2(e.target.value))}/>
                </div>

                <div className="mb-3" style={{ display:option3 ? 'block' :'none' }}>
                  <label for="exampleInputEmail1" className="form-label">Option 3</label>
                  <input type="text" className="form-control" Value={option3} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>dispatch(setOption3(e.target.value))}/>
                </div>  

                <div className="mb-3" style={{ display:option4 ? 'block' :'none' }}>
                  <label for="exampleInputEmail1" className="form-label">Option 4</label>
                  <input type="text" className="form-control" Value={option4} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>dispatch(setOption4(e.target.value))}/>
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Correct Answer</label>
                  <input type="text" required className="form-control" Value={correctanswer} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>dispatch(setCorrectAnswer(e.target.value))}/>
                </div>
                <button type="button" className="btn btn-primary" onClick={()=>dispatch(UpdateData(data))}>Update</button>
            </div>
          </div>
       </div>
      </div>
    </div>
   </div>
  </div>
</div>
<Footer/>
</React.Fragment>
  )
}

export default UpdateQuestions