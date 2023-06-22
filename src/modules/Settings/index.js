import React from 'react'
import { Card, Form, Input, Button } from 'antd'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

const Settings = () => {
  return (
    <Card title="Settings" style={{ margin: 20, }}>
        <Form layout='vertical' wrapperCol={{span: 8}}>
            <Form.Item label="Restaurant Name" required>
                <Input placeholder='Enter restaurant name'/>
            </Form.Item>
            <Form.Item label="Restaurant Address" required>
              <GooglePlacesAutocomplete
              apiKey='AIzaSyAZ5ZypfUXy_LSA4Ul4DTfg9t9hGWzaMts'/>
            </Form.Item>

            <Form.Item>
                <Button type='primary'>Submit</Button>
            </Form.Item>
            
        </Form>
    </Card>

  )
}

export default Settings
