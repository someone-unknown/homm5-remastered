import React, { useCallback, useMemo, Fragment, FunctionComponent, MouseEvent, ReactElement } from 'react';
import { observer } from 'mobx-react';

import { ResourceBar } from 'UI/ResourceBar';
import { HourglassButton } from 'UI/Interface/HourglassButton';

import { Global } from 'GameMechanics/Type/Global';

import {
    AdventureMapInterfacePanel,
    AdventureMapMinimap,
    AdventureMapListBar,
    AdventureMapJogDial,
    AdventureMapMenuButton,
    AdventureMapMoveHeroButton,
    AdventureMapScenarioButton,
    AdventureMapSpellbookButton,
    AdventureMapUndergroundButton
} from 'UI/AdventureMap/style';

// TODO: Добавить описание компонента
export const AdventureMap: FunctionComponent = observer((): ReactElement => {

    const { adventureMap }: Global = Global.useContext();

    const centerButtonClickHandler = useCallback((event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        adventureMap.endTurn();
    }, [ adventureMap ]);

    const centerButton: ReactElement = useMemo((): ReactElement => (
        <HourglassButton onClick={ centerButtonClickHandler }/>
    ), [ centerButtonClickHandler ]);

    return (
        <Fragment>
            <ResourceBar/>
            <AdventureMapInterfacePanel>
                <AdventureMapMinimap/>
                <AdventureMapListBar/>
                <AdventureMapJogDial
                    topLeftButton={ null }
                    topRightButton={ <AdventureMapScenarioButton size="small"/> }
                    leftButton={ <AdventureMapMoveHeroButton size="small"/> }
                    centerButton={ centerButton }
                    rightButton={ <AdventureMapUndergroundButton size="small"/> }
                    bottomLeftButton={ <AdventureMapSpellbookButton size="small"/> }
                    bottomRightButton={ <AdventureMapMenuButton size="small"/> }
                />
            </AdventureMapInterfacePanel>
        </Fragment>
    );

});