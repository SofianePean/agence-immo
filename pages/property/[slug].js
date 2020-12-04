import React from 'react';
import api from 'auth/axios';
import Layout from 'components/layout';
import CardCarousel from 'components/cardCarousel'
import {
    MDBCard,
    MDBCardBody,
    MDBContainer,
    MDBCol,
    MDBRow
} from 'mdbreact'

const Property = ({property}) => {
    return(
        <>
        {
            property && (
                <Layout>
                <MDBContainer>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol md="9" lg="9">
                                    <CardCarousel property={property}/>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer>
                </Layout>
            )
        }
        </>

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