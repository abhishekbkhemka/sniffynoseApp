import {StyleSheet} from 'react-native';
import {colors, fonts, padding, dimensions} from './base'
import { AuthSession } from 'expo';
export default StyleSheet.create({

    
    container: {
        width: dimensions.fullWidth,
        height: dimensions.fullHeight,
        backgroundColor : colors.bg,
      },

      wrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
      },

      commonWrapper:{
        flex:1,
         justifyContent: 'flex-end' , 
         backgroundColor:'#f6f6ff',
      },

      heightExceptFooter:{
        marginBottom: 90,
      },

      header:{
       backgroundColor:'#222ba8',
       borderBottomRightRadius:50,
       borderBottomLeftRadius:50,
       height:65,
      },
      headetext:{
          color:'#fff',
          fontSize:16,
          paddingTop:17,
          paddingLeft:17,
           width:'100%'
         },

         headernotification:{
            position:'absolute',
            textAlign:'center',
             right: 30,
             paddingTop:4,
             top:16,
              width:30,
              height:30,
              backgroundColor:'#fff',
              fontWeight:'bold',
              borderRadius:30,
              color:'#000'
         },
      
      Wrappercontainer:{
        width: dimensions.fullWidth,
        height: dimensions.fullHeight,
        // backgroundColor : colors.bg,
        backgroundColor:'#f6f6ff',
        paddingTop:padding.xl,
        paddingBottom:padding.xl,
      },
      LogoWrapper:{
        width: dimensions.fullWidth,
        justifyContent: 'center',
        alignItems: 'center',     
        },

       Loginlogo:{
        width: 77,
        height: 61,
     },

     logosplash:{
      width:106,
      height:84,
     },
     splashwrapper:{
      flex:1, width: dimensions.fullWidth,
      height: dimensions.fullHeight, backgroundColor:'#f7d82f',
     },

      centerBlock: {
        width:'100%',
        height:'100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',     
     },

     logo:{
        width: 107,
        height: 85,
     },

     absoluteFillObject:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
     },
     Imagebg:{
        resizeMode: 'cover',
        flex:1,
        width: dimensions.fullWidth,
        height: dimensions.fullHeight,
        position:'relative',
        
     },
     
     ImageUploaded:{
      width: 125,
      height: 119,
      borderRadius:10,
      position:'absolute',
     },

     footerbtn: {
      width: dimensions.fullWidth - 40,
      flex:1,
      position: 'absolute', 
      bottom: 0, 
    },
     bottomView: {
        width: dimensions.fullWidth - 40,
        flex:1,
       justifyContent: 'center',
        alignItems: 'center',
        marginBottom:'5%',
         marginLeft:20,
        marginRight:20,
        position: 'absolute', 
         bottom: 70, 
      },

      bottomViewModal: {
        width: dimensions.fullWidth - 40,
        flex:1,
       justifyContent: 'center',
        alignItems: 'center',
        marginBottom:'5%',
         marginLeft:20,
        marginRight:20,
        position: 'absolute', 
        bottom: 10, 
      },

      containerCalendar:{
        flex:1,
        justifyContent: 'flex-end',
         alignItems: 'center',
        position:'absolute',
        bottom:100,
        left:20,
      },
      calendar:{
        width: dimensions.fullWidth - 40,
        borderRadius:6,
        marginBottom: 20,
        
      },

      formWrapper:{
        width:"100%",
        backgroundColor: '#ffffff',
        padding:20,
        borderRadius: 8,
        marginBottom:11,
      },
      FacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#395599',
        borderWidth: 1,
        borderColor: '#395599',
        height: 47,
        width: dimensions.fullWidth - 90,
        borderRadius: 38,
        padding: 10,
        marginBottom:18,
        marginLeft:7,
      },

      GoogleStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4181ef',
        borderWidth: 1,
        borderColor: '#4181ef',
        height: 47,
        width: dimensions.fullWidth - 90,
        borderRadius: 38,
        padding: 10,
        marginBottom:18,
        marginLeft:7,
      },

      PhoneStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#231f20',
        height: 47,
        width: dimensions.fullWidth - 90,
        borderRadius: 38,
        padding: 10,
        marginLeft:7,
       },
      ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 16,
        width: 16,
        resizeMode: 'stretch',
      },
      TextStyle: {
        color: '#fff',
        fontSize:16,
        marginBottom: 4,
        marginRight: 20,
      },
      TextStylephone: {
        color: '#231f20',
        fontSize:16,
        marginBottom: 4,
        marginRight: 20,
      },

     
      HeadingText:{
        width:'100%',
        fontSize:fonts.md,
        color:'#231f20',
        marginBottom:22,
        paddingTop:10,
      },

      HeadingBlock:{
        width:'100%',
        fontSize:fonts.md,
        textAlign:'left',
        color:'#231f20',
        marginBottom:10,
        paddingTop:0,
        flex:1,
      },

      ButtonWrapper:{
        width:"100%",
      },
      fullwidth:{
          width:'100%',
      },

      paddingtopbottomSpacing:{
        paddingTop:18,
        paddingBottom:18,
      },
      buttonprimaryWrapper:{
          width:dimensions.fullWidth - 40,
          paddingLeft:15,
        paddingRight:10,
        marginBottom:20,
          
      },
      buttonprimarybtn:{
        width:'96%',
        
       
      },
      
         primarybtn:{
            width:"100%",
            backgroundColor: colors.primary,
            borderWidth: 0,
            borderRadius: 38,
            justifyContent:'center',
            alignItems:'center',
         },


         confirmbtn:{
          width:"100%",
          backgroundColor: colors.error,
          borderWidth: 0,
          borderRadius: 38,
          justifyContent:'center',
          alignItems:'center',
       },
       errorbtn:{
        width:"100%",
        backgroundColor: colors.error,
        borderWidth: 0,
        borderRadius: 38,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:15,
       },

       ErrorBlockText: {
        color:'#ffffff',
        fontSize:16,
        padding:5,
       },
         secondarybtn:{
            backgroundColor: 'rgba(35, 31, 32, 0.7)',
            borderWidth: 0,
            borderRadius: 38,
            width: dimensions.fullWidth - 60,
            marginLeft:18,
            marginRight:18,
            marginTop:10,
            justifyContent:'center',
            alignItems:'center',
         },

         transparentbtnwborder:{
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor:'#d3d3d3',
          borderRadius: 38,
          width: dimensions.fullWidth - 40,
          marginLeft:18,
          marginRight:18,
          marginTop:10,
          paddingTop:8,
          paddingBottom:8,
          justifyContent:'flex-start',
          alignItems:'center',
         },
         disabledbtn:{
          width:"100%",
          backgroundColor: colors.disabled,
          borderWidth: 0,
          borderRadius: 38,
          justifyContent:'center',
          alignItems:'center',
       },
       gobacktext:{
          textAlign:'left',
          width:'100%',
          paddingLeft:25,
          fontSize:20,
       },

       primaryborderedbtn:{
        width:"100%",
         borderRadius: 38,
         height:50,
         borderWidth:1,
         borderColor:'#222ba8',
         backgroundColor:colors.white,
         justifyContent:'center',
         alignItems:'center',
       },

       removeborderedbtn:{
        width:"100%",
        borderRadius: 38,
        height:50,
        borderWidth:1,
        borderColor:'rgba(255, 77, 121, 0.51)',
        backgroundColor:colors.white,
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
      },

      colorPrimarybtn:{
        color: colors.black,
        textTransform:'capitalize',
        fontSize:fonts.sm,
        },

         colorSecondarybtn:{
          color: colors.white,
          textTransform:'capitalize',
          fontSize:fonts.sm,
       },

       colorbtnrecommended:{
        color: colors.white,
        fontSize:fonts.sm - 3,
       },

       colorPrimarybordertext:{
            color: colors.bluetext,
            textTransform:'capitalize',
            fontSize:fonts.sm,
         },

         colorRemoveborderedtext:{
          color: colors.error,
          textTransform:'capitalize',
          fontSize:fonts.sm,
       },
        
       addnewphotobg:{
        flex:1, 
        justifyContent: 'flex-end' , 
        backgroundColor:'rgba(35, 31, 32, 0.9)',
       },

       confirmdetailtext:{
        fontSize:fonts.sm,
        paddingTop:20,
        paddingBottom:48,
        color:'#8d8d8d',
       },
       headingscheduleText:{
        color:'#231f20',
        fontSize: 20,
        lineHeight:28,
       },

       paradetailtext:{
        fontSize:fonts.sm,
        paddingBottom:20,
        color:'#8d8d8d',
       },

        inputfiledLabel:{
          width: '100%',
          color:'#a9a9b3',
          fontSize:16,
          paddingLeft:1,
        },
        cardWrapper:{
          borderRadius:10,
          flexDirection:"column",
          flex:1,
          width:'100%',
        },
        loginHeading:{
          fontSize:20,
          lineHeight:28,
          paddingLeft:10,
        },

        headingWrapper: {
          width:'100%',
          flex:1,
        },
        headingMain:{
          width:'100%',
          fontSize:20,
          lineHeight:28,
          paddingLeft:10,
          textAlign:'left',
        },
          inputBLock:{
              borderBottomWidth:2,
              marginBottom:padding.sm,
          },
          
          spacingBottom:{
            marginBottom:padding.xl,
          },

          spacingBottommd:{
            marginBottom:padding.md,
          },
          DashboardWrapper:{
            width:dimensions.fullWidth,
            height:dimensions.fullHeight,
             backgroundColor:'#f6f6ff',
            flex:1,
            justifyContent:'flex-end',
          },
          scrollViewStyle: {
            bottom: 0,
            left: 0,
            right: 0,
            paddingTop: 60
        },

        homeView: {
          alignItems: 'center',
          justifyContent: 'center'
      },
          footerWrapper:{
            width:dimensions.fullWidth,
            position:'absolute',
            bottom:0,
            textAlign:'center',
            backgroundColor:'transparent',
          },

          footerWrapperGrid:{
            paddingLeft:20,
            paddingRight:20,
            width:dimensions.fullWidth - 40,
            marginBottom: 70,
            position:'relative',
          },

          SelectPetWrapperGrid:{
            paddingLeft:20,
            paddingRight:20,
            width:dimensions.fullWidth - 40,
            marginBottom: 100,
            position:'relative',
          },

          HeadingDashboard:{
            fontSize:fonts.md,
            marginBottom:padding.md - 5,
            },

          HomeIcon:{
            width:20,
            height:19,
            borderRadius:0,
            marginBottom:padding.sm,
          },

          serviceicon:{
            width:18,
            height:20,
            borderRadius:0,
            marginBottom:padding.sm,
          },

          imageGridDashboard:{
            width:'100%',
            height:119,
          },

          gridRowDashboard:{
            marginTop:padding.md,
          },

          gridColDashboard:{
            paddingRight:padding.md - 4,
          },

          textGrid:{
            paddingTop:padding.sm + 2,
            fontSize:fonts.sm,
            textAlign:'center',
          },

          logofooter:{
              width:33,
              height:26,
              borderRadius:1,
          },

          rightMenuBarBlock:{
            flex:1,
            width:100,
            alignItems:'flex-end',
            justifyContent:'flex-end',
            flexDirection:"row",
          },
          notifyImage:{
            width:17,
            height:20,
            borderRadius:1
          },
          searchImage:{
            width:20,
            height:20,
            borderRadius:1
          },

          sidenotifyspacing:{
              position:'absolute',
              right:50,
              bottom:0
          }, 

          menuImage:{
            width: 20,
            height: 12,
            borderRadius:1,
            
          },
          MenuIconOpen:{
            width: 61,
            height: 50,
            borderTopLeftRadius: 40,
            borderBottomLeftRadius: 40,
            backgroundColor:'#f7d82f',
            justifyContent:'center',
            alignItems:'center',
            zIndex:99,
            position:'relative',
          },
          
          IconBottomPosition:{
            width: 61,
            height: 50,
            justifyContent:'center',
            alignItems:'center',
          },

          LeftPanel:{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 20,
            backgroundColor:'#f7d82f',
            height:400,
            width:60,
            justifyContent:'space-between',
            alignItems:'center',
            position:'absolute',
            zIndex:999,
            bottom:5,
            left: 'auto',
            paddingTop:10,
            paddingBottom:10,
            },

         ImageMenuIcons:{
           width:20, 
           height:20,
           margin:10,
         },

         ImageMenulastIcons:{
          width:20, 
          height:13,
          margin:10,
        },
        ScheduleBlock:{
          top:10,
          width:dimensions.fullWidth - 20,
        },
        serviceBlock:{
          borderWidth:1, 
          borderColor:'#000',
           borderRadius:10,
           width:127
        },
        UpcomingSchedule:{
          backgroundColor:'#f7d82f',
          width:'100%',
          height:67,
          flex:1,
          borderBottomLeftRadius:40,
          borderBottomRightRadius:40,
        },
        borderbtnSecondary:{
          borderWidth:1,
          borderColor: 'rgba(255, 255, 255, 0.4)',
        },
        textUpcoming:{
          fontSize:15,
        },

        badge:{
          width:29,
          height:29,
          backgroundColor:'#231f20',
          borderRadius:50,
          color:'#ffffff',
          alignItems:'center',
          justifyContent:'center',
          textAlign:'center',
        },

        gridColaddvaccination:{
          width:150,
          marginBottom:30,

        },

        imageGridaddvaccination:{
          width: 125,
          height: 130,
        },
        headerskip:{
          fontSize:fonts.sm,
          color:colors.black,
          paddingTop: padding.sm - 5,
        },
        ImagebgVaccination:{
          width:dimensions.fullWidth,
          height:dimensions.fullHeight,
          flex: 1,
          backgroundColor:'transparent',
          justifyContent: 'center',
          alignItems: 'center',
          top:0,
          position:'absolute',
        },
        input: {
          width: 300,
          height: 40,
          borderWidth: 1,
          borderColor: 'red'
      },
      topView: {
          height: 400,
      },
      keyborderView: {
          flex: 1
      },
      roundpadding:{
        width:dimensions.fullWidth - 32,
          marginLeft:16,
          marginRight:16,
      },
      uploadImage:{
          width:84,
          height:84,
      },
      
      plan:{
        position:'absolute',
        zIndex:99,
        left:20,
        right:20,
        bottom:10,
        borderWidth:1,
        borderColor:'#d3d3d3',
        color:'#8d8d8d',
        paddingLeft:5,
        paddingRight:5,
        paddingTop:5,
        paddingBottom:5,
        minWidth: '8%',
        borderRadius:38,
        fontSize:12,
        textAlign:'center',
      },

      serviceplan:{
        fontSize:14,
        color:'#231f20',
        textAlign:'left',
        maxWidth:'74%',
      },

      blockWrappergService:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingTop:10,
      },

      grommingsubheading:{
        color:'#222ba8',
        textTransform:'uppercase',
        fontSize:14,
        marginBottom:20,
        fontWeight:'bold',
      },

      paddinghorizontalSpacing:{
        paddingTop:10,
        paddingBottom:10,
      },

      checkthmb:{
        width:24,
        height:24
      },

      borderbottomZero:{
        borderBottomColor:'transparent',
      },

      plantext:{
        color:'#8d8d8d',
      },

      modalOverlay:{
        backgroundColor:colors.black,
        opacity:0.9,
        width:dimensions.fullWidth,
        height:dimensions.fullHeight,
      },

      modalWrapper:{
        marginTop: 22, 
        backgroundColor:colors.white,
        opacity:1,
        borderRadius:20,
        margin:16,
        paddingTop:20,
        paddingBottom:20,
        width:dimensions.fullWidth - 32,
        height:dimensions.fullHeight - 130,
      },

      blockWrappergPlan:{
        position:'relative',
        width:'100%',
        paddingLeft:12,
        paddingBottom:20,
      },
      planspacing:{
        paddingBottom:20,
      },

      basicHeading:{
        fontSize:20,
        color:colors.black,
      },

      planmodaltext:{
        zIndex:99,
        borderWidth:1,
        borderColor:'#222ba8',
        color:'#222ba8',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:7,
        paddingBottom:7,
        borderRadius:38,
        fontSize:14,
        textAlign:'center',
        position:'absolute',
        right:12,
      },
      LeftplanPart:{
        width:30,
      },

      footer:{
        position:'absolute',
        width:dimensions.fullWidth,
        // backgroundColor:'#f6f6ff',
        paddingTop:2, 
        left:0,
        bottom:0,
      },

      serviceMiddleWrapper:{
         flex:1, 
         width:'100%',
         paddingLeft:16,
         backgroundColor:'#f6f6ff',
       },
       GroomingSelectWrapper:{
        flex:1, 
        paddingLeft:15,
        paddingRight:15,
        backgroundColor:'#f6f6ff',
        bottom:60,
      },
      checkclick:{
          position:'absolute',
          right:-5,
          top:0,
      },

      heightSpacing:{
        height:70,
      },

      paddingWrapper:{
        paddingLeft:16,
        paddingRight:16,
      },

      paddingRightWrapper:{
        paddingRight:16,
      },
      paddingTopWrapper:{
        paddingTop:16,
      },
      ButtonDone:{
          marginBottom:20,
          borderColor:'#d3d3d3',
          borderWidth:1,
          alignItems: 'center',
          backgroundColor: 'transparent',
          padding: 10,
          borderRadius:20,
      },

      buttontertiary:{
        width: dimensions.fullWidth - 80,
        marginBottom:20,
        borderColor:'#d3d3d3',
        borderWidth:1,
        alignItems: 'center',
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius:20,
      },
      GdoneImage:{
        width:154,
        height:124,
        marginBottom:24,
      },
      SelectVaccinationWrapper:{

          width:'100%',
          flex:1,
          paddingLeft:10,
          paddingRight:10,
          marginLeft:0,
          marginBottom:padding.sm + padding.sm/2,
          height: 40,
       },

      priceSelectVaccination:{
        color:'#8d8d8d',
        paddingLeft:7,
        paddingRight:7,
        paddingTop:3,
        paddingBottom:3,
        fontSize:fonts.sm  - 4,
        marginRight:5,
      },
      
      borderCommon:{
          borderWidth:1,
          borderBottomWidth:1,
          borderColor:'#d3d3d3',
          borderRadius:38,
      },
      rightPriceInfoPanel:{
        position:'absolute',
        right:0,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
      },
      infoImage:{
        width:20,
        height:20,
        marginRight:5,
      },
      textSelectVaccination:{
        color:colors.black,
        fontSize:fonts.sm,
      },
      
      btnTopSelectVAccine:{
        borderRadius:38,
        height:28,
        paddingLeft:16,
        paddingRight:16,
        alignItems:'center',
        paddingTop:3,
        marginRight:padding.sm,
      },

      btnAll:{
          borderWidth:1,
          borderColor:'#d6d8ff',
          borderWidth:1,
          color:'#222ba8',
         },

      btnRecommended:{
        backgroundColor:'#222ba8',
         },

      btnalltext:{
        fontSize:fonts.sm - 3,
      },

      modalSelectVaccineWrapper:{
          flex:1,
          justifyContent:'flex-end',
      },

      textSelectVaccinePara:{
        fontSize:fonts.sm,
        color:'#8d8d8d',
      },

      topSpacingVaccine:{
        marginTop:16,
      },
      rightSearchFooter:{
        position:'absolute',
        right: padding.xl + padding.xl + padding.md,
      },

      confirmblock:{
        flex:1, 
        width: dimensions.fullWidth - 30,  
        flexDirection: 'row', 
        backgroundColor: '#fff',
        marginLeft:15,
        marginRight:15,
        marginBottom:15,
        shadowOffset:{ width: 20, height: 20, },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        borderRadius:6,
      },

      dateblocktext: {
        color:'#222ba8'
      },

      confirmdate: {
        width: 50,
        height:50,
        backgroundColor:'#666',
      },

      appointdateblock:{
        backgroundColor:'#f2f2f2',
        padding:10,
        width:60,
      
       },

       appointmentproduct: {
        //  backgroundColor: 'red',
         padding:10,
       },

       appointmentprice: {
        // backgroundColor: 'green',
        padding:10,
        position:'absolute',
        right:0,
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
      },
      dateblocknumber:{
        fontSize:32,
        fontWeight: 'bold',
        color:'#222ba8',
      },
      dateblocktext:{
        textAlign:'center',
        fontWeight: 'bold',
        color:'#222ba8',
        fontSize:12,
      },
      appointmentproductname:{
        fontSize:16,
        color:'#231f20',
        marginBottom:15,
      },

      appointmentproducttime: {
        fontSize:14,
        color:'#222ba8',
      },
      deleteappointmenticon:{
        marginBottom: 15,
      },

      productprice:{
        color:'#8d8d8d',
        fontSize:11,
        borderWidth:1,
        borderRadius:20,
        borderColor:'#8d8d8d',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:7,
        paddingBottom:7,
      },
      mb20:{
        marginBottom: 20,
      },
      picker:{
          borderBottomColor:'#e1e1e1',
          borderBottomWidth:2,
          width: '100%',
          marginBottom:10,
         },

      selectpicker:{
        height:35,
        color:'#a9a9b3',
      },
      years:{
        position:'absolute',
        right:0,
        bottom:16,
        fontSize:16,
        color:'#8d8d8d',
      },
      mainwrapper:{
       width:'98%' , marginLeft: 10,
      },

      groomingbg:{
        backgroundColor:'#cdf0f3',
        width:'100%',
        height:119,
        padding:15,
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center'
      },
      groomingthumbnail:{
        width:88,
        height:80,
      },

      confirmblockAction:{
         flexDirection:'row',
          borderColor:'#eee', // if you need 
          borderWidth:1,
          shadowColor: '#eee',
          overflow:'hidden',
          shadowRadius: 20,
          shadowOpacity: 50,
          backgroundColor:'#fff',
          top:-10,
          borderRadius:6,
      },

      appointmentprodctname:{
        fontSize:14, 
        color:'#8d8d8d'
      },

      confirmproductwrapper:{
        width:dimensions.fullWidth - 40,
        marginLeft:20,
      },

      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      modalView: {
        margin: 0,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 5,
        alignItems: "center",
        justifyContent:'flex-end',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      bottomviewmodal:{
        backgroundColor:'#000',
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },

      groomingpayment:{
          padding:20,
      },
      leftIconpayment:{
        position:'absolute',
        left:0,
        width: 13, height: 24
      },
      headerbackpayment:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        marginBottom:20,
      },
      cardpaymentwrapper:{
        borderRadius: 20,
        width:'100%',
        padding:15,
      },
      paymentproductblock:{
          flexDirection:'row',
          width:'100%',
          marginBottom:20,
      },

      cardpaymentheading:{
          fontSize:13,
          textTransform:"uppercase",
          color:'#222ba8',
          marginBottom:10,
          fontWeight:'bold',
      },

      paymenttitle:{
          color:'#8d8d8d',
          fontSize:14,
          marginBottom:0
      },

      paymentsubtitle:{
        color:'#231f20',
        fontSize:16,
      },

      paymentproductview:{
          width:'60%'
      },
      paymentproductviewc:{
        width:'40%'
    },
      paymenttotal:{
        borderTopColor:'#eeeeee',
        borderTopWidth:2,
        marginTop:0,
        paddingTop:15,
        flexDirection:'row',
          width:'100%',
      },
      img:{
        height:20,
        width: 20
    },
    btn:{
        flexDirection: 'row'
    },
    paymentmode:{
      color:'#231f20',
      fontSize:12,
      marginTop:15,
      marginBottom:15,
    },

});  