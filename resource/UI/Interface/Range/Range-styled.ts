import styled from "styled-components";
import RangeDisabledTexture from "Media/Texture/Interface/Range/Disabled.png";
import RangeNormalTexture from "Media/Texture/Interface/Range/Normal.png";
import RangeTrackNormalTexture from "Media/Texture/Interface/Range/Track/Normal.png";
import RangeTrackPushedTexture from "Media/Texture/Interface/Range/Track/Pushed.png";
import RangeTrackDisabledTexture from "Media/Texture/Interface/Range/Track/Disabled.png";
import RangeMarkerDisabledTexture from "Media/Texture/Interface/Range/Marker/Disabled.png";
import RangeMarkerNormalTexture from "Media/Texture/Interface/Range/Marker/Normal.png";
import HorizontalScrollbarLeftNormalTexture from "Media/Texture/Interface/HorizontalScrollbar/Left/Normal.png";
import HorizontalScrollbarLeftPushedTexture from "Media/Texture/Interface/HorizontalScrollbar/Left/Pushed.png";
import HorizontalScrollbarLeftDisabledTexture from "Media/Texture/Interface/HorizontalScrollbar/Left/Disabled.png";
import HorizontalScrollbarRightNormalTexture from "Media/Texture/Interface/HorizontalScrollbar/Right/Normal.png";
import HorizontalScrollbarRightPushedTexture from "Media/Texture/Interface/HorizontalScrollbar/Right/Pushed.png";
import HorizontalScrollbarRightDisabledTexture from "Media/Texture/Interface/HorizontalScrollbar/Right/Disabled.png";

interface RangeContainerProps
{
    disabled: boolean;
}

export const RangeContainer = styled.div<RangeContainerProps>
`
    margin: 0;
    padding: 4px;
    display: flex;
    position: relative;
    width: 201px;
    height: 24px;
    z-index: 0;
    overflow: hidden;
    box-sizing: border-box;
    flex-direction: row;
    background: transparent url('${ ({ disabled }: RangeContainerProps): string => disabled ? RangeDisabledTexture : RangeNormalTexture }');
    pointer-events: ${ ({ disabled }: RangeContainerProps): string => disabled ? 'none' : 'all' };
`;

export const RangeElement = styled.input
`
    margin: 0;
    padding: 0;
    display: block;
    position: relative;
    width: 161px;
    height: 16px;
    z-index: 0;
    overflow: hidden;
    appearance: none;
    outline: none;
    background: transparent;
    cursor: none;

    :disabled {
        pointer-event: none;
    }

    &::-webkit-slider-thumb {
        width: 16px;
        height: 16px;
        appearance: none;
        background: transparent url('${ RangeTrackNormalTexture }');
    }

    &:active::-webkit-slider-thumb {
        background: transparent url('${ RangeTrackPushedTexture }');
    }

    &:disabled::-webkit-slider-thumb {
        background: transparent url('${ RangeTrackDisabledTexture }');
    }
`;

export const RangeMarkerList = styled.div
`
    margin: 0;
    padding: 0 8px;
    display: flex;
    position: absolute;
    top: 4px;
    left: 20px;
    width: 161px;
    height: 16px;
    overflow: hidden;
    z-index: -1;
    pointer-events: none;
    box-sizing: border-box;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

interface RangeMarkerProps
{
    disabled: boolean;
}

export const RangeMarker = styled.div
`
    width: 3px;
    height: 14px;
    flex-shrink: 0;
    background: transparent url('${ ({ disabled }: RangeMarkerProps): string => disabled ? RangeMarkerDisabledTexture : RangeMarkerNormalTexture }');
`;

export const RangeButton = styled.button
`
    margin: 0;
    padding: 0;
    display: block;
    position: relative;
    width: 16px;
    height: 16px;
    z-index: 0;
    overflow: hidden;
    border: none;
    outline: none;
    flex-shrink: 0;
    cursor: none;

    :disabled {
        pointer-event: none;
    }
`;

export const RangeButtonLeft = styled(RangeButton)
`
    background: transparent url('${ HorizontalScrollbarLeftNormalTexture }');

    :active {
        background: transparent url('${ HorizontalScrollbarLeftPushedTexture }');
    }

    :disabled {
        background: transparent url('${ HorizontalScrollbarLeftDisabledTexture }');
    }
`;

export const RangeButtonRight = styled(RangeButton)
`
    background: transparent url('${ HorizontalScrollbarRightNormalTexture }');

    :active {
        background: transparent url('${ HorizontalScrollbarRightPushedTexture }');
    }

    :disabled {
        background: transparent url('${ HorizontalScrollbarRightDisabledTexture }');
    }
`;