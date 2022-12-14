import React from "react";
import { useParams, userParams } from 'react-router-dom';

function Client(props) {

    const { username } = useParams();
    
        return (<h1>Bienvenido a tu espacio exlusivo: {username}</h1>
        );
}
export default Client;
