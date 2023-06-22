import DetailedOrder from "./modules/DetailedOrder";
import Orders from "./modules/Orders";
import { Route, Routes } from "react-router-dom";
import { Layout, Image, Space } from "antd";
import imageSrc from './assests/images/MB Logo.png';


const { Sider, Content, Footer } = Layout;

function App() {
  return (

    <Layout>
      <Sider style={{ height: '100vh', backgroundColor: "white" }}>
        <Image src={imageSrc} preview={false} />
      </Sider>
      <Layout>
        <Content style={{  }}>
          <Routes>
            <Route path="" element={<Orders />} />
            <Route path="order/:id" element={<DetailedOrder />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center'}}>
          &copy; 2023 Mystery Box. All rights reserved.<br />
          Designed and developed by <a href="https://www.linkedin.com/in/aktharfarvees/" style={{
            color: 'black',
            fontWeight: "600",
            padding: 3,
            borderRadius: 3,
          }}>Akthar Farvees</a>.
        </Footer>
      </Layout>
    </Layout>


  );
}



export default App;
