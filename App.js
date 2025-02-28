import React, { useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function UserProfile() {
  const translateX = useRef(new Animated.Value(width)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: -width,
        duration: 5000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>єДокумент</Text>
        <View style={styles.row}>
          <Image
            source={{
              uri: 'https://mir-s3-cdn-cf.behance.net/user/230/94c18c1917063105.6729e39a252eb.jpg',
            }}
            style={styles.photo}
          />
          <View style={styles.infoContainer}>
            <View style ={styles.infoContainerText}>
              <Text style={styles.infoText}>Дата{"\n"}народження:</Text>
              <Text style={styles.infoText}>24.11.2005</Text>
            </View> 
            <View style ={styles.infoContainerText}>
              <Text style={styles.infoText}>РНОКПП:</Text>
              <Text style={styles.infoText}>3867111411</Text>
            </View> 
          </View>
        </View>
        <View style={styles.marqueeContainer}>
          <Animated.Text style={[styles.marqueeText, { transform: [{ translateX }] }]}>
            🔥 Увага! Ваші документи завжди під рукою! 🔥
          </Animated.Text>
        </View>
        <View style={styles.TextName}>
          <Text style={styles.name}>Ковальський</Text>
          <Text style={styles.name}>Роман</Text>
          <Text style={styles.name}>Вікторович</Text>
        
        </View>

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DFF0F5',
  },
  card: {
    width: 320,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
           
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
  },
  title: {
    paddingTop: 30,
    paddingLeft: 20,
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',  // Розміщуємо зображення і текст в ряд
    marginBottom: 10,
    paddingLeft: 20,
  },
  photo: {
    width: 125,
    height: 170,
    borderRadius: 8,
    marginRight: 10,  // Відступ між фото і текстом
  },
  infoContainer: {
    justifyContent: 'flex-start',  // Вирівнюємо текст зліва по відношенню до контейнера
  },
  infoContainerText: {
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 8,
    marginLeft: 8,
    fontWeight: 500
  },
  marqueeContainer: {
    overflow: 'hidden',
    width: '100%',
    backgroundColor: '#DFF0F5',
    marginTop: 50,
  },
  marqueeText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    width: '100%',
    flexDirection: 'row', // Це потрібно, щоб усі елементи були в одному рядку
    flexWrap: 'nowrap', // Це гарантує, що текст не перенесеться на новий рядок
  },
  name: {
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: '500',
    
  },

  TextName: {
    paddingTop: 10,
    paddingBottom: 30,
  }
});

