import React from 'react';
import api from 'auth/axios';
import Layout from 'components/layout'

const Property = ({property}) => {
    return(
        <Layout>
        {JSON.stringify(property)}
        </Layout>
    )
}

export const getStaticPaths = async() => {
    const {data} = await api.get("/api/properties?limit=100")
    const properties = data.data
    const paths = properties.map(property => ({
        params: {slug: property.slug}
    }))

    return {paths, fallback: true}
}

export const getStaticProps = async({params}) => {
    const {slug} = params;
    const {data: property} = await api.get(`/api/property/${slug}`)

    return {
        props : {
            property
        }
    }
}

export default Property;