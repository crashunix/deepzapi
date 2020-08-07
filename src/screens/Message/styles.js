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

export const Messages = styled.ScrollView`
    flex: 1;
    background: #272b34;
`;

export const List = styled.View`
    padding: 15px;
`;

export const Send = styled.View`
    padding: 15px;
    background: #272b34;
`;
export const InputBox = styled.View`
    padding: 8px;
    background: #1e212a;
    border-radius: 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const Input = styled.Text`
    color: #ccc;
    padding: 0 10px;
`;

export const IconButton = styled.TouchableOpacity`
    background: #272b34;
    border-radius: 26px;
    padding: 10px 10px 6px 6px;
    margin-left: 10px; 
`;
export const Icons = styled.View`
    flex-direction: row;
    align-items: center;
`;