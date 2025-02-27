import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';

const facts = [
  "Bodya – топчик! 🔥",
  "React Native – це круто! 🚀",
  "Коти правлять світом 😼",
  "JavaScript не перестає дивувати 🤯",
  "Пий воду та кодь продуктивно! 💧",
];

export default function App() {
  const [color, setColor] = useState('#000000');
  const [fact, setFact] = useState(facts[0]);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const changeColorAndFact = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    
    setColor(randomColor);
    setFact(randomFact);
  };

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0, duration: 150, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
    ]).start();
  }, [fact]); // Запускає анімацію при зміні факту

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.Text style={{ fontSize: 24, fontWeight: 'bold', color, opacity: fadeAnim }}>
        {fact}
      </Animated.Text>
      <TouchableOpacity
        onPress={changeColorAndFact}
        style={{
          marginTop: 20,
          backgroundColor: '#007BFF',
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>🔄 Новий факт</Text>
      </TouchableOpacity>
    </View>
  );
}
