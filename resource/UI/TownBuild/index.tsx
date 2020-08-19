import React, { createElement, useEffect, useState, EffectCallback, Fragment, FunctionComponent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';

import { useTownStateContext, TownState } from 'GameMechanics/TownState';

import {
    TownBuildExitButton,
    TownBuildJogDial,
    TownBuildWrapper,
    TownBuildTitle,
    TownBuildContent,
    TownBuildRow,
    TownBuildCell,
    TownBuildIcon,
    TownBuildArrow1,
    TownBuildArrow2,
    TownBuildArrow3
} from 'UI/TownBuild/style';

export const TownBuild: FunctionComponent = observer((): ReactElement => {
    const history: History = useHistory();
    const { build, canBuild, getArrowsByCoordinate, getBuildingsByCoordinate, id, isBuilt, level, matchBuildRequirements }: TownState = useTownStateContext();

    // const [ isExpanded, setIsExpanded ] = useState<boolean>(false);

    const exitButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        history.push(`/advmap/town/${id}`);
    };

    const documentKeyUpHandler = (event: KeyboardEvent): void => {
        switch (event.key.toLowerCase())
        {
            case 'escape':
                {
                    event.preventDefault();
                    history.push(`/advmap/town/${id}`);
                }
                break;
        }
    };

    useEffect((): EffectCallback => {
        document.addEventListener('keyup', documentKeyUpHandler);

        return (): void => {
            document.removeEventListener('keyup', documentKeyUpHandler);
        };
    });

    return (
        <Fragment>
            <TownBuildWrapper>
                <TownBuildTitle>{`Уровень города: ${level}`}</TownBuildTitle>
                <TownBuildContent>
                    {[1, 2, 3, 4, 5, 6].map((posY: number): ReactElement => (
                        <TownBuildRow key={posY}>
                            {[1, 2, 3, 4, 5].map((posX: number): ReactElement => {
                                const arrows: TownArrow[] = getArrowsByCoordinate(posX, posY);
                                const buildings: TownBuilding[] = getBuildingsByCoordinate(posX, posY);

                                if (buildings.length === 0)
                                {
                                    return (
                                        <Fragment key={`${posX}:${posY}`}>
                                            <TownBuildCell empty/>
                                        </Fragment>
                                    );
                                }

                                const building: TownBuilding = buildings.reduce((accumulator: TownBuilding, building: TownBuilding): TownBuilding => matchBuildRequirements(building) ? building : accumulator, buildings[0]);

                                return (
                                    <Fragment key={`${posX}:${posY}`}>
                                        <TownBuildCell
                                            tabIndex={-1}
                                            built={isBuilt(building)}
                                            buildable={canBuild(building)}
                                            zIndex={buildings.indexOf(building)}
                                            onDoubleClick={(event: React.MouseEvent<HTMLDivElement>): void => {
                                                event.preventDefault();
                                                build(building);
                                            }}
                                        >
                                            <TownBuildIcon src={building.icon}/>
                                            {arrows.map((arrow: TownArrow, index: number): ReactElement => createElement([TownBuildArrow1, TownBuildArrow2, TownBuildArrow3][arrow.length - 1], { key: `${posX}:${posY}:${index}` }))}
                                        </TownBuildCell>
                                    </Fragment>
                                );
                            })}
                        </TownBuildRow>
                    ))}
                </TownBuildContent>
            </TownBuildWrapper>
            <TownBuildJogDial>
                <TownBuildExitButton onClick={exitButtonClickHandler}/>
            </TownBuildJogDial>
        </Fragment>
    );

});