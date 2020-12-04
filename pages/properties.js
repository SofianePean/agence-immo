import React from 'react';
import Layout from 'components/layout'
import api from 'auth/axios'
import Card from 'components/card';


const Properties = ({properties}) => {
    console.log(properties)
    return(
        <Layout>
            <Card />
            {JSON.stringify(properties)}
        </Layout>
    )
}

export const getServerSideProps = async() => {
    const {data} = await api.get("/api/properties");
    // console.log('DATA !!!!', data)
    const properties = data.data
  
    return {
      props : {
        properties
      }
    }
  }

export default Properties;