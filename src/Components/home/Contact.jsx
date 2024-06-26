import React from 'react'
import { Button, Checkbox, Form, Input,  } from 'antd';


const { TextArea } = Input;
const ContactApp = () => {
  return (
    <div id='Contact' className="block  contactBlock">
        <div className="container fluid">
            <div className="titleHolder">
                <h2>Get in Touch</h2>
            </div>
            <Form
    // name="basic"
    // labelCol={{
    //    span: 8,
    //  }}
    //  wrapperCol={{
    //    span: 16,
    //  }}
    // style={{
    //   maxWidth: 600,
    // }}
    // initialValues={{
    //   remember: true,
    // }}
    // autoComplete="off"
  >
    <Form.Item
    //   label="Username"
      name="username"
     
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input placeholder='Username'/>
    </Form.Item>

    <Form.Item
    //   label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
        },
      ]}
    >
      <Input placeholder='Email Address' type='email' />
    </Form.Item>
    <Form.Item
    //   label="Telephone"
      name="telephone"
      rules={[
        {
          required: true,
          message: 'Please input your TelePhone!',
        },
      ]}
    >
      <Input placeholder='Telephone' type='number' />
    </Form.Item>
    <Form.Item
    //   label="Message"
      name="Message"
     
    >
      <Input placeholder='Message' type='text' />
    </Form.Item>
    <TextArea rows={4} placeholder='Message' />
    <Form.Item
      name="remember"
      valuePropName="checked"
    //   wrapperCol={{
    //     offset: 8,
    //     span: 16,
    //   }}
    >
      <Checkbox>I agree with terms and conditions.</Checkbox>
    </Form.Item>

    <Form.Item
    //   wrapperCol={{
    //     offset: 8,
    //     span: 16,
    //   }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
        </div>
    </div>
  )
}

export default ContactApp