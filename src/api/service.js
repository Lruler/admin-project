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

    reqLogin(username, password) { return Fetch(Base + '/login', { username, password }, 'POST') }




}


export default service