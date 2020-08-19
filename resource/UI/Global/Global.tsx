import React, { FunctionComponent, ReactElement } from 'react';
import { Provider as MobXProvider } from 'mobx-react';
import { Route, Router, Switch } from 'react-router-dom';
import { createHashHistory, History } from 'history';
import { CursorOverlay } from 'UI/CursorOverlay';
import { Intro } from 'UI/Intro';
import { MainMenu } from 'UI/MainMenu';
import { PwlScreen } from 'UI/PwlScreen';
import { Singleplayer } from 'UI/Singleplayer';
import { SelectScenario } from 'UI/SelectScenario';
import { Options } from 'UI/Options';
import { GameplayOptions } from 'UI/GameplayOptions';
import { GraphicsOptions } from 'UI/GraphicsOptions';
import { GameLogo } from 'UI/GameLogo';
import { MenuBackground } from 'UI/MenuBackground';
import { AdventureMap } from 'UI/AdventureMap';
import { Global as GlobalState } from 'GameMechanics/Type/Global';
import { Language } from 'GameMechanics/Type/Language';
import { GlobalStyle } from './Global-styled';

const history: History = createHashHistory();

/**
 * Компонент-роутинг главной страницы
 */
export const Global: FunctionComponent = (): ReactElement => (
    <MobXProvider>
        <GlobalState.Provider>
            <Language.Provider>
                <GlobalStyle/>
                <CursorOverlay/>
                <Router history={ history }>
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
                            <Route path="/menu/singleplayer" exact>
                                <Singleplayer/>
                            </Route>
                            <Route path="/menu/singleplayer/scenario" exact>
                                <SelectScenario/>
                            </Route>
                            <Route path="/menu/options" exact>
                                <Options/>
                            </Route>
                            <Route path="/menu/options/gameplay" exact>
                                <GameplayOptions/>
                            </Route>
                            <Route path="/menu/options/graphics" exact>
                                <GraphicsOptions/>
                            </Route>
                        </Route>
                        <Route path="/:uuid/pwl">
                            <PwlScreen/>
                        </Route>
                        <Route path="/:uuid/advmap">
                            <AdventureMap/>
                        </Route>
                    </Switch>
                </Router>
            </Language.Provider>
        </GlobalState.Provider>
    </MobXProvider>
);