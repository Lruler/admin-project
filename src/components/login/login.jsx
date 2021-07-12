import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './login.less'
import logo from '../../assets/images/logo.png'

export default class Login extends Component {

  onFinish = async (values) => {



    const { username, password } = values;
    console.log('账号:', username);
    console.log('密码:', password);
    const postData = JSON.stringify({
      username,
      password
    })
    try {
      const response = await fetch(`/login`, {
        method: 'POST',
        body: postData,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()

      if (data.status === 0)
        message.success('登陆成功')
      else
        message.error(data.msg)
    }
    catch (error) {
      message.error(error)
    }

  };


  render() {
    return (
      <div className='login'>
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>React项目: 后台管理系统</h1>
        </header>

        <section className='login-content'>
          <h2>用户登陆</h2>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" autoComplete="off" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>


            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登陆
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}
