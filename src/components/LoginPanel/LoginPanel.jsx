import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css'

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const response = await axios.post('https://restorant-backend.vercel.app/users/signin', values);
      setLoading(false);
      
      if (response.data.success) {
        message.success(response.data.message);
        
        localStorage.setItem('token', response.data.token);
        navigateBasedOnUserType(response.data.user.type);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoading(false);
      message.error('Login failed');
    }
  };

  const navigateBasedOnUserType = (userType) => {
    switch (userType) {
      case 'admin':
        navigate('/admin');
        break;
      case 'manager':
        navigate('/manager');
        break;
      case 'waiter':
        navigate('/waiter');
        break;
      case 'cook':
        navigate('/cook');
        break;
      default:
        navigate('/');
        break;
    }
  };

  return (
    <div className="login">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="fullname"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="fullname" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
