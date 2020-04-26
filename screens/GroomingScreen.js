import * as React from 'react';
import Grooming from '../components/Grooming';
import GroomingSelectService from '../components/GroomingSelectService';
import GroomingScheduled from '../components/GroomingScheduled';


export default function GroomingScreen({ navigation, route }) {


    return (

        // <Grooming navigation={navigation}></Grooming>
        // <GroomingSelectService></GroomingSelectService>
        <GroomingScheduled></GroomingScheduled>

    );
}

