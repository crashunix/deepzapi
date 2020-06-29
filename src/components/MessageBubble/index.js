import React from 'react';

import { Text } from 'react-native';

import { CircleUser, Online } from '../UI';
import { Message, Info, Up, Name, Date, Body, Container, Bubble, List, Content, Hour } from './styles';

export default function MessageBubble(props) {
    return (
        <Container>
            <Bubble theirs={props.theirs}>
                <Body>Mensagem</Body>
                <Hour>17:12</Hour>
            </Bubble>
        </Container>
    );
}