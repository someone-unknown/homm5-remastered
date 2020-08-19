import styled from "styled-components";
import CheckboxUncheckedNormalTexture from "Media/Texture/Interface/Checkbox/Unchecked/Normal.png";
import CheckboxCheckedNormalTexture from "Media/Texture/Interface/Checkbox/Checked/Normal.png";
import CheckboxUncheckedDisabledTexture from "Media/Texture/Interface/Checkbox/Unchecked/Disabled.png";
import CheckboxCheckedDisabledTexture from "Media/Texture/Interface/Checkbox/Checked/Disabled.png";

export const CheckboxElement = styled.input
`
    margin: 0;
    padding: 0;
    display: block;
    position: relative;
    width: 28px;
    height: 25px;
    z-index: 0;
    overflow: hidden;
    appearance: none;
    outline: none;
    background: transparent url('${ CheckboxUncheckedNormalTexture }');
    cursor: none;
    flex-shrink: 0;

    :checked {
        background: transparent url('${ CheckboxCheckedNormalTexture }');
    }

    :disabled {
        pointer-events: none;
        background: transparent url('${ CheckboxUncheckedDisabledTexture }');
    }

    :checked:disabled {
        pointer-events: none;
        background: transparent url('${ CheckboxCheckedDisabledTexture }');
    }
`;