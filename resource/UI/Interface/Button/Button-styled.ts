import styled from "styled-components";
import ButtonPushedTexture from "Media/Texture/Interface/Button/Pushed.png";
import ButtonDisabledTexture from "Media/Texture/Interface/Button/Disabled.png";
import ButtonNormalTexture from "Media/Texture/Interface/Button/Normal.png";

export const StyledButtonContainer = styled.div
`
    padding: 10px;
    display: flex;
    position: relative;
    width: 136px;
    height: 49px;
    z-index: 0;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`;

export const StyledButtonElement = styled.button
`
    margin: 0;
    padding: 0;
    display: flex;
    width: 116px;
    height: 29px;
    border: none;
    border-radius: 6px;
    background: transparent;
    outline: none;
    cursor: none;
    align-items: center;
    justify-content: center;
    color: #ffbf60;
    font-family: 'Tahoma', sans-serif;
    font-weight: bold;
    font-size: 15px;
    z-index: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex-wrap: wrap;

    :active ~ div {
        background: transparent url('${ ButtonPushedTexture }');
    }

    :hover {
        background: radial-gradient(ellipse at center, rgba(255, 0, 255, 0.2), rgba(255, 0, 255, 0.03)), rgba(255, 0, 255, 0.03);
    }

    :disabled {
        pointer-events: none;

        & ~ div {
            background: transparent url('${ ButtonDisabledTexture }');
        }
    }
`;

export const StyledButtonBackground = styled.div
`
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 136px;
    height: 49px;
    z-index: 0;
    background: transparent url('${ ButtonNormalTexture }');
`;