import React from 'react';
import { Text, View, Button } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

export default function Home({navigation}) {
    return (
        <>
        <Text>Home</Text>
        <Button title="Sobre" onPress={() => navigation.navigate("Message")} />
        </>
    );
}