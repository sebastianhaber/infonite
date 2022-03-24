import React from 'react'
import { Center } from '../../styles/GlobalStyles'

export default function ErrorMessage() {
    return (
        <Center>
            <p><b>Wystąpił błąd.</b></p>
            <p>Nie można otrzymać danych z serwera. Odśwież stronę lub spróbuj za kilka minut.</p>
        </Center>
    )
}
