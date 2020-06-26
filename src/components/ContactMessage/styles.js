import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 10px 20px 10px 15px;
    ${props => props.novo ? 'background: #333740' : ''};
    &::before {
        content: 'a';
        position: absolute;
        top: 0;
        left: 0;
        width: 15px;
        height: 15px;
        background: #04b5ff;
    }
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
    color: #fff;
    font-weight: bold;
`;
export const Date = styled.Text`
    color: #777;
`;
export const Body = styled.Text`
    ${props => props.novo ? 'color: #04b5ff' : 'color: #fff'};
`;