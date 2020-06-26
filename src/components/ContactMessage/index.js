import React from 'react';

import { CircleUser, Online } from '../UI';
import { Message, Info, Up, Name, Date, Body, Container } from './styles';

export default function ContactMessage(props) {
    return (
        <Container novo={props.msg.novo}>
            <Message href="/message">
                <CircleUser imageStyle={{
                    borderRadius: 30
                }} source={{uri: props.msg.foto}}>{props.msg.online ? <Online /> : <></>}</CircleUser>
                <Info>
                    <Up>
                        <Name>{props.msg.nome}</Name>
                        <Date>{props.msg.data}</Date>
                    </Up>
                    <Body novo={props.msg.novo}>{props.msg.texto}</Body>
                </Info>
            </Message>
        </Container>
    );
}