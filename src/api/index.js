import { message } from "antd"

// 请求登陆接口
export const reqLogin = async (url, postData) => {
    try {
        const response = await fetch(`${url}`, {
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
}