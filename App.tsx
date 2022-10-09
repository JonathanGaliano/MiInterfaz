import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign,Entypo, FontAwesome,SimpleLineIcons, Ionicons, MaterialIcons } 
from '@expo/vector-icons';

export default function App() {
  return (
    
    
    <View style={styles.container}>
      
      <View style={styles.header}></View>
      
        
      <View style={styles.container_middle}>
        
        <Entypo name="arrow-right" size={25}  />
      </View>

        <View/>
   

        <View style={styles.textPrincipal}>
        <Text style={styles.texto}> 87 Commenst</Text>
          <Text style={styles.texto}> David Green </Text> 
          <Text > 😇😇 Polygoon has raised $450 million from strategic investors accco
            rding to a press realice sent to Bitcoin.com News on February 7.  </Text>
            
        </View>
        
        <View style={styles.textPrincipal}>
          <Text style={styles.texto}> <FontAwesome name="user" size={24} color="white"/>  Michel Ganri</Text>
          <Text> 😇😇 Hello, I am Michel Ganri, i am 18 year old i am from 
            new york
          </Text>
          
          </View>
      
        <View style={styles.textPrincipal} >
          <Text style={styles.texto}> <FontAwesome name="support" size={18} color="white" />Kim Dranco</Text>
          <Text> 😇😇 Hello, my name is Kim Dranco </Text>
        </View>
        <View style={styles.textPrincipal} >
          <Text style={styles.texto}> <FontAwesome name="support" size={18} color="black" />Scot Donavan</Text>
          <Text> 😇😇 During the weekend, when bitcoin rose to a two-week 
            high, it was Gata that stole the show  </Text>
        </View>
        <View style={styles.textPrincipal} >
          <Text style={styles.texto}> <FontAwesome name="support" size={18} color="black" />David Green</Text>
          <Text> 😇😇 Polygoon has raised $450 million from strategic investors accco
            rding to a press realice sent to Bitcoin.com News on February 7. </Text>
        </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:"#586363",
    margin:0,
    
  },
  header: {
    height: "20%",
    backgroundColor: "#204962",
    margin: 0,
  },

  container_middle: {
    width: "90%",
    absolute: 0,
    alignSelf: "center",
    height: 55,
    elevation: 10,
    borderRadius: 15,
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "#4F82A1",
    margin: 80,
  },
  name: {
    paddingLeft: "90%",
    position: 'absolute',
    color:"green",
  },
  
  
  textPrincipal: {
    padding: 4,
    margin: 2,
    backgroundColor:"#204962",
  },
  texto: {
    padding: 0,
    margin: 5,
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
    backgroundColor:"#204962",
    borderRadius: 100,
    justifyContent: "center",
  },
  
});

