import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: column;
`; 

export const Bubble = styled.TouchableOpacity`
    padding: 15px;
    ${props => props.theirs ? 'background: #333740' : 'background: #00b2ff'};
    ${props => props.theirs ? 'align-self: flex-start' : 'align-self: flex-end'};
    color: #fff;
    border-radius: 10px;
    max-width: 65%;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 0;
`;

export const Hour = styled.Text`
    color: #eee;
    font-size: 12px;
`;

export const Body = styled.Text`
    color: #fff;
    font-size: 14px;
    margin: 0 30px 0 0;
`;