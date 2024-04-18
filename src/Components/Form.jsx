import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true); // Set isSubmitted state to true on form submission
  };

  return (
    <div className="form-container">
      {isSubmitted && (
        <div className="success-message">
          Registration successful!
        </div>
      )}
      <form className="card" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>First Name:</label>
          <input {...register("firstName", { required: true })} />
          {errors.firstName && <p className="error">First Name is required</p>}
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input {...register("lastName", { required: true })} />
          {errors.lastName && <p className="error">Last Name is required</p>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <p className="error">Invalid email</p>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input {...register("password", { required: true, minLength: 5, maxLength: 20 })} type="password" />
          {errors.password && errors.password.type === "required" && <p className="error">Password is required</p>}
          {errors.password && errors.password.type === "minLength" && <p className="error">Password must be more than 4 characters</p>}
          {errors.password && errors.password.type === "maxLength" && <p className="error">Password cannot be more than 20 characters</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyForm;