

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../store/action/login.action';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import "../App.css"

const Index = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const body = { username, password };
    dispatch(userLogin(body));
    localStorage.getItem('token');
    if (username === 'kminchelle' && password === '0lelplR') {
      navigate('/box');
    } else {
      alert('No user profile found LogIn Now');
    }
  };

  const onFieldUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onFieldPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="centered-form">
      <div className="form-box">
        <h1 style={{ textAlign: "center" }}>Login Form</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={handleLogin} 

        >
          <div style={{ marginLeft: 150 }}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]
              }
              labelCol={{ span: 50 }}
              wrapperCol={{ span: 16 }}
            >
              <Input
                placeholder="Username"
                value={username}
                onChange={onFieldUsernameChange}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]
              }
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
            >
              <Input.Password
                placeholder="Password"
                value={password}
                onChange={onFieldPasswordChange}
              />
            </Form.Item>
            <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{
                width: 200,
                height: '50px',
              }}
            >
              Log in
            </Button>
          
     
      
    
          </Form.Item>
          </div>

          
        </Form>
      </div>
    </div>
  );
};

export default Index;
