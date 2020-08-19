import { action, computed, observable } from 'mobx';

import { Resource } from 'GameMechanics/Type/Resource';

interface ResourceStruct
{
    wood: number;
    ore: number;
    mercury: number;
    crystal: number;
    sulfur: number;
    gem: number;
    gold: number;
}

import { Hero } from 'GameMechanics/Type/Hero';
import { Town } from 'GameMechanics/Type/Town';

interface PlayerConstructorParams
{
    heroes?: Hero[];
    resource?: Resource;
    towns?: Town[];
}

export class Player
{

    @observable
    public readonly heroes: Hero[];

    @observable
    public readonly resource: Resource;

    @observable
    public readonly towns: Town[];

    public constructor({ heroes = [], resource = new Resource(), towns = [] }: PlayerConstructorParams)
    {
        this.heroes = heroes;
        this.resource = resource;
        this.towns = towns;
    }


    @action
    public setPlayerResource = ({ wood, ore, mercury, crystal, sulfur, gem, gold }: ResourceStruct): void => {
        this.resource.wood = wood;
        this.resource.ore = ore;
        this.resource.mercury = mercury;
        this.resource.crystal = crystal;
        this.resource.sulfur = sulfur;
        this.resource.gem = gem;
        this.resource.gold = gold;
    };

}

export namespace Player
{
    export enum Index
    {
        PLAYER_1 = 1,
        PLAYER_2 = 2,
        PLAYER_3 = 3,
        PLAYER_4 = 4,
        PLAYER_5 = 5,
        PLAYER_6 = 6,
        PLAYER_7 = 7,
        PLAYER_8 = 8,
    }
}