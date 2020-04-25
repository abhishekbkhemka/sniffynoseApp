import React, { Component } from 'react';
import { View , Image, TouchableHighlight} from 'react-native';
import { H3, Text, Card, CardItem, Button, Left, Right} from 'native-base';
import Carousel from 'react-native-snap-carousel';
import styles from '../assets/styles/styles';
import { sliderWidth, sliderItemWidth , sliderItemHorizontalMargin,slideWidth} from '../assets/styles/base';


const GroomingCarousalList = ({serviceplan ,url, plan, info}) => (
  
  <View style={styles.wrapper}>
    <View
      style={{
        width: slideWidth,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        }}>
           <View style={{}}>
           <View>
              <Image source={url} style={{height: 119, width: 125}}/>
              <Text style={styles.plan}>{plan}</Text>
           </View>

            <View style={styles.blockWrappergService}>
                  <Text style={styles.serviceplan}>{serviceplan}</Text>
                  <TouchableHighlight>
                      <Image source={info} style={{height: 20, width: 20}}/> 
                  </TouchableHighlight>
                  
            </View>
          
          </View>
     
    </View>
  </View>
);
export default class SelectServiceCarousal extends Component {
  constructor(props) {
    super(props)
                    }


  state = {
    data: [
      {
        serviceplan: "Basic",
        url:require('../assets/images/service-1.png'),
        plan:"INR 499",
        info:require('../assets/images/info.png'),
      },
      {
        serviceplan: 'Intermediate',
        url:require('../assets/images/service-2.png'),
        plan:"INR 799",
        info:require('../assets/images/info.png'),
      },
      {
        serviceplan: 'Advanced',
        url:require('../assets/images/service-1.png'),
        plan:"INR 999",
        info:require('../assets/images/info.png'),
      },
      {
        serviceplan: 'Basic',
        url:require('../assets/images/service-2.png'),
        plan:"INR 499",
        info:require('../assets/images/info.png'),
      },
      {
        serviceplan: 'Intermediate',
        url:require('../assets/images/service-2.png'),
        plan:"INR 799",
        info:require('../assets/images/info.png'),
      },

    ],
  }


  renderListComponent = ({ item }) => {
    return (<GroomingCarousalList serviceplan={item.serviceplan} url={item.url} plan={item.plan} info={item.info} />)
  };

  render() {
    return (
      <View>
        <Carousel
          containerCustomStyle={{ backgroundColor: 'transparent' }}
          data={this.state.data}
          renderItem={this.renderListComponent}
          sliderWidth={sliderWidth}
          itemWidth={sliderItemWidth}
          activeSlideAlignment={'start'}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
        />
      </View>


    );
  }
}
