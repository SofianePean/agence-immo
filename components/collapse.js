import React, { useState } from "react";
import { MDBCollapse, MDBIcon } from "mdbreact";

const Collapse = ({titre, children}) =>  {

 const toggleCollapse = collapseID => () => {
    setcollapseID(prevState => (
        collapseID = prevState  !== collapseID ? collapseID : ""
    ))
}

const styles = {
    collapse: {
        padding: 10,
        fontSize: 20,
        backgroundColor: "#e0e0e0",
        marginBottom: 10
    },
    icon: {
        padding: 10,
    }
}

const [collapseID, setcollapseID] = useState("")

  return (
      <div>
        <div style={styles.collapse} onClick={toggleCollapse("basicCollapse")}>
            {titre}
            {
                collapseID && <MDBIcon icon="angle-down" style={styles.icon} className="float-right"/>
            }
            {
                !collapseID && <MDBIcon icon="angle-up" style={styles.icon} className="float-right"/>
            }
        </div>
        <MDBCollapse id="basicCollapse" isOpen={collapseID}>
         {children}
        </MDBCollapse>
      </div>
    );
}

export default Collapse;