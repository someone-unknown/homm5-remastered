import { action, computed, observable } from 'mobx';

interface HeroConstructorParams
{
    attack: number;
    defense: number;
    spellpower: number;
    knowledge: number;
}

export class Hero
{

    @observable
    private _attack: number;

    @observable
    private _defense: number;

    @observable
    private _spellpower: number;

    @observable
    private _knowledge: number;

    public constructor({ attack, defense, spellpower, knowledge }: HeroConstructorParams)
    {
        this._attack = attack;
        this._defense = defense;
        this._spellpower = spellpower;
        this._knowledge = knowledge;
    }

    public set attack(value: number)
    {
        this._attack = value < 0 ? 0 : value;
    }

    public set defense(value: number)
    {
        this._defense = value < 0 ? 0 : value;
    }

    public set spellpower(value: number)
    {
        this._spellpower = value < 0 ? 0 : value;
    }

    public set knowledge(value: number)
    {
        this._knowledge = value < 0 ? 0 : value;
    }

    @computed
    public get attack(): number
    {
        return this._attack;
    }

    @computed
    public get defense(): number
    {
        return this._defense;
    }

    @computed
    public get spellpower(): number
    {
        return this._spellpower;
    }

    @computed
    public get knowledge(): number
    {
        return this._knowledge;
    }

}