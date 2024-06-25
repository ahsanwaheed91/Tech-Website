import React from 'react'
import { Layout,} from 'antd';
import HeaderApp from './Components/Common/Header';
import AppHome from './Components/views/Home';
// import 'antd/dist/antd.css'
const { Header,Content  } = Layout;

const App = () => {
  return (
    <>
      <Layout className='mainLayout'>
        <Header >
          <HeaderApp/>
        </Header>
<Content>
<AppHome/>
</Content>
      </Layout>
    </>
  )
}

export default App