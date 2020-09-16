import React, { Component } from 'react';
import { View , Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import { H3, Text, Card, CardItem, Button, Left, Right} from 'native-base';
import Carousel from 'react-native-snap-carousel';
import styles from '../assets/styles/styles';
import checkIcon from '../assets/images/check.png';
import { sliderWidth, sliderItemWidth , sliderItemHorizontalMargin,slideWidth} from '../assets/styles/base';
import SelectServiceInfo from '../components/SelectServiceInfo'



const GroomingCarousalList = ({item, infoIcon,showInfo,select}) => (
  
  <View style={styles.wrapper} >
    <View
      style={{
        width: slideWidth,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        }}>
            <TouchableOpacity onPress={()=>select(item)}>
           <View>
           <View style={(item.selected || (item.packageIds && item.packageIds.length>0)) ?styles.serviceBlock:''}>
              <Image source={{uri:item.icon}} style={{height: 119, width: 125}}/>
              <Text style={styles.plan}>{'INR '+item.price}</Text>
               {(item.selected || (item.packageIds && item.packageIds.length>0)) && <TouchableHighlight style={styles.checkclick}>
                   <Image source={checkIcon} style={{height: 20, width: 20}}/>
                  </TouchableHighlight>}
           </View>

            <View style={styles.blockWrappergService}>
                  <Text style={styles.serviceplan}>{item.name}</Text>
                  <TouchableOpacity onPress={()=>showInfo()}>
                      <Image source={infoIcon} style={{height: 20, width: 20}}/>
                  </TouchableOpacity>
                  
            </View>
          
          </View>
            </TouchableOpacity>
     
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
      console.log(this.props.data)
      this.setState( {
          data: this.props.data
      })
  }
    showInfo(){
        this.props.showInfo()
    }
    serviceSelected(item){

        this.props.itemSelected(item)
    }




  renderListComponent = ({ item }) => {
    return (<GroomingCarousalList item={item}  infoIcon={require('../assets/images/info.png')} showInfo={this.showInfo.bind(this)} select={this.serviceSelected.bind(this)} />)
  };

  render() {
    return (
      <View>
          <Carousel
          containerCustomStyle={{ backgroundColor: 'transparent' }}
          data={this.state.data}
          renderItem={this.renderListComponent}
          sliderWidth={1000}
          itemWidth={140}
          activeSlideAlignment={'start'}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
        />
          {this.state.info && <SelectServiceInfo></SelectServiceInfo>}
      </View>


    );
  }
}
