import React from 'react'
import { Form, Input, Button, Checkbox, Card, Image } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"
import Logo from "../../assets/antd.png"
export default function Login() {
    return (
        <Card id="auth-card">
            <Image
                className="mb3 mt2"
                width={100}
                src={Logo}
                preview={false}
            />
            <Form
                name="normal_login"
                className="auth-form"
                initialValues={{ remember: true }}
                onFinish={(values) => console.log(values)}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                <Form.Item className="mt2">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Link className="login-form-forgot" to="/auth/login">
                        Forgot password
                    </Link>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}
