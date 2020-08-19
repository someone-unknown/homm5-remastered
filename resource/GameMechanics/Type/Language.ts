import { action, computed, observable } from 'mobx';
import { createElement, FunctionComponent, ReactElement } from 'react';
import { observer } from 'mobx-react';
import { IntlProvider } from 'react-intl';

import { Global } from 'GameMechanics/Type/Global';

import { en_US } from 'Text/en-US';
import { ru_RU } from 'Text/ru-RU';
import { pl_PL } from 'Text/pl-PL';

export type Locale = 'en-US' | 'ru-RU' | 'pl-PL';

export class Language
{

    private static readonly _vocabulary: Record<Locale, Record<string, string>> = {
        'en-US': en_US,
        'ru-RU': ru_RU,
        'pl-PL': pl_PL,
    };

    public static readonly Provider: FunctionComponent = observer(({ children }): ReactElement => {
        const { language }: Global = Global.useContext();

        return createElement(IntlProvider, {
            locale: language.locale,
            messages: Language._vocabulary[language.locale],
            children
        });
    });

    @observable
    private _locale: Locale = localStorage.getItem('option.language.locale') as Locale || 'en-US';

    public set locale(value: Locale)
    {
        localStorage.setItem('option.language.locale', value);
        this._locale = value;
    }

    @computed
    public get locale(): Locale
    {
        return this._locale;
    }

}