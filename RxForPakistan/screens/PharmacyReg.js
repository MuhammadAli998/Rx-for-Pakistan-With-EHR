import React,{useState} from 'react';
import { View, Text, Image, ScrollView,TouchableOpacity, TextInput,SafeAreaView,StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-datepicker';


import RadioForm,{RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const Pharmacy = ({navigation}) => {

    return(
    <View style={styles.container}>
      <View style={styles.flex1}>
      <Text style={styles.Heading}>Pharmacy Registration</Text>
      </View>
      
      {/*text boxes for details */}
                  <View>
                  <TextInput
        style={styles.input}
        //onChangeText={}
        value={Text}
        placeholder="Pharmacy Name"
        keyboardType="Text"        
      />
      <TextInput
        style={styles.input}
        //onChangeText={}
        value={Text}
        placeholder="City"
        keyboardType="Text"        
      />
      <TextInput
        style={styles.input}
        //onChangeText={}
        value={Text}
        placeholder="Pharmacy License # "
        keyboardType="Text"        
      />
      <TextInput
        style={styles.input}
        //onChangeText={}
        value={Text}
        placeholder="Pharmacy Address"
        keyboardType="Text"        
      />
                     </View>
                     <View>
           <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('GovtReg')
        }
      >
        
        <Text style={styles.Text2}>Register</Text>
      </TouchableOpacity>
           </View>
    </View>




    )}
    const styles = StyleSheet.create({
        container: {
         
           
        backgroundColor:'#A4E5EE',
        
        },
        Heading:{
            padding:1,
            fontSize:25,
            color:'#000000',
           // textAlign:"center",
            fontWeight: 'bold',
            margin: 40,
        },
        input: {
            height:55,
            margin:15,
            borderWidth: 2,
            borderColor:'#000000', 
            width: "92%",
              borderRadius: 40, 
              padding:20,
              
          },
          /*radio button */
         text:{
           
            padding:5,
            fontSize:20,
            color:'#000000',
           
            fontWeight: 'bold',
            margin: 1,
              
             
              
          },
          Text2: {
            padding:8,
            fontSize:25,
            color:'#efff',
            textAlign:"center",
            fontWeight: 'bold',
            borderRadius: 15,
          
        },
        Text3: {
          padding:8,
          fontSize:20,
          color:'#0000FF',
          textAlign:"right",
          margin:5,
          textDecorationLine: 'underline',
          textAlign:"center",
        
      },
        button:{
          alignItems: "center",
      backgroundColor: "#27727A",
      padding:10,
       borderRadius:35, 
       margin: 55,
       fontSize:20,
       width: "70%",
        },
        flex1: {
          padding:25,
        //  alignItems:"center",
          backgroundColor: '#398AA4'
      },
    
          
    })
export default Pharmacy;