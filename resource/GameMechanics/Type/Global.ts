import { observable } from 'mobx';
import { createContext, createElement, useContext, Context, FunctionComponent, ReactElement } from 'react';
import { observer, useObserver } from 'mobx-react';

import { Language } from 'GameMechanics/Type/Language';
import { Sound } from 'GameMechanics/Type/Sound';

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
    public readonly sound: Sound = new Sound();

    @observable
    public readonly language: Language = new Language();

}