import styled from "styled-components";
import ShowHideCheckboxUncheckedNormalTexture from "Media/Texture/Interface/ShowHideCheckbox/Unchecked/Normal.png";
import ShowHideCheckboxUncheckedPushedTexture from "Media/Texture/Interface/ShowHideCheckbox/Unchecked/Pushed.png";
import ShowHideCheckboxCheckedNormalTexture from "Media/Texture/Interface/ShowHideCheckbox/Checked/Normal.png";
import ShowHideCheckboxCheckedPushedTexture from "Media/Texture/Interface/ShowHideCheckbox/Checked/Pushed.png";

export const ShowHideCheckboxElement = styled.input
`
    margin: 0;
    padding: 0;
    display: block;
    position: absolute;
    top: 3px;
    left: 15px;
    width: 37px;
    height: 37px;
    background: transparent url('${ ShowHideCheckboxUncheckedNormalTexture }');
    border: none;
    border-radius: 50%;
    outline: none;
    z-index: 1;
    appearance: none;
    cursor: none;

    :active {
        background: transparent url('${ ShowHideCheckboxUncheckedPushedTexture }');
    }

    :checked {
        background: transparent url('${ ShowHideCheckboxCheckedNormalTexture }');
    }

    :checked:active {
        background: transparent url('${ ShowHideCheckboxCheckedPushedTexture }');
    }
`;