import * as React from 'react';

import Grooming from '../components/Grooming';
import GroomingSelectService from '../components/GroomingSelectService';


export default function GroomingScreen({ navigation, route }) {


    return (

        // <Grooming navigation={navigation}></Grooming>
        <GroomingSelectService></GroomingSelectService>

    );
}

