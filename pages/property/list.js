import React from 'react';
import {
    MDBDataTableV5,
    MDBIcon,
    MDBView
} from 'mdbreact';
import {AdminRoutes} from 'auth/adminRoutes';
import Layout from 'components/layout';
import api from 'auth/axios';
import useSWR from 'swr';
import Moment from 'react-moment';
import {priceFormatted} from 'components/helpers';

const fetcher = url => api.get(url).then(res => res.data)

const PropertyList = () => {
    const {data} = useSWR("/api/properties?limit=50", fetcher);
    const properties = data && data.data;
    const dataTable = {
        columns: [
            {
                label: "Titre",
                field: "title",
                sort: 'asc'
            },
            {
                label: "Description",
                field: "description",
                sort: 'asc'
            }
        ],
        rows: properties && properties.map(property => {
            return{
                title: property.title,
                description: property.description.slice(0, 200)
            }
        })
    }

    return(
        <Layout>
            <MDBDataTableV5
            data={dataTable}
            entries={5}
            pagesAmount={4}
            paginTop
            searchTop
            searchBottom={false}
            />
        </Layout>
    )
}

export default AdminRoutes(PropertyList);