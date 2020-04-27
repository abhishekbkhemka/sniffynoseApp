import React, { Component } from 'react';
import { View , Image, TouchableHighlight} from 'react-native';
import { H3, Text, Card, CardItem, Button, Left, Right} from 'native-base';
import Carousel from 'react-native-snap-carousel';
import styles from '../assets/styles/styles';
import checkIcon from '../assets/images/check.png';
import { sliderWidth, sliderItemWidth , sliderItemHorizontalMargin,slideWidth} from '../assets/styles/base';
import SelectServiceInfo from '../components/SelectServiceInfo'



const GroomingCarousalList = ({selected,name ,url, price, infoIcon,showInfo}) => (
  
  <View style={styles.wrapper}>
    <View
      style={{
        width: slideWidth,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        }}>
           <View>
           <View style={selected ?styles.serviceBlock:''}>
              <Image source={{uri:url}} style={{height: 119, width: 125}}/>
              <Text style={styles.plan}>{'INR '+price}</Text>
               {selected && <TouchableHighlight style={styles.checkclick}>
                   <Image source={checkIcon} style={{height: 20, width: 20}}/>
                  </TouchableHighlight>}
           </View>

            <View style={styles.blockWrappergService}>
                  <Text style={styles.serviceplan}>{name}</Text>
                  <TouchableHighlight onPress={()=>showInfo()}>
                      <Image source={infoIcon} style={{height: 20, width: 20}}/>
                  </TouchableHighlight>
                  
            </View>
          
          </View>
     
    </View>
  </View>
);
export default class SelectServiceCarousal extends Component {
    state = {data:[],info:false}
  constructor(props) {
      super(props)
      console.log(props)

  }

  componentDidMount(){
      this.setState( {
          data: this.props.data
      })
  }
    showInfo(){
        this.props.showInfo()
    }




  renderListComponent = ({ item }) => {
    return (<GroomingCarousalList selected={item.selected} name={item.name} url={item.icon} price={item.price} infoIcon={require('../assets/images/info.png')} showInfo={this.showInfo.bind(this)} />)
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
          {this.state.info && <SelectServiceInfo></SelectServiceInfo>}
      </View>


    );
  }
}
