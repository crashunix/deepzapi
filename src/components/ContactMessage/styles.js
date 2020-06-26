import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 10px 20px 10px 15px;
`;

export const Message = styled.TouchableOpacity`
    flex-direction: row;
`;

export const Info = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 0 10px;
    flex: 1;
`;

export const Up = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Name = styled.Text`
    font-weight: bold;
    color: #fff;
`;
export const Date = styled.Text`
    color: #777;
`;
export const Body = styled.Text`
    color: #aaa;
`;