import React, { useState } from 'react';
import { Text } from 'react-native';

import { Title, Label, CircleUser, Online, Divider } from '../../components/UI';
import ContactMessage from '../../components/ContactMessage';

import { Container, Header, Content, Favourites, FavouritesScroll, Top, List, MessagesList, MessagesScroll } from './styles';

import { Feather } from '@expo/vector-icons';

export default function Message() {

    const [messages, setMessages] = useState([]);

    return (
        <Container>
            <Header>
                <Title>Sakura Haruno</Title>
                <Feather name="search" size={26} color="white" />
            </Header>
        </Container>
    );
}