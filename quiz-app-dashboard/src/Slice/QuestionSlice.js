import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('fetchData',async ()=>{
    const response = await axios.get('http://localhost:8000/api/quizapp');
    return response.data;
});

export const fetchCourses = createAsyncThunk('fetchCourses',async ()=>{
    const response = await axios.get('http://localhost:8000/api/getCourses');
    return response.data;
});

export const addData = createAsyncThunk('addData',async (data)=>{

    var options={};

    if (data.option1 !== null && data.option1.trim() !== '') {
        // options.push(data.option1);
        options={...options,opt1:data.option1}
    }
    
    if (data.option2 !== null && data.option2.trim() !== '') {
        // options.push(data.option2);
        options={...options,opt2:data.option2}

    }
    
    if (data.option3 !== null && data.option3.trim() !== '') {
        // options.push(data.option3);
        options={...options,opt3:data.option3}

    }
    
    if (data.option4 !== null && data.option4.trim() !== '') {
        // options.push(data.option4);
        options={...options,opt4:data.option4}
    }

    const formData = new FormData();
    formData.append("course_id", data.courseid);
    formData.append('question', data.singlequestion);
    formData.append('options', JSON.stringify(options));
    formData.append('answer', data.correctanswer);
    const response = await axios.post('http://localhost:8000/api/quizapp', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
    return response.data;
});

export const deleteData = createAsyncThunk('deleteData',async (id)=>{
    const response = await axios.delete('http://localhost:8000/api/quizapp/'+id);
    return response.data;
});


export const UpdateDataId = createAsyncThunk('UpdateDataId',async (id)=>{
    const response = await axios.get('http://localhost:8000/api/quizapp/'+id);
    return response.data;
});

export const UpdateData = createAsyncThunk('UpdateData',async (data)=>{


    var options={};

    if (data.option1 !== null && data.option1.trim() !== '') {
        // options.push(data.option1);
        options={...options,opt1:data.option1}
    }
    
    if (data.option2 !== null && data.option2.trim() !== '') {
        // options.push(data.option2);
        options={...options,opt2:data.option2}

    }
    
    if (data.option3 !== null && data.option3.trim() !== '') {
        // options.push(data.option3);
        options={...options,opt3:data.option3}

    }
    
    if (data.option4 !== null && data.option4.trim() !== '') {
        // options.push(data.option4);
        options={...options,opt4:data.option4}
    }

    const formData = new FormData();
    formData.append('_method','PUT')
    formData.append("course_id", data.courseid);
    formData.append('question',data.singlequestion);
    formData.append('options',JSON.stringify(options));
    formData.append('answer',data.correctanswer);
    const response = await axios.post('http://localhost:8000/api/quizapp/'+data.id,formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
    return response.data;
});

const initialState = {
    singlequestion:'',
    courseid:'',
    courses:[],
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    options:[],
    correctanswer:'',
    questions:[],
    updateQuestions:[],
    loading:false,
};

const questionOperation = createSlice({
    name:'questionOperation',
    initialState,
    reducers:
    {
        setCourseId:(state,payload)=>{
            state.courseid=payload.payload;
        },
        setQuestion:(state,payload)=>{
            state.singlequestion=payload.payload;
        },
        setOption1:(state, payload)=>{
            state.option1=payload.payload;
        },
        setOption2:(state, payload)=>{
            state.option2=payload.payload;
        },
        setOption3:(state, payload)=>{
            state.option3=payload.payload;
        },
        setOption4:(state, payload)=>{
            state.option4=payload.payload;
        },
        setCorrectAnswer:(state, payload)=>{
            state.correctanswer=payload.payload;
        },
    },
        extraReducers:{
            [fetchData.pending]:(state,action)=>{
                state.loading=true;
            },
            [fetchData.fulfilled]: (state , action) => {
                    state.loading=false;
                    state.questions = action.payload;
            },
            [fetchCourses.pending]:(state)=>{
                state.loading = true;
            },
            [fetchCourses.fulfilled]:(state, action)=>{
                state.courses = action.payload;
            },
            [addData.pending]:(state)=>{
                state.loading=true;
            },
            [addData.fulfilled]:(state)=>{
                state.loading=false;
                window.location.href="/questions";
            },
            [deleteData.fulfilled]:(state)=>{
                state.loading=false;
                window.location.href="/questions";
            },
            [UpdateDataId.fulfilled]:(state,payload)=>{
                state.loading=false;
                state.courseid=payload.payload.course_id;
                state.singlequestion = payload.payload.question;
                const options =JSON.parse(payload.payload.options);
                state.option1 = options.opt1 ? options.opt1: '';     
                state.option2 = options.opt2 ? options.opt2: '';               
                state.option3 = options.opt3 ? options.opt3: '';                
                state.option4 = options.opt4 ? options.opt4: '';   
                state.correctanswer = payload.payload.answer;             
            },
            [UpdateData.fulfilled]:(state)=>{
                state.loading=false;
                window.location.href="/questions";
            },
    }
});

export const {setQuestion , setOption1,setOption2,setOption3,setOption4,setCorrectAnswer,setCourseId} = questionOperation.actions;

export default questionOperation.reducer;