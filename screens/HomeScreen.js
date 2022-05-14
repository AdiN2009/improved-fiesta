import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';


export default class HomeScreen extends React.Component {
 HELLO1Pressed(){
  var HELLO1 = db.ref('HELLO/' + '/')
  HELLO1.update({
    'absent': 'true'
  })
}

Adi2Pressed(){
  var Adi2 = db.ref('Adi/' + '/')
  Adi2.update({
    'present': 'true'
  })
}


  goToBuzzerScreen = (buzzercolor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };
  render() {
    return (
      <View>
        <AppHeader />

        <Text style={styles.studenChartContainer}>Hello</Text>
        <Text style={styles.studenChartContainer}>Adi</Text>
     

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.HELLO1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button }
          onPress={() => {
            this.Ad2Pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

          <Text style={styles.button2Text}>Present</Text>


        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
             this.Adi2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
              this.HELLO1Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

  
        <TouchableOpacity
          style={styles.button3}
          onPress={() => {
            this.goToBuzzerScreen('yellow');
          }}>
          <Text style={styles.button3Text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  studenChartContainer: {
     flexDirection: 'row',
     padding: 10,
     alignItems: 'center',
     margin: 20
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 3,
    borderRadius: 2,
    marginTop: -95,
    //marginBottom: 30,
    marginLeft: 200,
    width: 100,
    height: 30,
    backgroundColor: 'red'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  button2: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 5,
    borderRadius: 1,
    marginBottom: 35,
   // marginTop: 10,
    marginLeft: -30,
    width: 100,
    height: 30,
    backgroundColor: 'green'
  },
  button2Text: {
    textAlign: 'center',
    color: 'white',
  },
  button3: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    //marginBottom: 10,
   marginTop: 90,
    marginLeft: 40,
    width: 200,
    height: 50,
    backgroundColor: 'green',
  },
   button3Text: {
    textAlign: 'center',
    color: 'red',
  },
 
});