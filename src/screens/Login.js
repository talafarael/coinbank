import React from "react";
import {useForm} from 'react-hook-form'

function Login() {
  
const{ 
  register,
  formState: {
   errors,isValid
  
  },
 
  handleSubmit,
   reset,
}=useForm({mode:'onBlur'}
  
)
  
  const onSubmit = (data) =>{
  alert(JSON.stringify(data))
  reset()
  }
return (
    <div>
   <form onSubmit={handleSubmit(onSubmit)}>
   <label> 
        name:
         <input style={errors?.Name  && { border: "2px solid red" }}         
         {...register('Name',{
          required:'заповніть поле',
          minLength:{
            value:5,
          message :"більше 2 символів",}
          })} />
      </label>
      <div style={{heigth:40,}}>{errors?.Name && <p >{ errors?.myInput?.message ? styles["error"] : "no-error" }{errors?.Name.message ||"Error!"}</p>}</div>
      
    <label> 
        emial:
         <input {...register('Email',{
          required:'заповніть поле',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
  
          })} />
      </label>


      <div>{errors?.Email && <p>{errors?.Email.message || 'Error!'}</p>}</div>
      <input type="Submit" disabled={!isValid}/>

      </form>
      


    </div>
  );
}

export default Login;
