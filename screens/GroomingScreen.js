import * as React from 'react';
import Grooming from '../components/Grooming';

import GroomingScheduled from '../components/GroomingScheduled';
import GroomingCompletePayment from '../components/GroomingCompletePayment';


export default function GroomingScreen({ navigation, route }) {


    return (

        <Grooming navigation={navigation}></Grooming>
        // <GroomingSelectService></GroomingSelectService>
        // <GroomingScheduled></GroomingScheduled>

    );
}

