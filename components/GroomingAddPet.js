import React, { useState, Component } from 'react';
import {View, ScrollView, Image, Picker,Alert,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { H2, Card, CardItem, Text, Body, Item, Input, Label, Button} from "native-base";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { User } from '../services/UserService'
import styles from '../assets/styles/styles';
import {MONTHS,DAY} from '../constants/Constant'
import { dimensions } from '../assets/styles/base';
const BREEDS = [
    "Affenpinscher",
    "Afghan Hound",
    "Aidi",
    "Airedale Terrier",
    "Akbash Dog",
    "Akita",
    "Alano Español",
    "Alaskan Klee Kai",
    "Alaskan Malamute",
    "Alpine Dachsbracke",
    "Alpine Spaniel",
    "American Bulldog",
    "American Cocker Spaniel",
    "American Eskimo Dog",
    "American Foxhound",
    "American Hairless Terrier",
    "American Pit Bull Terrier",
    "American Staffordshire Terrier",
    "American Water Spaniel",
    "Anglo-Français de Petite Vénerie",
    "Appenzeller Sennenhund",
    "Ariege Pointer",
    "Ariegeois",
    "Armant",
    "Armenian Gampr dog",
    "Artois Hound",
    "Australian Cattle Dog",
    "Australian Kelpie",
    "Australian Shepherd",
    "Australian Silky Terrier",
    "Australian Stumpy Tail Cattle Dog",
    "Australian Terrier",
    "Azawakh",
    "Bakharwal Dog",
    "Barbet",
    "Basenji",
    "Basque Shepherd Dog",
    "Basset Artésien Normand",
    "Basset Bleu de Gascogne",
    "Basset Fauve de Bretagne",
    "Basset Hound",
    "Bavarian Mountain Hound",
    "Beagle",
    "Beagle-Harrier",
    "Bearded Collie",
    "Beauceron",
    "Bedlington Terrier",
    "Belgian Shepherd Dog (Groenendael)",
    "Belgian Shepherd Dog (Laekenois)",
    "Belgian Shepherd Dog (Malinois)",
    "Bergamasco Shepherd",
    "Berger Blanc Suisse",
    "Berger Picard",
    "Berner Laufhund",
    "Bernese Mountain Dog",
    "Billy",
    "Black and Tan Coonhound",
    "Black and Tan Virginia Foxhound",
    "Black Norwegian Elkhound",
    "Black Russian Terrier",
    "Bloodhound",
    "Blue Lacy",
    "Blue Paul Terrier",
    "Boerboel",
    "Bohemian Shepherd",
    "Bolognese",
    "Border Collie",
    "Border Terrier",
    "Borzoi",
    "Boston Terrier",
    "Bouvier des Ardennes",
    "Bouvier des Flandres",
    "Boxer",
    "Boykin Spaniel",
    "Bracco Italiano",
    "Braque d'Auvergne",
    "Braque du Bourbonnais",
    "Braque du Puy",
    "Braque Francais",
    "Braque Saint-Germain",
    "Brazilian Terrier",
    "Briard",
    "Briquet Griffon Vendéen",
    "Brittany",
    "Broholmer",
    "Bruno Jura Hound",
    "Bucovina Shepherd Dog",
    "Bull and Terrier",
    "Bull Terrier (Miniature)",
    "Bull Terrier",
    "Bulldog",
    "Bullenbeisser",
    "Bullmastiff",
    "Bully Kutta",
    "Burgos Pointer",
    "Cairn Terrier",
    "Canaan Dog",
    "Canadian Eskimo Dog",
    "Cane Corso",
    "Cardigan Welsh Corgi",
    "Carolina Dog",
    "Carpathian Shepherd Dog",
    "Catahoula Cur",
    "Catalan Sheepdog",
    "Caucasian Shepherd Dog",
    "Cavalier King Charles Spaniel",
    "Central Asian Shepherd Dog",
    "Cesky Fousek",
    "Cesky Terrier",
    "Chesapeake Bay Retriever",
    "Chien Français Blanc et Noir",
    "Chien Français Blanc et Orange",
    "Chien Français Tricolore",
    "Chien-gris",
    "Chihuahua",
    "Chilean Fox Terrier",
    "Chinese Chongqing Dog",
    "Chinese Crested Dog",
    "Chinese Imperial Dog",
    "Chinook",
    "Chippiparai",
    "Chow Chow",
    "Cierny Sery",
    "Cimarrón Uruguayo",
    "Cirneco dell'Etna",
    "Clumber Spaniel",
    "Combai",
    "Cordoba Fighting Dog",
    "Coton de Tulear",
    "Cretan Hound",
    "Croatian Sheepdog",
    "Cumberland Sheepdog",
    "Curly Coated Retriever",
    "Cursinu",
    "Cão da Serra de Aires",
    "Cão de Castro Laboreiro",
    "Cão Fila de São Miguel",
    "Dachshund",
    "Dalmatian",
    "Dandie Dinmont Terrier",
    "Danish Swedish Farmdog",
    "Deutsche Bracke",
    "Doberman Pinscher",
    "Dogo Argentino",
    "Dogo Cubano",
    "Dogue de Bordeaux",
    "Drentse Patrijshond",
    "Drever",
    "Dunker",
    "Dutch Shepherd Dog",
    "Dutch Smoushond",
    "East Siberian Laika",
    "East-European Shepherd",
    "Elo",
    "English Cocker Spaniel",
    "English Foxhound",
    "English Mastiff",
    "English Setter",
    "English Shepherd",
    "English Springer Spaniel",
    "English Toy Terrier (Black &amp; Tan)",
    "English Water Spaniel",
    "English White Terrier",
    "Entlebucher Mountain Dog",
    "Estonian Hound",
    "Estrela Mountain Dog",
    "Eurasier",
    "Field Spaniel",
    "Fila Brasileiro",
    "Finnish Hound",
    "Finnish Lapphund",
    "Finnish Spitz",
    "Flat-Coated Retriever",
    "Formosan Mountain Dog",
    "Fox Terrier (Smooth)",
    "French Bulldog",
    "French Spaniel",
    "Galgo Español",
    "Gascon Saintongeois",
    "German Longhaired Pointer",
    "German Pinscher",
    "German Shepherd",
    "German Shorthaired Pointer",
    "German Spaniel",
    "German Spitz",
    "German Wirehaired Pointer",
    "Giant Schnauzer",
    "Glen of Imaal Terrier",
    "Golden Retriever",
    "Gordon Setter",
    "Gran Mastín de Borínquen",
    "Grand Anglo-Français Blanc et Noir",
    "Grand Anglo-Français Blanc et Orange",
    "Grand Anglo-Français Tricolore",
    "Grand Basset Griffon Vendéen",
    "Grand Bleu de Gascogne",
    "Grand Griffon Vendéen",
    "Great Dane",
    "Great Pyrenees",
    "Greater Swiss Mountain Dog",
    "Greek Harehound",
    "Greenland Dog",
    "Greyhound",
    "Griffon Bleu de Gascogne",
    "Griffon Bruxellois",
    "Griffon Fauve de Bretagne",
    "Griffon Nivernais",
    "Hamiltonstövare",
    "Hanover Hound",
    "Hare Indian Dog",
    "Harrier",
    "Havanese",
    "Hawaiian Poi Dog",
    "Himalayan Sheepdog",
    "Hokkaido",
    "Hovawart",
    "Huntaway",
    "Hygenhund",
    "Ibizan Hound",
    "Icelandic Sheepdog",
    "Indian pariah dog",
    "Indian Spitz",
    "Irish Red and White Setter",
    "Irish Setter",
    "Irish Terrier",
    "Irish Water Spaniel",
    "Irish Wolfhound",
    "Istrian Coarse-haired Hound",
    "Istrian Shorthaired Hound",
    "Italian Greyhound",
    "Jack Russell Terrier",
    "Jagdterrier",
    "Jämthund",
    "Kai Ken",
    "Kaikadi",
    "Kanni",
    "Karelian Bear Dog",
    "Karst Shepherd",
    "Keeshond",
    "Kerry Beagle",
    "Kerry Blue Terrier",
    "King Charles Spaniel",
    "King Shepherd",
    "Kintamani",
    "Kishu",
    "Komondor",
    "Kooikerhondje",
    "Koolie",
    "Korean Jindo Dog",
    "Kromfohrländer",
    "Kumaon Mastiff",
    "Kurī",
    "Kuvasz",
    "Kyi-Leo",
    "Labrador Husky",
    "Labrador Retriever",
    "Lagotto Romagnolo",
    "Lakeland Terrier",
    "Lancashire Heeler",
    "Landseer",
    "Lapponian Herder",
    "Large Münsterländer",
    "Leonberger",
    "Lhasa Apso",
    "Lithuanian Hound",
    "Longhaired Whippet",
    "Löwchen",
    "Mahratta Greyhound",
    "Maltese",
    "Manchester Terrier",
    "Maremma Sheepdog",
    "McNab",
    "Mexican Hairless Dog",
    "Miniature American Shepherd",
    "Miniature Australian Shepherd",
    "Miniature Fox Terrier",
    "Miniature Pinscher",
    "Miniature Schnauzer",
    "Miniature Shar Pei",
    "Molossus",
    "Montenegrin Mountain Hound",
    "Moscow Watchdog",
    "Moscow Water Dog",
    "Mountain Cur",
    "Mucuchies",
    "Mudhol Hound",
    "Mudi",
    "Neapolitan Mastiff",
    "New Zealand Heading Dog",
    "Newfoundland",
    "Norfolk Spaniel",
    "Norfolk Terrier",
    "Norrbottenspets",
    "North Country Beagle",
    "Northern Inuit Dog",
    "Norwegian Buhund",
    "Norwegian Elkhound",
    "Norwegian Lundehund",
    "Norwich Terrier",
    "Old Croatian Sighthound",
    "Old Danish Pointer",
    "Old English Sheepdog",
    "Old English Terrier",
    "Old German Shepherd Dog",
    "Olde English Bulldogge",
    "Otterhound",
    "Pachon Navarro",
    "Paisley Terrier",
    "Pandikona",
    "Papillon",
    "Parson Russell Terrier",
    "Patterdale Terrier",
    "Pekingese",
    "Pembroke Welsh Corgi",
    "Perro de Presa Canario",
    "Perro de Presa Mallorquin",
    "Peruvian Hairless Dog",
    "Petit Basset Griffon Vendéen",
    "Petit Bleu de Gascogne",
    "Phalène",
    "Pharaoh Hound",
    "Phu Quoc ridgeback dog",
    "Picardy Spaniel",
    "Plott Hound",
    "Podenco Canario",
    "Pointer (dog breed)",
    "Polish Greyhound",
    "Polish Hound",
    "Polish Hunting Dog",
    "Polish Lowland Sheepdog",
    "Polish Tatra Sheepdog",
    "Pomeranian",
    "Pont-Audemer Spaniel",
    "Poodle",
    "Porcelaine",
    "Portuguese Podengo",
    "Portuguese Pointer",
    "Portuguese Water Dog",
    "Posavac Hound",
    "Pražský Krysařík",
    "Pudelpointer",
    "Pug",
    "Puli",
    "Pumi",
    "Pungsan Dog",
    "Pyrenean Mastiff",
    "Pyrenean Shepherd",
    "Rafeiro do Alentejo",
    "Rajapalayam",
    "Rampur Greyhound",
    "Rastreador Brasileiro",
    "Rat Terrier",
    "Ratonero Bodeguero Andaluz",
    "Redbone Coonhound",
    "Rhodesian Ridgeback",
    "Rottweiler",
    "Rough Collie",
    "Russell Terrier",
    "Russian Spaniel",
    "Russian tracker",
    "Russo-European Laika",
    "Sabueso Español",
    "Saint-Usuge Spaniel",
    "Sakhalin Husky",
    "Saluki",
    "Samoyed",
    "Sapsali",
    "Schapendoes",
    "Schillerstövare",
    "Schipperke",
    "Schweizer Laufhund",
    "Schweizerischer Niederlaufhund",
    "Scotch Collie",
    "Scottish Deerhound",
    "Scottish Terrier",
    "Sealyham Terrier",
    "Segugio Italiano",
    "Seppala Siberian Sleddog",
    "Serbian Hound",
    "Serbian Tricolour Hound",
    "Shar Pei",
    "Shetland Sheepdog",
    "Shiba Inu",
    "Shih Tzu",
    "Shikoku",
    "Shiloh Shepherd Dog",
    "Siberian Husky",
    "Silken Windhound",
    "Sinhala Hound",
    "Skye Terrier",
    "Sloughi",
    "Slovak Cuvac",
    "Slovakian Rough-haired Pointer",
    "Small Greek Domestic Dog",
    "Small Münsterländer",
    "Smooth Collie",
    "South Russian Ovcharka",
    "Southern Hound",
    "Spanish Mastiff",
    "Spanish Water Dog",
    "Spinone Italiano",
    "Sporting Lucas Terrier",
    "St. Bernard",
    "St. John's water dog",
    "Stabyhoun",
    "Staffordshire Bull Terrier",
    "Standard Schnauzer",
    "Stephens Cur",
    "Styrian Coarse-haired Hound",
    "Sussex Spaniel",
    "Swedish Lapphund",
    "Swedish Vallhund",
    "Tahltan Bear Dog",
    "Taigan",
    "Talbot",
    "Tamaskan Dog",
    "Teddy Roosevelt Terrier",
    "Telomian",
    "Tenterfield Terrier",
    "Thai Bangkaew Dog",
    "Thai Ridgeback",
    "Tibetan Mastiff",
    "Tibetan Spaniel",
    "Tibetan Terrier",
    "Tornjak",
    "Tosa",
    "Toy Bulldog",
    "Toy Fox Terrier",
    "Toy Manchester Terrier",
    "Toy Trawler Spaniel",
    "Transylvanian Hound",
    "Treeing Cur",
    "Treeing Walker Coonhound",
    "Trigg Hound",
    "Tweed Water Spaniel",
    "Tyrolean Hound",
    "Vizsla",
    "Volpino Italiano",
    "Weimaraner",
    "Welsh Sheepdog",
    "Welsh Springer Spaniel",
    "Welsh Terrier",
    "West Highland White Terrier",
    "West Siberian Laika",
    "Westphalian Dachsbracke",
    "Wetterhoun",
    "Whippet",
    "White Shepherd",
    "Wire Fox Terrier",
    "Wirehaired Pointing Griffon",
    "Wirehaired Vizsla",
    "Yorkshire Terrier",
    "Šarplaninac"
]
export default class GroomingAddPet extends Component {


    name = ''
    price = 0
    servicePrice = 0
    packagePrice = 0
    inputs = []
    state = {breed:'select',pets:[]}




    constructor(props){
        super(props)



    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        })
        this.setState({ loading: false })
    }

    focusTheField = (id) => {
        this.inputs[id]._root.focus();
    }

    addPet(){
        let that = this

        let pet = {}
        if(!this.state.name){
            Alert.alert('Please enter name')
            return
        }

        if(this.state.breed == 'select'){
            Alert.alert('Please select breed')
            return
        }

        pet = {id:new Date().getTime(),full_name:this.state.name,type:'dog',breed:this.state.breed,age:this.state.age||'',notes:this.state.notes}


        this.state.pets.push(pet)
        this.setState({breed:'select',name:'',age:' ',pets:this.state.pets,notes:''})


    }

    requestAppointment(){
        this.props.next(this.state.pets)
    }
    render() {

        return (


           

                <View style={{flex:1, width:'96%' , height:dimensions.fullHeight, margin: 'auto'}}>
                     
                    <View style={[styles.headingWrapper, styles.mb20]}>
                        <TouchableOpacity style={[styles.headingMain, styles.mt20]}>
                            <Image style={styles.leftIcon}  source={require('../assets/images/lefticon.png')}/>
                        </TouchableOpacity>
                        <Text  style={styles.headingMain}>Pet Details!</Text>
                    </View>
                    <ScrollView style={styles.scrollviewwrapper}>
                    <View style={styles.bottomwrapper}>
                     {this.state.pets.map(pet=>(
                        <View key={pet.id} style={styles.confirmblock}>
                            {pet.age &&
                            <View style={styles.appointdateblock}>
                                <Text style={styles.dateblocknumber}>{pet.age}</Text>
                                <Text style={styles.dateblocktext}>Yrs</Text>
                            </View>}
                        <View style={styles.appointmentproduct}>
                            <Text style={styles.appointmentproductname}>{pet.full_name}</Text>
                            <Text style={styles.appointmentproducttime}>{pet.breed}</Text>
                        </View>
                        {/*{pet.age && <View style={styles.appointmentprice}>*/}
                            {/*<Text style={styles.deleteappointmenticon}></Text>*/}
                            {/*<Text style={styles.productprice}> {pet.age }</Text>*/}
                        {/*</View>}*/}
                    </View>))}

                    <View style={styles.mainwrapper}>
                        <Card transparent>
                            <CardItem style={styles.cardWrapperdetail}>
                                <Body style={styles.paddingbottomSpacing}>
                                <Text  style={styles.HeadingBlock}>Doggo Details (Optional)</Text>
                                <View style={styles.picker}>
                                    <Picker  style={styles.selectpicker} selectedValue={this.state.breed }
                                             onValueChange={val => this.setState({ breed: val })}>
                                            <Picker.Item label="Select doggo's breed" value={'na'} />
                                            {BREEDS.map((v) =>{
                                                return <Picker.Item key={v} label={v} value={v} />
                                               })
                                            }
                                     </Picker>
                                 </View>
                                <View style={{width:'100%', position:'relative'}}>
                                    <Text style={styles.years}>Years</Text>
                                    <Item  style={styles.inputBLock} floatingLabel>
                                        <Label style={styles.inputfiledLabel}>Enter doggo's age</Label>
                                        <Input  returnKeyType={ 'next' } keyboardType="phone-pad"
                                                onSubmitEditing={() => { this.focusTheField('name'); }}
                                                value={this.state.age}
                                                onChangeText={val => this.setState({ age: val })}/>
                                    </Item>
                                </View>

                                <Item  style={styles.inputBLock} floatingLabel>
                                    <Label style={styles.inputfiledLabel}>Name</Label>
                                    <Input
                                        getRef={input => { this.inputs['name'] = input }}
                                        onSubmitEditing={() => { this.focusTheField('comments'); }}
                                        returnKeyType={ 'next' }
                                        value={this.state.name}
                                        onChangeText={val => this.setState({ name: val })}

                                    />
                                </Item>

                                <Item  style={styles.inputBLock} floatingLabel>
                                    <Label style={styles.inputfiledLabel}>Comments</Label>
                                    <Input
                                        getRef={input => { this.inputs['comments'] = input }}
                                        returnKeyType={ 'done' }
                                        value={this.state.notes}
                                        onChangeText={val => this.setState({ notes: val })} />
                                </Item>
                              </Body>



                            </CardItem>
                            <View style={{width:'100%', marginTop:15}}>
                                <Button style={styles.primarybtn} onPress={()=>this.addPet()}>
                                    <Text  style={styles.colorPrimarybtn} >Add Pet</Text>
                                </Button>
                            </View>

                            <View style={{width:'100%', marginTop:15}}>
                                <Button style={[styles.primarybtn, styles.requestbgcolor]} onPress={()=>this.requestAppointment()}>
                                    <Text  style={[styles.colorPrimarybtn, styles.requesttextcolor]} >Request Appointment</Text>
                                </Button>
                            </View>

                        </Card>
                       </View>
                   
                    </View>
                    </ScrollView>
                </View>
           
        )
    }
}
