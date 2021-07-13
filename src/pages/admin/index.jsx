import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Layout } from 'antd'
import Header from '../../components/header'
import LeftNav from '../../components/left-nav'

import memoryUtils from '../../utils/memoryUtils'

const { Footer, Sider, Content } = Layout;

export default class Admin extends Component {


    render() {
        const user = memoryUtils.user
        // 如果内存没有存储user ==> 当前没有登陆
        if (!user || !user._id) {
            // 自动跳转到登陆(在render()中)
            return <Redirect to='/login' />
        }
        return (
            <div>
                <Layout style={{ height: '100vh' }}>
                    <Sider>
                        <LeftNav />
                    </Sider>
                    <Layout>
                        <Header />
                        <Content style={{ backgroundColor: 'white' }}>Content</Content>
                        <Footer style={{ textAlign: 'center', color: 'gray' }}>这是前端小白Lruler的实战项目</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}