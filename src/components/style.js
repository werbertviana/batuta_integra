import styled from 'styled-components/native';


export const Bgcontainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    backgroundColor: #fff;
`;

export const QuestionsContainer = styled.SafeAreaView`
    margin-top: 2%;
    height: 65%;
    width: 90%;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around; 
`;
export const QuestionsButton = styled.TouchableOpacity`
        margin-top: 2%;
        width: 40%;
        height: 45%;
        justify-content: center;
        align-items: center;
        border-radius: 7px;
        background-color: #fff;
        margin: 4%;
        border-width: 4px;
        border-style: solid;
        border-color: ${props => props.color};
    `;
export const QuestionsButton2 = styled.Pressable`
    margin-top: 2%;
    width: 40%;
    height: 45%;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    background-color: #fff;
    margin: 4%;
    border-width: 4px;
    border-style: solid;
`;

export const QuestionText = styled.Text`
    font-family: GothamCondensed-Medium;
    font-size: 28px;
    margin-top: 2%;
`;

export const ImageQuestions = styled.Image`
    margin-top: 2%;
    width: 80%;
    height: 85%;
    margin: 4%;
`;

export const HeaderContainer = styled.SafeAreaView`
    margin-top: 4%;
    width: 90%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
   `;
export const Div = styled.SafeAreaView`
    margin-top: 2%;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
  `;

export const DivisorLine = styled.SafeAreaView`
    width: 40%;
    height: 3px;
    background-color: #D2D3D5;
    border-radius: 5px;
    align-items: center;
    `;

export const ButtonContainer = styled.SafeAreaView`
    margin-top: 6%;
    height: 10%;
    width: 90%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;
export const CloseButtonContainer = styled.TouchableOpacity`
    width: 10%;
    height: 90%;
    align-items: center;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const JumpButton = styled.TouchableOpacity`
        width: 40%;
        height: 65%;
        justify-content: center;
        align-items: center;
        border-radius: 7px;
        background-color: #fff;
        border-width: 4px;
        border-style: solid;
        border-color: #D2D3D5 ;
    `;

export const JumpText = styled.Text`
        color: black;
        fontSize: 28px;
        fontFamily: 'GothamCondensed-Medium';
    `;
export const ConfirmButton = styled.TouchableOpacity`
        width: 40%;
        height: 65%;
        justify-content: center;
        align-items: center;
        border-radius: 7px;
        background-color: #FDC500;
    `;
export const ConfirmText = styled.Text`
        color: #fff;
        font-family: GothamCondensed-Medium;
        font-size: 28px;
`;





