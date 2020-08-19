import { action, computed, observable } from 'mobx';

import { Player } from 'GameMechanics/Type/Player';
import { TownBuilding } from 'GameMechanics/Type/TownBuilding';

interface TownConstructorParams
{
    owner: Player;
}

export class Town
{

    @observable
    private _owner: Player;

    public constructor({ owner }: TownConstructorParams)
    {
        this._owner = owner;
    }

    public set owner(value: Player)
    {
        this._owner = value;
    }

    @computed
    public get owner(): Player
    {
        return this._owner;
    }

}

export namespace Town
{

    export interface Def
    {

    }

}