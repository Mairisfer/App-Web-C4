import React from "react";
import { useParams } from 'react-router-dom';

function ClientPanel(props) {

    const { username } = useParams();
    
        return (<h1>Bienvenido a tu espacio exlusivo: {username}</h1>
        );
}
export default ClientPanel;
