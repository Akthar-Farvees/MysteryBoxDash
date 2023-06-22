import React from 'react'
import { Card, List, Divider, Button, Descriptions } from "antd";
import dishes from '../../assests/data/dishes.json'
import '../../index.css';
import { useParams } from 'react-router-dom';

const DetailedOrder = () => {
  const {id} = useParams();
  return (
    <Card title={`Order ${id}`} style={{ margin: 20 }}>
      <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
        <Descriptions.Item label={"Customer"}>Akthar Farvees</Descriptions.Item>
        <Descriptions.Item label={"Customer Address"}>414/3, Kariyappar Road, Akkaraipattu 06</Descriptions.Item>
      </Descriptions>
      <Divider />

      <List
        dataSource={dishes}
        renderItem={(disheItem) => (
          <List.Item >
            <div style={{ fontWeight: 'bold' }}>{disheItem.name} x{disheItem.quantity}</div>
            <div>${disheItem.price}</div>
          </List.Item>
        )}
      />
      <Divider />

      <div style={styles.totalSumContainer}>
        <h2>Total: </h2>
        <h2 style={styles.totalPrice}> $45.56</h2>
      </div>
      <Divider />

      <div style={styles.buttonsContainer}>
        <Button block type="danger" size="large" style={styles.button1} >Decline Order</Button>
        <Button block type="primary" size="large" style={styles.button2}>Accept Order</Button>
      </div>



      <Button block type="primary" size="large" style={styles.btnFinal}>Food is Done</Button>

    </Card>

  );
};

const styles = {
  totalSumContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  totalPrice: {
    marginLeft: 'auto',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 30,
  },
  button1: {
    marginRight: 20,
    marginLeft: 20,

  },
  button2: {
    marginLeft: 20,
    marginRight: 20,

  },
}


export default DetailedOrder;