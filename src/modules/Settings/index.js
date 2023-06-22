import React, {useState} from 'react' 
import { Card, Form, Input, Button } from 'antd'
import GooglePlacesAutocomplete, {
  geocodeByAddress, 
  getLatLng} 
  from 'react-google-places-autocomplete'

const Settings = () => {
  const [address, setAddress] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  const getAddressLatLng = async (address) => {
    setAddress(address);

    const GeocodeByAddress = await geocodeByAddress(address.label);
    const LatLng = await getLatLng(GeocodeByAddress[0]);
    console.log(LatLng );
    setCoordinates(LatLng);
  }

  return (
    <Card title="Settings" style={{ margin: 20, }}>
        <Form layout='vertical' wrapperCol={{span: 8}}>
            <Form.Item label="Restaurant Name" required>
                <Input placeholder='Enter restaurant name'/>
            </Form.Item>
            <Form.Item label="Restaurant Address" required>
              <GooglePlacesAutocomplete
              apiKey='AIzaSyAZ5ZypfUXy_LSA4Ul4DTfg9t9hGWzaMts'
              selectProps={{
                value: address,
                onChange: getAddressLatLng
              }}
              />
            </Form.Item>

            <Form.Item>
                <Button type='primary'>Submit</Button>
            </Form.Item>
            <span>Lattitude: {coordinates?.lat} - Logitude: {coordinates?.lng}</span>
        </Form>
    </Card>

  )
}

export default Settings
