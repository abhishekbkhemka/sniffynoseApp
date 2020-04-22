import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import styles from '../assets/styles/styles';
export default class AdBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
          images: [
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree", // Network image
                 // Local image
          ]
        };
        
      }
    render() {
       
        return (
           
                <SliderBox
                    images={this.state.images}
                    sliderBoxHeight={86}
                    autoplay
                    ImageComponentStyle={{borderRadius: 8, width: '90%', marginBottom: 15}}
                    paginationBoxStyle={{
                        position: "absolute",
                         padding: 0,
                        alignItems: "center",
                        alignSelf: "center",
                        justifyContent: "center",
                        paddingVertical: 20,
                        marginHorizontal: 0,
                      }}
                      dotStyle={{
                        width: 5,
                        height: 5,
                        borderRadius: 5,
                        marginHorizontal: 0,
                        padding: 0,
                        margin: 0,
                        backgroundColor: "rgba(128, 128, 128, 0.92)"
                      }}
                />
       
        )
    }
}
