import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Layout } from 'antd'
import Header from '../../components/header'
import LeftNav from '../../components/left-nav'
import memoryUtils from '../../utils/memoryUtils'

import Home from '../home'
import Category from '../category'
import Product from '../product'
import User from '../user'
import Role from '../role'
import Pie from '../charts/pie'
import Line from '../charts/line'
import Bar from '../charts/bar'



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
                        <Content style={{ backgroundColor: 'white' }}><Switch>
                            <Switch>
                                <Route path='/home' component={Home} />
                                <Route path='/category' component={Category} /> <Route path='/product' component={Product} /> <Route path='/role' component={Role} />
                                <Route path='/user' component={User} />
                                <Route path='/charts/bar' component={Bar} /> <Route path='/charts/line' component={Line} /> <Route path='/charts/pie' component={Pie} /> <Redirect to='/home' />
                            </Switch></Switch></Content>
                        <Footer style={{ textAlign: 'center', color: 'gray' }}>这是前端小白Lruler的实战项目</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}