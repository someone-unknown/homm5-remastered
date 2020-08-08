import { action, computed, observable } from 'mobx';

export class Profile
{

    @observable
    private _name: string = localStorage.getItem('profile.name');

    public set name(value: string)
    {
        localStorage.setItem('profile.name', value);
        this._name = value;
    }

    @computed
    public get name(): string
    {
        return this._name;
    }

}