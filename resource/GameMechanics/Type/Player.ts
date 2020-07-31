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

export class Player
{

    @observable
    public readonly resource: Resource = new Resource();

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