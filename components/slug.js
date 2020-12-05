import Property from 'pages/property/[slug]';
import React from 'react';
import Collapse from 'components/collapse';
import {priceFormatted} from './helpers';
import Moment from "react-moment"

const Slug = ({property}) => {
    return(
        <div className="mt-4">
            <h1 className="globalColor">{property.title}</h1>
            <hr className="my-3"/>
            <div>Trouvé dans {property.category.name}</div>
            <div>{property.adress}</div>
            <hr className="my-2"/>
            <div className="description mt-4 mb-3">
                {property.description}
            </div>
            <Collapse titre="Adresse de la propriété">
                <section className="mt-3 pl-3 mb-2">
                    <div>
                        <span className="font-weight-bolder">Ville</span> : {property.city}
                    </div>

                    <div>
                        <span className="font-weight-bolder">Adresse</span> : {property.address}
                    </div>

                    <div>
                        <span className="font-weight-bolder">Région</span> : Monde
                    </div>
                </section>
            </Collapse>

            <Collapse titre="Details de la propriété">
                <section className="mt-3  pl-3">
                    <div>
                        <span className="font-weight-bolder">Surface</span> : {property.surface}
                    </div>

                    <div>
                        <span className="font-weight-bolder">Prix</span> : {priceFormatted(property.price)}
                    </div>

                    <div>
                        <span className="font-weight-bolder">Chambre(s)</span> : {property.bedrooms}
                    </div>

                    <div>
                        <span className="font-weight-bolder">Catégorie</span> : {property.category.name}
                    </div>

                    <div>
                        <span className="font-weight-bolder">Date de création</span> : 
                        <Moment format="DD/MM/YYYY à hh:mm:ss">{property.createdAt}</Moment>
                    </div>
                </section>
            </Collapse>
            <style jsx>
                {
                    `
                    .description {
                        white-space: pre-line;
                    }
                    `
                }
            </style>
        </div>
    )
}

export default Slug;