import styled from "styled-components";
import ListList3Texture from "Media/Texture/Interface/List/List3.png";
import ListList4Texture from "Media/Texture/Interface/List/List4.png";
import ListList5Texture from "Media/Texture/Interface/List/List5.png";

const backgrounds: Record<number, string> = {
    3: ListList3Texture,
    4: ListList4Texture,
    5: ListList5Texture,
};

interface ScrollMenuListProps
{
    count: number;
}

export const ScrollMenuList = styled.ul<ScrollMenuListProps>
`
    margin: 0;
    padding: 21px 45px 40px;
    display: flex;
    position: absolute;
    right: 60px;
    bottom: 80px;
    width: 327px;
    height: ${ ({ count }: ScrollMenuListProps): number => (count - 3) * 60 + 241 }px;
    z-index: 4;
    overflow: hidden;
    background: transparent url('${ ({ count }: ScrollMenuListProps): string => backgrounds[ count ] || backgrounds[ 4 ] }');
    box-sizing: border-box;
    flex-direction: column;
`;