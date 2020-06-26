import React, { useState } from 'react';
import { Text } from 'react-native';

import { Title, Label, CircleUser, Online, Divider } from '../../components/UI';
import ContactMessage from '../../components/ContactMessage';

import { Container, Header, Content, Favourites, FavouritesScroll, Top, List, MessagesList, MessagesScroll } from './styles';

import { Feather } from '@expo/vector-icons';

export default function Messages() {

    const [favoriteUsers, setFavoriteUsers] = useState([
        {
            id: 13213,
            nome: 'Naruto Uzumaki',
            foto: 'https://www.einerd.com.br/wp-content/uploads/2019/08/Naruto-erro-1%C2%BA-epis%C3%B3dio-capa-890x466.jpg'
        },
        {
            id: 99999,
            nome: 'Kakashi Hatake',
            foto: 'https://vignette.wikia.nocookie.net/naruto/images/e/ef/Kakashi_%28Boruto%29.png/revision/latest?cb=20181122180026&path-prefix=pt-br'
        },
    ]);

    const [messages, setMessages] = useState([
        {
            id: 123123,
            nome: 'Sakura Haruno',
            texto: 'tuts tuts tuts quero ve',
            data: '2 min',
            online: false,
            foto: 'https://vignette.wikia.nocookie.net/naruto/images/4/4e/Sakura_Uchiha.png/revision/latest?cb=20180508173625&path-prefix=pt-br',
        },
        {
            id: 343434,
            nome: 'Gaara',
            texto: 'kkkkkkkkkkkkkkkkk',
            data: '2 min',
            online: false,
            foto: 'https://vignette.wikia.nocookie.net/naruto/images/c/c3/Gaara_Part_IV.png/revision/latest?cb=20170914030450&path-prefix=pt-br',
        },
        {
            id: 565656,
            nome: 'Minato Namikaze',
            texto: 'tabo',
            data: 'agora',
            online: true,
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3-U9K9C6W0pOu4BkwxRcQ-kVCN-8DaXLq_Q&usqp=CAU',
        },
        {
            id: 5625656,
            nome: 'Kakashi Hatake',
            texto: 'tabo',
            data: 'agora',
            online: true,
            foto: 'https://vignette.wikia.nocookie.net/naruto/images/e/ef/Kakashi_%28Boruto%29.png/revision/latest?cb=20181122180026&path-prefix=pt-br',
        },
        {
            id: 562225656,
            nome: 'Hinata Hyuga',
            texto: 'tabo',
            data: 'agora',
            online: true,
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT78HMQFjB_6NCsYIqy3briIHuKA8GUYsIizA&usqp=CAU',
        },
        {
            id: 5623455656,
            nome: 'Shikamaru Nara',
            texto: 'tabo',
            data: 'agora',
            online: true,
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVfo-tCUwUSi_i-gEqu_xkVeJDt3mjB0iopg&usqp=CAU',
        },
        {
            id: 562341155656,
            nome: 'Kushina Uzumaki',
            texto: 'tabo',
            data: 'agora',
            online: true,
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFqcjq-Hc7mfzY-l32C6izTj9DGZ7CB0g1ng&usqp=CAU',
        },
    ]);

    return (
        <Container>
            <Header>
                <Title>Conversas</Title>
                <Feather name="search" size={26} color="white" />
            </Header>
            <Favourites>
                <Top>
                    <Label>FAVORITOS</Label>
                    <Feather name="chevron-down" size={26} color="white" />
                </Top>
                <FavouritesScroll horizontal>
                    <List>
                        {favoriteUsers.map(user => (
                            <CircleUser key={user.id} imageStyle={{
                                borderRadius: 30
                            }} source={{ uri: user.foto }}><Online /></CircleUser>
                        ))}
                    </List>
                </FavouritesScroll>
            </Favourites>
            <Divider ></Divider>
            <MessagesScroll vertical>
                <MessagesList>
                    {messages.map(msg => (<ContactMessage key={msg.id} msg={msg} />))}
                </MessagesList>
            </MessagesScroll>
        </Container>
    );
}