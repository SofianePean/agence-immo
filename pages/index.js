import Head from 'next/head';
import Layout from 'components/layout';
import Carousel from 'components/carousel';
import styles from '../styles/Home.module.css';
import api from 'auth/axios';
import PropertyVip from 'components/propertyVip';
import PropertySection from 'components/propertySection';
import Features from 'components/features';
import { MDBContainer } from 'mdbreact';

export default function Home({ propertiesVip, properties}) {
  return (
    <Layout footer>
      <Carousel />
      <MDBContainer>
        <PropertyVip properties={propertiesVip}/>
        <PropertySection properties={properties}/>
        <Features />
      </MDBContainer>
    </Layout>
  )
}

export const getStaticProps = async() => {
  const {data: propertiesVip} = await api.get("/api/properties/vip");
  const {data} = await api.get("/api/properties?limit=6");
  const properties = data.data

  return {
    props : {
      propertiesVip,
      properties
    }
  }
}
