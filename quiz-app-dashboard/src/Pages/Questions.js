import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setCorrectAnswer, setQuestion, fetchCourses } from '../Slice/QuestionSlice';
import { Link } from 'react-router-dom';
import { deleteData ,setOption1,setOption2,setOption3,setOption4,addData,setCourseId} from '../Slice/QuestionSlice';
import Sidebar from './Sidebar';

function Questions() {
  const {questions,singlequestion,correctanswer,option1,option2,option3,option4,courseid, courses} = useSelector((state)=> state.questionOperation);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchData());
    dispatch(fetchCourses());
  },[]);

  console.log(courseid);
    const data ={
    courseid:courseid,
    singlequestion:singlequestion,
    option1:option1,
    option2:option2,
    option3:option3,
    option4:option4,
    correctanswer:correctanswer
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
        <h2>Add Question</h2><br/>
          <div className="card">
            <div className="card-body">

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Course Name</label>
                  {/* <input type="text" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>dispatch(setCourseId(e.target.value))}/> */}
                  <select className='form-control' onChange={(e)=>dispatch(setCourseId(e.target.value))}>
                      <option>Select Course</option>
                        {courses && courses.map((course)=>(
                          <option value={course.id}>{course.course_name}</option>
                        ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Question</label>
                  <input type="text" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>dispatch(setQuestion(e.target.value))}/>
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Option 1</label>
                  <input type="text" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>dispatch(setOption1(e.target.value))}/>
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Option 2</label>
                  <input type="text" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>dispatch(setOption2(e.target.value))}/>
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Option 3</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>dispatch(setOption3(e.target.value))}/>
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Option 4</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>dispatch(setOption4(e.target.value))}/>
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Correct Answer</label>
                  <input type="text" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>dispatch(setCorrectAnswer(e.target.value))}/>
                </div>
                <button type="button" className="btn btn-primary" onClick={()=>dispatch(addData(data))}>Add</button>
            </div>
          </div>
          <div className="row">
          <div className="col-lg-12 d-flex align-items-stretch">
          <div className="card w-100">
            <div className="card-body p-4">
              <h2>Question and Answers</h2><br/>
              <div className="table-responsive">
                <table className="table text-nowrap mb-0 align-middle">
                  <thead className="text-dark fs-4">
                    <tr>
                      <th className="border-bottom-0">
                        <h6 className="fw-semibold mb-0">Id</h6>
                      </th>
                      <th className="border-bottom-0">
                        <h6 className="fw-semibold mb-0">Course ID</h6>
                      </th>
                      <th className="border-bottom-0">
                        <h6 className="fw-semibold mb-0">Quesion</h6>
                      </th>
                      <th className="border-bottom-0">
                        <h6 className="fw-semibold mb-0">Options</h6>
                      </th>
                      <th className="border-bottom-0">
                        <h6 className="fw-semibold mb-0">Correct Answer</h6>
                      </th>
                      <th className="border-bottom-0">
                        <h6 className="fw-semibold mb-0">Option</h6>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {questions && questions.map((question)=>(
                      <tr key={question.id}>
                      <td className="border-bottom-0"><h6 className="fw-semibold mb-0">{question.id}</h6></td>
                      <td className="border-bottom-0"><h6 className="fw-semibold mb-0">{question.course_id}</h6></td>

                      <td className="border-bottom-0">
                          <h6 className="fw-semibold mb-1" style={{ float:'left' }}>{question.question}</h6>
                      </td>
                      <td className="border-bottom-0 text-wrap">
                        <p className="mb-0 fw-normal" style={{ float:'left' }}>{question.options}</p>
                      </td>
                      <td className="border-bottom-0 text-wrap">
                      <p className="mb-0 fw-normal" >{question.answer}</p>
                      </td>
                      <td className="border-bottom-0">
                        <button type="submit" className="badge bg-warning rounded-3 fw-semibold" onClick={()=>dispatch(deleteData(question.id))}> Delete </button>
                        <Link to={`/update/${question.id}`} className="badge bg-danger rounded-3 fw-semibold">Update</Link>
                      </td>
                      </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
           </div>
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

export default Questions

