import React, { useEffect, useState, Fragment, FunctionComponent, MouseEvent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';

import { useAdvMapStateContext, AdvMapState } from 'GameMechanics/AdvMapState';

import {
    MarketplaceWrapper,
    MarketplaceLeftResourceColumn,
    MarketplaceRightResourceColumn,
    MarketplaceResourceItem,
    MarketplaceResourceIcon,
    MarketplaceResourceCount,
    MarketplaceJogDial,
    MarketplaceExitButton1
} from 'UI/Marketplace/style';

import { Wood } from 'Media/Texture/Resource/Wood';
import { Ore } from 'Media/Texture/Resource/Ore';
import { Mercury } from 'Media/Texture/Resource/Mercury';
import { Crystal } from 'Media/Texture/Resource/Crystal';
import { Sulfur } from 'Media/Texture/Resource/Sulfur';
import { Gem } from 'Media/Texture/Resource/Gem';
import { Gold } from 'Media/Texture/Resource/Gold';


type SelectedResource = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export const Marketplace: FunctionComponent = observer((): ReactElement => {
    const history: History = useHistory();

    const [ baseExchange, setBaseExchange ] = useState<[ number, number ]>([ 1, 10 ]);
    const [ rareExchange, setRareExchange ] = useState<[ number, number ]>([ 1, 20 ]);
    const [ goldExchange, setGoldExchange ] = useState<[ number, number ]>([ 25, 1 ]);
    const [ leftResource, setLeftResource ] = useState<SelectedResource>(1);
    const [ rightResource, setRightResource ] = useState<SelectedResource>(7);
    const { wood, ore, mercury, crystal, sulfur, gem, gold }: AdvMapState = useAdvMapStateContext();

    const exitButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        history.goBack();
    };

    const resourceMapping: [ number, string ][] = [
        [ wood, Wood ],
        [ ore, Ore ],
        [ mercury, Mercury ],
        [ crystal, Crystal ],
        [ sulfur, Sulfur ],
        [ gem, Gem ],
        [ gold, Gold ],
    ];

    const formatExchange = (selectedResource: number): string => {
        if (leftResource === selectedResource)
        {
            return '-------';
        }

        if ([ 1, 2 ].includes(selectedResource))
        {
            return `${baseExchange[0]}/${baseExchange[1]}`;
        }

        if ([ 3, 4, 5, 6 ].includes(selectedResource))
        {
            return `${rareExchange[0]}/${rareExchange[1]}`;
        }

        if (selectedResource === 7)
        {
            return `${goldExchange[0]}/${goldExchange[1]}`;
        }
    };

    useEffect((): void => {
        if ([ 1, 2 ].includes(leftResource))
        {
            setBaseExchange([ 1, 10 ]);
            setRareExchange([ 1, 20 ]);
            setGoldExchange([ 25, 1 ]);
        }
        else if ([ 3, 4, 5, 6 ].includes(leftResource))
        {
            setBaseExchange([ 1, 5 ]);
            setRareExchange([ 1, 10 ]);
            setGoldExchange([ 50, 1 ]);
        }
        else {
            setBaseExchange([ 2500, 1 ]);
            setRareExchange([ 5000, 1 ]);
            setGoldExchange([ 1, 1 ]);
        }
    }, [ leftResource ]);

    return (
        <Fragment>
            <MarketplaceWrapper>
                <MarketplaceLeftResourceColumn>
                    {resourceMapping.map(([ count, icon ]: [ number, string ], index: number): ReactElement => (
                        <MarketplaceResourceItem
                            key={index + 1}
                            active={leftResource === (index + 1)}
                            onClick={(event: MouseEvent<HTMLLIElement>): void => {
                                event.preventDefault();
                                setLeftResource(index + 1 as SelectedResource);
                            }}
                        >
                            <MarketplaceResourceIcon src={icon}/>
                            <MarketplaceResourceCount>{count}</MarketplaceResourceCount>
                        </MarketplaceResourceItem>
                    ))}
                </MarketplaceLeftResourceColumn>
                <MarketplaceRightResourceColumn>
                    {resourceMapping.map(([ count, icon ]: [ number, string ], index: number): ReactElement => (
                        <MarketplaceResourceItem
                            key={index + 1}
                            active={rightResource === (index + 1)}
                            onClick={(event: MouseEvent<HTMLLIElement>): void => {
                                event.preventDefault();
                                setRightResource(index + 1 as SelectedResource);
                            }}
                        >
                            <MarketplaceResourceIcon src={icon}/>
                            <MarketplaceResourceCount>{formatExchange(index + 1)}</MarketplaceResourceCount>
                        </MarketplaceResourceItem>
                    ))}
                </MarketplaceRightResourceColumn>
            </MarketplaceWrapper>
            <MarketplaceJogDial>
                <MarketplaceExitButton1 onClick={exitButtonClickHandler}/>
            </MarketplaceJogDial>
        </Fragment>
    );
});