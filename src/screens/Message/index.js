import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Title, Label, CircleUser, Online, Divider } from '../../components/UI';
import MessageBubble from '../../components/MessageBubble';

import { Container, Header, Messages, List, Send, InputBox, Input, IconButton, Icons } from './styles';

import { Feather } from '@expo/vector-icons';

export default function Message({ route }) {

    const [messages, setMessages] = useState([
        {
            id: 1231,
            nome: route.params.contact.nome,
            texto: route.params.contact.texto,
            hora: 'agora'
        },
    ]);

    return (
        <Container>
            <Header>
                <TouchableOpacity onPress={() => route.params.navigation.navigate("Initial")}>
                    <Feather name="arrow-left" size={26} color="white" />
                </TouchableOpacity>
                <Title>{route.params.contact.nome}</Title>
                <Feather name="more-vertical" size={26} color="white" />
            </Header>
            {/* {messages.map(msg => (
                <Text key={msg.id}>{msg.nome} {msg.texto} {msg.hora}</Text>
            ))} */}
            <Messages vertical>
                <List>
                    <MessageBubble />
                    <MessageBubble theirs />
                    <MessageBubble />
                    <MessageBubble />
                    <MessageBubble />
                    <MessageBubble />
                    <MessageBubble />
                    <MessageBubble />
                    <MessageBubble />
                    <MessageBubble />
                    <MessageBubble />
                </List>
            </Messages>
            <Send>
                <InputBox>
                    <Input>Write something</Input>
                    <Icons>
                        <Feather name="paperclip" color="#777" size={18}></Feather>
                        <IconButton>
                            <Feather name="send" color="#00b2ff" size={22}></Feather>
                        </IconButton>
                    </Icons>
                </InputBox>
            </Send>
        </Container>
    );
}