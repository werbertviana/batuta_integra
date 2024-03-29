import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';


export const Bgcontainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    backgroundColor: #fff;
`;
export const ImagesContainer = styled.SafeAreaView`
    margin-top: 2%;
    height: 65%;
    width: 90%;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around; 
    background-color: #ff4;
`;

export const ImagesContainer2 = styled.SafeAreaView`
    margin-top: 3%;
    height: 90%;
    width: 90%;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around; 
`;

export const QuestionsButton = styled.SafeAreaView`
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

export const LifeText = styled.Text`
    font-family: DINRoundPro-Medi;
    font-size: 28px;
    margin-top: 2%;
    color: #FC4848;
`;

export const ImageQuestions = styled(FastImage)`
    margin-top: 2%;
    width: 80%;
    height: 85%;
    margin: 4%;
`;

export const ImageNivel = styled(FastImage)`
    width: 40px;
    height: 41px;
`;

export const ImageSound = styled(FastImage)`
    width: 40px;
    height: 40px;
    margin: 2px;
`;

export const ImageModal = styled(FastImage)`
    width: 35px;
    height: 35px;
`;

export const HeaderContainer = styled.SafeAreaView`
    margin-top: 2%;
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

export const DivisorLine2 = styled.SafeAreaView`
    width: 100%;
    height: 2px;
    background-color: #D2D3D5;
    `;

export const DivisorLine3 = styled.SafeAreaView`
    width: 30%;
    height: 2px;
    background-color: #D2D3D5;
    transform: { rotate: '90deg' };
    `;

export const ButtonContainer = styled.SafeAreaView`
    margin-top: 1%;
    height: 10%;
    width: 90%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;
export const CloseButtonContainer = styled.TouchableOpacity`
    align-items: center;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const JumpText = styled.Text`
        color: black;
        fontSize: 28px;
        fontFamily: 'GothamCondensed-Medium';
    `;

export const ConfirmButton = styled.TouchableOpacity`    
    width: 100%;
    height: 94%;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    background-color: ${props => props.bg};
`;

export const StyleButtons = styled.SafeAreaView`  
    width: 100%;
    height: 94%;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    background-color: ${props => props.bg};
    border-color: ${props => props.bordercolor};
    border-width: ${props => props.borderwidth};
`;

export const ShadowJumpButton = styled.TouchableOpacity`  
    margin-top: 3%;
    width: 40%;
    height: 70%;
    align-items: center;
    border-radius: 14px;
    background-color: #D2D3D5;
`;
export const ShadowButton = styled.SafeAreaView`
    margin-top: 3%;
    width: 40%;
    height: 70%;
    align-items: center;
    border-radius: 14px;
    background-color: ${props => props.color};
`;

export const IconImages = styled(FastImage)`
    width: 40px;
    height: 40px; 
`;

export const IconImages02 = styled(FastImage)`
    width: 45px;
    height: 45px; 
`;

export const ImagesFeeds = styled(FastImage)`
    width: 125px;
    height: 125px; 
`;

export const IconLesson = styled(FastImage)`
    width: 260px;
    height: 100px; 
`;

export const ContainerCircle = styled.SafeAreaView`
    height: 14%;
    width: 100%;
    align-items: flex-end; 
`;

export const Circle = styled.SafeAreaView`
        width: 30px;
        height: 30px;
        border-radius: 15px;
        border-width: 3px;
        align-items: center;
        border-color: #D2D3D5;
        justify-content: center;
`;