import React ,{useEffect,useState} from 'react';
import {useHistory,Redirect} from "react-router-dom"
import validateInfo from './validateInfo';
import useForm from './useForm';
import styles from './Form.module.css';
import GoogleLogin from 'react-google-login';
import Navbar from "./Navbar"
import Nav from "./Nav"

const FormSignup = ({ submitForm }) => {
const history=useHistory();
const [errors, setErrors] = useState({});
const [dataIsCorrect,setDataIsCorrect]=useState(false);
  useEffect(()=>{
    if(localStorage.getItem("user-info")){
      let user=JSON.parse(localStorage.getItem("user-info"))
      const { id} = user;
      history.push("/Profile/"+id)
    }
  })
  const { handleChange, values } = useForm(
    submitForm
    // validate
  );
  async function handleSubmitsign (e) {
    e.preventDefault();
    setErrors(validateInfo(values))
    setDataIsCorrect(true);
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      let result = await fetch("https://boiling-shelf-43809.herokuapp.com/user/signup",{
          method:"POST",
          body:JSON.stringify(values),
          headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
          }
        })
        result= await result.json()
        console.warn("result",result);
        localStorage.setItem("user-info",JSON.stringify(result))
        let user=JSON.parse(localStorage.getItem("user-info"))
        const { id} = user;
         history.push("/Profile/"+id)
        
    }
    
  };
  
  
  const responseGoogle=(response)=>{
      console.log(response);
     console.log(response.profileObj);
  }
  return (
    <>
    {/* <Navbar/> */}
 <div className={styles.formcontentright}>
    {/* <Nav/> */}
      <form onSubmit={handleSubmitsign} className="form" noValidate>
        <h1>
         Create Account 
        </h1>
        <div className={styles.forminputs}>
          <label className={styles.formlabel}>Username</label>
          <input
            className={styles.forminput}
            type='text'
            name='name'
            placeholder='Enter your username'
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className={styles.forminputs}>
          <label className={styles.formlabel}>Email</label>
          <input
            className={styles.forminput}
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className={styles.forminputs}>
          <label className={styles.formlabel}>Password</label>
          <input
            className={styles.forminput}
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className={styles.forminputs}>
          <label className={styles.formlabel}>Confirm Password</label>
          <input
            className={styles.forminput}
            type='password'
            name='confirmPassword'
            placeholder='Confirm your password'
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <button className={styles.forminputbtn} type='submit'>
          Sign up
        </button>
       
        <h2><span>or</span></h2>
        <div className={styles.GoogleLogin}>
          
          <GoogleLogin
          clientId=""
          buttonText='Login'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          />

          
      </div>
      </form>
      
    </div>
    </>
   
  );
};

export default FormSignup;