import * as React from 'react';
import { View } from 'react-native';
import { Card, CardItem, Text, Body } from "native-base";
import styles from '../assets/styles/styles';

import Grooming from '../components/Grooming';


export default function GroomingScreen({ navigation, route }) {


    return (

                <Grooming navigation={navigation}></Grooming>

            );
}

