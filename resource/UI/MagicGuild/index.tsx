import React, { useEffect, Fragment, FunctionComponent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';

import { useTownStateContext, TownState } from 'GameMechanics/TownState';
import { TB_MAGIC_GUILD } from 'defs/Type/TownBuildingType';

import {
    MagicGuildContainer,
    MagicGuildJogDial,
    MagicGuildExitButton
} from './style';

export const MagicGuild: FunctionComponent = observer((): ReactElement => {
    const history: History = useHistory();
    const { getBuildingLevelByType, id }: TownState = useTownStateContext();
    const level: TownBuildingLevel = getBuildingLevelByType(TB_MAGIC_GUILD);

    useEffect((): void => {
        console.log(level);
    }, [ level ]);

    const exitButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        history.push(`/advmap/town/${id}`);
    };

    return (
        <Fragment>
            <MagicGuildContainer>

            </MagicGuildContainer>
            <MagicGuildJogDial>
                <MagicGuildExitButton onClick={exitButtonClickHandler}/>
            </MagicGuildJogDial>
        </Fragment>
    );
});