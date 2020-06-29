import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Title, Label, CircleUser, Online, Divider } from '../../components/UI';
import ContactMessage from '../../components/ContactMessage';

import { Container, Header, Content, Favourites, FavouritesScroll, Top, List, MessagesList, MessagesScroll } from './styles';

import { Feather } from '@expo/vector-icons';

export default function Message({ route }) {

    const [messages, setMessages] = useState([]);

    return (
        <Container>
            <Header>
                <TouchableOpacity onPress={() => route.params.navigation.navigate("Initial")}>
                    <Feather name="arrow-left" size={26} color="white" />
                </TouchableOpacity>
                <Title>{route.params.contact.nome}</Title>
                <Feather name="search" size={26} color="white" />
            </Header>
        </Container>
    );
}