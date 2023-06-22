import React from 'react'
import { Card, Form, Input, Button } from 'antd'

const Settings = () => {
  return (
    <Card title="Settings" style={{ margin: 20, }}>
        <Form layout='vertical' wrapperCol={{span: 8}}>
            <Form.Item label="Restaurant Name" required>
                <Input placeholder='Enter restaurant name'/>
            </Form.Item>
            <Form.Item label="Restaurant Address" required></Form.Item>

            <Form.Item>
                <Button type='primary'>Submit</Button>
            </Form.Item>
            
        </Form>
    </Card>

  )
}

export default Settings
