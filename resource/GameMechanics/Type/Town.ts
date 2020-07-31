import { action, computed, observable } from 'mobx';

import { Player } from 'GameMechanics/Type/Player';
import { TownBuilding } from 'GameMechanics/Type/TownBuilding';

interface TownConstructorParams
{
    owner: Player;
    buildings: TownBuilding[];
}

export class Town
{

    @observable
    private _owner: Player;

    public constructor({ owner, buildings }: TownConstructorParams)
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