import React, {
    useCallback,
    useEffect,
    useMemo,
    useState,
    ChangeEvent,
    DetailedHTMLProps,
    EffectCallback,
    Fragment,
    FunctionComponent,
    HTMLAttributes,
    MouseEvent,
    ReactElement
} from 'react';
import { observer } from 'mobx-react';

import { Hero } from 'GameMechanics/Type/Hero';
import { Global } from 'GameMechanics/Type/Global';

import {
    ListBarContainer,
    ListBarFrame,
    ListBarFrameLeft,
    ListBarFrameCenter,
    ListBarFrameRight,
    ListBarFrameContent,
    ListBarFrameList,
    ListBarFrameListItem,
    ListBarHeroIcon,
    ListBarHeroManaBarContainer,
    ListBarHeroManaBar,
    ListBarHeroMovepointsBarContainer,
    ListBarHeroMovepointsBar,
    ListBarShowHideCheckbox
} from 'UI/ListBar/style';

export type ListBarProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>;

export const ListBar: FunctionComponent<ListBarProps> = observer((props): ReactElement => {

    const { adventureMap, graphics }: Global = Global.useContext();
    const [ open, setOpen ] = useState<boolean>(true);
    const [ index, setIndex ] = useState<number>(0);

    const defs: Hero.Def[] = [
        Hero.Def.HERO_LUCRETIA,
        Hero.Def.HERO_KASPAR,
        Hero.Def.HERO_NAADIR,
        Hero.Def.HERO_VLADIMIR
    ];

    const showHideCheckboxChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
        setOpen(event.target.checked);
    }, [ setOpen ]);

    const listBarItemMouseOutHandler = useCallback((event: MouseEvent<HTMLLIElement>): void => {
        event.preventDefault();
        graphics.cursor = 'default';
    }, [ graphics ]);

    const listBarItemMouseOverHandler = useCallback((event: MouseEvent<HTMLLIElement>): void => {
        event.preventDefault();
        graphics.cursor = 'pointer';
    }, [ graphics ]);

    useEffect((): EffectCallback => {
        const interval = setInterval((): void => {
            if (defs[index])
            {
                adventureMap.addHero( new Hero({ def: defs[index] }) );
                setIndex(index + 1);
            }
            else
            {
                clearInterval(interval);
            }
        }, 500);

        return (): void => {
            clearInterval(interval);
        }
    }, [ index ]);

    return (
        <ListBarContainer { ...props }>
            <ListBarFrame open={ open }>
                <ListBarFrameLeft/>
                <ListBarFrameCenter/>
                <ListBarFrameRight/>
                <ListBarFrameContent>
                    <ListBarFrameList>
                        { adventureMap.players[ adventureMap.currentPlayer ].heroes.map((hero: Hero): ReactElement => (
                            <ListBarFrameListItem
                                key={ hero.def.uuid }
                                onMouseOut={ listBarItemMouseOutHandler }
                                onMouseOver={ listBarItemMouseOverHandler }
                            >
                                <ListBarHeroIcon src={ hero.def.icon }/>
                                <ListBarHeroManaBarContainer>
                                    <ListBarHeroManaBar
                                        style={{
                                            transform: `translate3d(-${ 80 }%, 0, 0)`
                                        }}
                                    />
                                </ListBarHeroManaBarContainer>
                                <ListBarHeroMovepointsBarContainer>
                                    <ListBarHeroMovepointsBar
                                        style={{
                                            transform: `translate3d(-${ 40 }%, 0, 0)`
                                        }}
                                    />
                                </ListBarHeroMovepointsBarContainer>
                            </ListBarFrameListItem>
                        )) }
                    </ListBarFrameList>
                    <ListBarFrameList>
                        <ListBarFrameListItem
                            tabIndex={ -1 }
                            onMouseOut={ listBarItemMouseOutHandler }
                            onMouseOver={ listBarItemMouseOverHandler }
                        >

                        </ListBarFrameListItem>
                    </ListBarFrameList>
                </ListBarFrameContent>
            </ListBarFrame>
            <ListBarShowHideCheckbox
                checked={ open }
                onChange={ showHideCheckboxChangeHandler }
            />
        </ListBarContainer>
    );

});