import React from 'react'
import { Layout, } from 'antd';
import HeaderApp from './Components/Common/Header';
import AppHome from './Components/views/Home';
// import { Footer } from 'antd/es/layout/layout';
import AppFooter from './Components/Common/Footer';
// import 'antd/dist/antd.css'
const { Header, Content,Footer  } = Layout;

const App = () => {
  return (
    
      <Layout className='mainLayout'>
        <Header >
          <HeaderApp />
        </Header>
        <Content>
          <AppHome />
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    
  )
}

export default App