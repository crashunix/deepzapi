import React from 'react';

import { CircleUser, Online } from '../UI';
import { Message, Info, Up, Name, Date, Body, Container } from './styles';

export default function ContactMessage(props) {
    return (
        <Container onPress={() => props.navigation.navigate("Message", {contact: props.contact, navigation: props.navigation})} novo={props.contact.novo}>
            <Message href="/message">
                <CircleUser imageStyle={{
                    borderRadius: 30
                }} source={{uri: props.contact.foto}}>{props.contact.online ? <Online /> : <></>}</CircleUser>
                <Info>
                    <Up>
                        <Name>{props.contact.nome}</Name>
                        <Date>{props.contact.data}</Date>
                    </Up>
                    <Body novo={props.contact.novo}>{props.contact.texto}</Body>
                </Info>
            </Message>
        </Container>
    );
}