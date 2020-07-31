import { computed, observable } from 'mobx';

export class Resource
{

    @observable
    private _wood: number = 0;

    @observable
    private _ore: number = 0;

    @observable
    private _mercury: number = 0;

    @observable
    private _crystal: number = 0;

    @observable
    private _sulfur: number = 0;

    @observable
    private _gem: number = 0;

    @observable
    private _gold: number = 0;

    public set wood(value: number)
    {
        this._wood = value < 0 ? 0 : value;
    }

    public set ore(value: number)
    {
        this._ore = value < 0 ? 0 : value;
    }

    public set mercury(value: number)
    {
        this._mercury = value < 0 ? 0 : value;
    }

    public set crystal(value: number)
    {
        this._crystal = value < 0 ? 0 : value;
    }

    public set sulfur(value: number)
    {
        this._sulfur = value < 0 ? 0 : value;
    }

    public set gem(value: number)
    {
        this._gem = value < 0 ? 0 : value;
    }

    public set gold(value: number)
    {
        this._gold = value < 0 ? 0 : value;
    }

    @computed
    public get wood(): number
    {
        return this._wood;
    }

    @computed
    public get ore(): number
    {
        return this._ore;
    }

    @computed
    public get mercury(): number
    {
        return this._mercury;
    }

    @computed
    public get crystal(): number
    {
        return this._crystal;
    }

    @computed
    public get sulfur(): number
    {
        return this._sulfur;
    }

    @computed
    public get gem(): number
    {
        return this._gem;
    }

    @computed
    public get gold(): number
    {
        return this._gold;
    }

}