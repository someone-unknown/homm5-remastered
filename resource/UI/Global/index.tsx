import React, { FunctionComponent, ReactElement } from 'react';
import { Provider as MobXProvider } from 'mobx-react';
import { Route, Router, Switch } from 'react-router-dom';
import { createHashHistory, History } from 'history';

import { GlobalStyle } from 'UI/Global/style';
import { Intro } from 'UI/Intro';
import { MainMenu } from 'UI/MainMenu';
import { Options } from 'UI/Options';
import { GameplayOptions } from 'UI/GameplayOptions';
import { GameLogo } from 'UI/GameLogo';
import { MenuBackground } from 'UI/MenuBackground';

import { Global as GlobalState } from 'GameMechanics/Type/Global';
import { Language } from 'GameMechanics/Type/Language';

const history: History = createHashHistory();

export const Global: FunctionComponent = (): ReactElement => (
    <MobXProvider>
        <GlobalState.Provider>
            <Language.Provider>
                <GlobalStyle/>
                <Router history={history}>
                    <Switch>
                        <Route path="/" exact>
                            <Intro redirectTo="/menu"/>
                        </Route>
                        <Route path="/menu">
                            <MenuBackground/>
                            <GameLogo/>
                            <Route path="/menu" exact>
                                <MainMenu/>
                            </Route>
                            <Route path="/menu/options" exact>
                                <Options/>
                            </Route>
                            <Route path="/menu/options/gameplay" exact>
                                <GameplayOptions/>
                            </Route>
                        </Route>
                    </Switch>
                </Router>
            </Language.Provider>
        </GlobalState.Provider>
    </MobXProvider>
);