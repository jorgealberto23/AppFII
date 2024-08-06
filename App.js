import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <ScrollView style={styles.container}>

      <Image source={require('./assets/background.jpg')} style={styles.background} />
      <Text style={styles.title}>Top 10 investimentos, atualizado 2024, sem hack, sem cheat, 100% original, sem virus</Text>

      <View style={styles.topic}>
        <Text style={styles.topTitle}>Numero 10: IRDM11</Text>
        <Image source={require('./assets/IRDM11.jpg')} style={styles.image} />
        <Text style={styles.textInfo}>Cotação: R$ 71,13</Text>
        <Text style={styles.textInfo}>Rendimento de Dividendo:12,86%</Text>
      </View>

      <View style={styles.topic}>
        <Text style={styles.topTitle}>Numero 9: MXRF11</Text>
        <Image source={require('./assets/MXRF11.jpg')} style={styles.image} />
        <Text style={styles.textInfo}>Cotação: R$ 10,06</Text>
        <Text style={styles.textInfo}>Rendimento de Dividendo: 12,43%</Text>
      </View>

      <View style={styles.topic}>
        <Text style={styles.topTitle}>Numero 8: XPLG11</Text>
        <Image source={require('./assets/XPLG11.jpg')} style={styles.image} />
        <Text style={styles.textInfo}>Cotação: R$ 101,98</Text>
        <Text style={styles.textInfo}>Rendimento de Dividendo: 9,19%</Text>
      </View>

      <View style={styles.topic}>
        <Text style={styles.topTitle}>Numero 7: VISC11</Text>
        <Image source={require('./assets/visc11.jpg')} style={styles.image} />
        <Text style={styles.textInfo}>Cotação: R$ 112,15</Text>
        <Text style={styles.textInfo}>Rendimento de Dividendo: 10,30%</Text>
      </View>

      <View style={styles.topic}>
        <Text style={styles.topTitle}>Numero 6: BTLG11</Text>
        <Image source={require('./assets/BTLG11.jpg')} style={styles.image} />
        <Text style={styles.textInfo}>Cotação: R$ 100,10 </Text>
        <Text style={styles.textInfo}>Rendimento de Dividendo: 9,17%</Text>
      </View>

      <View style={styles.topic}>
        <Text style={styles.topTitle}>Numero 5: KNRI11</Text>
        <Image source={require('./assets/KNRI11.jpg')} style={styles.image} />
        <Text style={styles.textInfo}>Cotação: R$ 154,44</Text>
        <Text style={styles.textInfo}>Rendimento de Dividendo: 7,77%</Text>
      </View>

      <View style={styles.topic}>
        <Text style={styles.topTitle}>Numero 4: HGLG11</Text>
        <Image source={require('./assets/HGLG11.jpg')} style={styles.image} />
        <Text style={styles.textInfo}>Cotação:R$ 159,82</Text>
        <Text style={styles.textInfo}>Rendimento de Dividendo: 8,27%</Text>
      </View>

      <View style={styles.topic}>
        <Text style={styles.topTitle}>Numero 3: XPML11</Text>
        <Image source={require('./assets/XPML11.jpg')} style={styles.image} />
        <Text style={styles.textInfo}>Cotação: R$ 112,32</Text>
        <Text style={styles.textInfo}>Rendimento de Dividendo: 9,53%</Text>
      </View>

      <View style={styles.topic}>
        <Text style={styles.topTitle}>Numero 2: KNCR11</Text>
        <Image source={require('./assets/KNCR11.jpg')} style={styles.image} />
        <Text style={styles.textInfo}>Cotação: R$ 104,97</Text>
        <Text style={styles.textInfo}>Rendimento de Dividendo: 11,80%</Text>
      </View>

      <View style={styles.topic}>
        <Text style={styles.topTitle}>Numero 1: KNIP11</Text>
        <Image source={require('./assets/KNIP11.jpg')} style={styles.image} />
        <Text style={styles.textInfo}>Cotação: R$ 94,54</Text>
        <Text style={styles.textInfo}>Rendimento de Dividendo: 10,29%</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  background: {
    height: 150,
    width: 400,
  },
  title: {
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
    backgroundColor: "#363636",
    color: "white",
    paddingBottom: 25,
    paddingTop: 25
  },
  topic: {
    marginBottom: 15,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  topTitle: {
    fontWeight: "bold",
    fontSize: 25,
  },
  image: {
    height: 350,
    width: 350,
    marginBottom: 25,
    marginTop: 25,
    margin: 10,
    borderRadius: 25,
  },
  textInfo: {
    fontSize: 20,
  }
});

