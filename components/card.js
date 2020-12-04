import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import {priceFormatted} from './helpers';
import Link from 'next/link'

const Card = ({properties}) => {
  return (
    <>
    {
      properties && properties.map(property => (
        <MDBCard>
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="5">
          <Link href="/property/[slug]" as={`/property/${property.slug}`} passHref>
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="globalImg"
                src={property.pictures[0]}
                alt=""
              />
            </MDBView>
          </Link>
          </MDBCol>
          <MDBCol lg="7">
            <span className="globalColor">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="university" className="pr-2" />
                {property.category.name}
              </h6>
            </span>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>{property.title}</strong>
            </h3>
            <p>
              {property.description.slice(0, 150)}
            </p>
            <p className="globalColor">
              <strong>
                {priceFormatted(property.price)}
              </strong>
            </p>
            <p className="globalColor">
              <MDBIcon icon="city" className="mr-1"/>
              <strong >
                {property.city}
              </strong>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
      ))
    }
    
    </>
  );
}

export default Card;