import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import service from '../../api/service'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import './index.less'
import logo from '../../assets/images/logo.png'

export default class Login extends Component {

  onFinish = async (values) => {
    const { username, password } = values;

    const res = await service.reqLogin(username, password)
    if (res.status === 0) {
      message.success('登陆成功')

      const user = res.data
      memoryUtils.user = user // 保存在内存中
      storageUtils.saveUser(user) // 保存到local中

      this.props.history.replace('/')
    }

    else
      message.error(res.msg)

  };



  render() {



    const user = memoryUtils.user
    if (user && user._id) {
      return <Redirect to='/' />
    }

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
                  message: '必须输入用户名',
                },
                { min: 4, message: '用户名至少4位' },
                { max: 12, message: '用户名最多12位' },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" autoComplete="off" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '必须输入用户名',
                },
                { min: 4, message: '用户名至少4位' },
                { max: 12, message: '用户名最多12位' },
                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
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
