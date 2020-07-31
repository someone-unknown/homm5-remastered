import React, { useEffect, useState, FunctionComponent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';

import { MagicGuild } from 'UI/MagicGuild';
import { Marketplace } from 'UI/Marketplace';
import { TownBuild } from 'UI/TownBuild';

import {
    BuildButton,
    BuyButton,
    ExitTownButton,
    InfoButton,
    JogDialLeft,
    JogDialRight,
    MarketplaceButton,
    TavernButton,
    BlackMarketButton,
    BlacksmithButton,
    ShipyardButton,
    MagicGuildButton,
    PrevTownButton,
    NextTownButton,
    UpgradeButton
} from 'UI/TownScreen/style';

export interface TownScreenProps
{
    id: string;
}

export const TownScreen: FunctionComponent<TownScreenProps> = observer(({ id }: TownScreenProps): ReactElement => {
    return <span>Town Screen</span>;
});