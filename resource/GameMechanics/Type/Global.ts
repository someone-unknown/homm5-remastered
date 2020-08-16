import { observable } from 'mobx';
import { createContext, createElement, useContext, Context, FunctionComponent, ReactElement } from 'react';
import { observer, useObserver } from 'mobx-react';

import { AdventureMap } from 'GameMechanics/Type/AdventureMap';
import { Graphics } from 'GameMechanics/Type/Graphics';
import { Language } from 'GameMechanics/Type/Language';
import { Music } from 'GameMechanics/Type/Music';
import { Profile } from 'GameMechanics/Type/Profile';
import { Scenario } from 'GameMechanics/Type/Scenario';

export class Global
{

    public static readonly Context: Context<Global> = createContext<Global>( new Global() );
    public static readonly Provider: FunctionComponent = observer(({ children }): ReactElement => {
        return createElement(Global.Context.Provider, {
            value: new Global(),
            children
        });
    });

    public static useContext = (): Global => {
        const state: Global = useContext<Global>(Global.Context);
        return useObserver<Global>((): Global => state);
    }

    @observable
    public readonly music: Music = new Music();

    @observable
    public readonly language: Language = new Language();

    @observable
    public readonly graphics: Graphics = new Graphics();

    @observable
    public readonly profile: Profile = new Profile();

    @observable
    public readonly scenario: Scenario = new Scenario();

    @observable
    public readonly adventureMap: AdventureMap = new AdventureMap({});

}