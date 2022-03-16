import { Layout } from 'antd';
import MetaHead from '../CEO';
const { Header, Footer, Sider, Content } = Layout;

const LayoutComponent = ({children, title}) => {
  return (
    <>
    <MetaHead/>
    <Layout>
      <Header>Header</Header>
        {children}
      <Footer>Footer</Footer>
    </Layout>
    </>
  )
}

export default LayoutComponent

