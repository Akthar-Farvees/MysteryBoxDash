import React from 'react'
import { Card, Input, Form, InputNumber, Button } from 'antd'

const { TextArea } = Input;
const CreateMenuItem = () => {
    return (
        <Card title="Create New Item" style={{ margin: 20, }}>
            <Form layout='vertical' wrapperCol={{ span: 8 }} >
                <Form.Item label="Dish Name" required>
                    <Input placeholder='Enter dish name' />
                </Form.Item>
                <Form.Item label="Dish Description" required>
                    <TextArea rows={4} placeholder='Enter dish description' />
                </Form.Item>
                <Form.Item label="price ($)" required>
                    <InputNumber placeholder='Enter dish description' />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default CreateMenuItem
