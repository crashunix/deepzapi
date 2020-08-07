import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
    background: #333740;
`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: #333740;
`;

export const Content = styled.View``;

export const Favourites = styled.View`
    padding: 20px 0;
    background: #272b34;
`;

export const Top = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 15px 20px;
`;

export const FavouritesScroll = styled.ScrollView`
    margin-right: 0;
`;
export const List = styled.View`
    padding: 0 15px;
    display: flex;
    flex-direction: row;
`;

export const MessagesScroll = styled.View`
    flex: 1;
`;
export const MessagesList = styled.ScrollView`
    background: #272b34;
    flex-direction: column;
    flex: 1;
`;