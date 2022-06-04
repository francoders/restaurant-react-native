import React, { useState, useEffect } from 'react'
import { UserGuestScreen } from './UserGuestScreen';
import { UserLoggedScreen } from './UserLoggedScreen';
import { LoadingModal } from '../../components';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function AccountScreen() {
    const [hasLogged, setHasLogged] = useState(null)

    {/* Se ejecuta cada vez que se monta el componente.
     Se ejecuta cada vez que el estado sea modificado. */}

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setHasLogged(user ? true : false);
        })
    }, [])

    if (hasLogged === null) {
        return <LoadingModal show text='Cargando' />
    }

    return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />
}