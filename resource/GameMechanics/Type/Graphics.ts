import { action, computed, observable } from 'mobx';
import { ipcRenderer } from 'electron';

export class Graphics
{

    @observable
    private _fullscreen: boolean = true;

    public constructor()
    {
        // ...
    }


    public set fullscreen(value: boolean)
    {
        if (this._fullscreen !== value)
        {
            ipcRenderer.send('graphics:fullscreen', value);
            this._fullscreen = value;
        }
    }

    @computed
    public get fullscreen(): boolean
    {
        return this._fullscreen;
    }

}