// import React from 'react';
// import './login.css';
// import { useDispatch } from 'react-redux';
// import { userLogin } from '../../action/login.action';


// const Index = (props) => {

//   const dispatch = useDispatch();

//   // const [username, setUsername] = useState('');
//   // const [password, setPassword] = useState('');

//   const handleLogin = async (data) => {
//     console.log('data: ', data);
//     const { username, password } = data
//     const body = { username, password }
//     dispatch(userLogin(body))
//     if (userLogin) {
//       localStorage.setItem('token', data);
//       window.location.href = "/dashboard"
//     } else {
//       console.log("Wrong password or username");
//     }

//   };




//   // const onUser = (event) => {
//   //   setUsername(event.target.value);
//   // };
//   // const onPass = (event) => {
//   //   setPassword(event.target.value);
//   // };
//   return (
//     <>
//       <div class="background">
//         <div class="shape"></div>
//         <div class="shape"></div>
//       </div>
//       <form onSubmit={handleLogin}>
//         <h3>Login Here</h3>

//         <label for="username">Username</label>
//         <input type="username" placeholder="username" id="username" />

//         <label for="password">Password</label>
//         <input type="password" placeholder="Password" id="password" />

//         <button type='submit'>Log In</button>

//       </form>
//     </>

//   )
// }
// export default Index;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../action/login.action';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

const Index = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    const body = { username, password }
    dispatch(userLogin(body))
    localStorage.getItem('token');
    if (username === 'kminchelle' && password === '0lelplR') {
      navigate('/dashboard');

    } else {
      alert('No user profile found LogIn Now');
    }

  };
  // const handleLogin = () => {
  //   const body = { username, password };

  //   dispatch(userLogin(body.username, body.password));

  //   const token = localStorage.getItem('token');
  //   console.log('token: ', token);

  //   if (token) {
  //     navigate('/dashboard');
  //   } else {
  //     alert('No user profile found. Log in now or check your credentials.');
  //   }
  // };
  // const handleLogin = async () => {
  //   try {
  //     const response = await userLogin(username, password); 
  //     const token = response.token; 
  //     localStorage.setItem('token', token); 


  //     window.location.href = "/dashboard";
  //   } catch (error) {
  //     alert('Login failed. Please check your credentials.');
  //   }
  // };


  const onFieldUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const onFieldPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <h1>Login Form</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}

      >
        <Form.Item
          name="Username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input

            placeholder="Username"
            value={username}
            type="username"
            onChange={onFieldUsernameChange}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input

            type="password"
            placeholder="Password"
            onChange={onFieldPasswordChange}
            value={password}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={() => handleLogin()}
            style={{
              width: 200,
              height: '50px',
            }}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Index;

