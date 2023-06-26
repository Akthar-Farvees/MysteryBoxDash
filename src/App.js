import AppRoutes from '../src/Components/AppRoutes/index'
import { Layout, Image } from "antd";
import imageSrc from './assests/images/MB Logo.png';
import SideMenu from '../src/Components/SideMenu/index';



const { Sider, Content, Footer } = Layout;

function App() {
  return (

    <Layout>
      <Sider style={{ height: '100vh', backgroundColor: "white" }}>
        <Image src={imageSrc} preview={false} width={'100%'}/>

        <SideMenu />
      </Sider>
      <Layout>
        <Content style={{  }}>
         <AppRoutes/>
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
