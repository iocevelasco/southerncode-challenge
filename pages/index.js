import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../src/components/Layout'
import { Row, Col } from 'antd';

// export async function getServerSideProps() {
//   //const res = await fetch(`https://.../data`)
//   //const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

const Home = () => {
  return (
    <Layout>
      <Row justify='center'>
        <Col col={12}>
          <p>home</p>
        </Col>
      </Row>
    </Layout>
  )
}

export default Home