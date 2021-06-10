import { useState, useEffect } from 'react';


const useForm = (callback, validate,history) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword:''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   setErrors(validate(values));
  //   setIsSubmitting(true);
  // };

  // async function handleSubmitsign (e) {
  //   e.preventDefault();
  //   setErrors(validate(values));
  //   setIsSubmitting(true);
  //   console.warn(values);
  //   let result = await fetch("http://localhost:3004/register",{
  //     method:"POST",
  //     body:JSON.stringify(values),
  //     headers:{
  //       "Content-Type":"application/json",
  //       "Accept":"application/json"
  //     }
  //   })
  //   result= await result.json()
  //   console.warn("result",result);
  //   localStorage.setItem("user-info",JSON.stringify(result))
  //   history.push("/")
  // };

  // async function handleSubmitlogin (e) {
  //   e.preventDefault();
  //   setErrors(validate(values));
  //   setIsSubmitting(true);
  //   // console.warn(values.email,values.password);
  //   let email=values.email
  //  let password=values.password
  //   let item={email,password}
  //   console.warn(item);
  //   let result = await fetch("http://localhost:3004/login",{
  //     method:"POST",
  //     body:JSON.stringify(item),
  //     headers:{
  //       "Content-Type":"application/json",
  //       "Accept":"application/json"
  //     }
  //   })
  //   result= await result.json()
  //   console.warn("result",result);
  //   // const history=useHistory();
  //   localStorage.setItem("user-info",JSON.stringify(result))
  //   history.push("/")
  // }



  // useEffect(
  //   () => {
  //     if (Object.keys(errors).length === 0 && isSubmitting) {
  //       callback();
  //     }
  //   },
  //   [errors]
  // );

  return { handleChange,setErrors, values, errors };
};

export default useForm;