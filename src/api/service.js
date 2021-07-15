import { message } from "antd"


const Base = '';

// 封装fetch
const Fetch = async (url, data = {}, method = 'GET') => {

    data = JSON.stringify(data)

    return new Promise((reslove, reject) => {

        let promise;

        if (method === 'GET') {
            promise = fetch(url, {
                method: "GET",
                body: data,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }

        else if (method === 'POST') {
            promise = fetch(url, {
                method: "POST",
                body: data,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }

        promise.then(response => {
            reslove(response.json())
        }).catch(error => {
            message.error('请求出错:' + error.message)
        })

    })
}


// 接口对象

const service = {
    // Login

    reqLogin(username, password) { return Fetch(Base + '/login', { username, password }, 'POST') },


    // 获取分类
    reqCategories(parentId) { return Fetch(Base + '/manage/category/list', { parentId }) },


    // 添加分类
    reqAddCategory(categoryName, parentId) { return Fetch(Base + '/manage/category/add', { categoryName, parentId }, 'POST') },

    // 更新分类
    reqUpdateCategory({ categoryId, categoryName }) { return Fetch(Base + '/manage/category/update', { categoryId, categoryName }, 'POST') },

    // 获取一个分类
    reqCategory(categoryId) { return Fetch(Base + '/manage/category/info', { categoryId }) }

}


export default service