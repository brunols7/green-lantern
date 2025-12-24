import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import symbolOn from './assets/pictures/symbol-on.png';
import symbolOff from './assets/pictures/symbol-off.png';
import { useState } from 'react';

export default function App() {

  const [isActive, setIsActive] = useState(true)

  function handleSymbol(){
    setIsActive(!isActive)
  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={handleSymbol}>
        <Image source={isActive ? symbolOn : symbolOff}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
