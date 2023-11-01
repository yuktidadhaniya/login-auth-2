// import React, { useState } from 'react';
// import './login.css';
// import { useDispatch } from 'react-redux';
// import { userLogin } from '../../action/login.action';
// import { useNavigate } from 'react-router-dom';

// const Index = (props) => {

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     const body = { username, password }
//     dispatch(userLogin(body))
//     localStorage.getItem('token');
//     if (username === 'kminchelle' && password === '0lelplR') {
//       navigate('/dashboard');

//     } else {
//       alert('No user profile found LogIn Now');
//     }
//   }
//   // const handleLogin = async (data) => {
//   //   const { username, password } = data;
//   //   const body = { username, password };

//   //   try {
//   //     // Dispatch the login action and wait for the response
//   //     const response = await dispatch(userLogin(body));

//   //     if (response && response.token) {
//   //       // Successful login, set the token in localStorage
//   //       localStorage.setItem('token', response.token);
//   //       // Redirect to the dashboard
//   //       window.location.href = "/dashboard";
//   //     } else {
//   //       console.log("Wrong password or username");
//   //     }
//   //   } catch (error) {
//   //     console.log("Error occurred during login:", error);
//   //   }
//   // };




//   const onUser = (event) => {
//     setUsername(event.target.value);
//   };
//   const onPass = (event) => {
//     setPassword(event.target.value);
//   };
//   return (
//     <>
//       <div class="content">
//         <div class="text">
//           Login Form
//         </div>
//         <form action="#">
//           <div class="field">
//             <input type="text" onChange={onUser} required />
//             <span class="fas fa-user"></span>
//             <label>username</label>
//           </div>
//           <div class="field">
//             <input type="password" onChange={onPass} required />
//             <span class="fas fa-lock"></span>
//             <label>Password</label>
//           </div>

//           <button onClick={handleLogin}>Sign in</button>

//         </form>
//       </div>
//     </>

//   )
// }
// export default Index;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../store/action/login.action';
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

