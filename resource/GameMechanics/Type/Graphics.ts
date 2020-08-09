import { action, computed, observable } from 'mobx';
import { ipcRenderer } from 'electron';

export type CursorType = 'default' | 'pointer' | 'none';

export class Graphics
{

    @observable
    private _fullscreen: boolean = true;

    @observable
    private _cursor: CursorType = 'none';

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

    public set cursor(value: CursorType)
    {
        this._cursor = value;
    }

    @computed
    public get fullscreen(): boolean
    {
        return this._fullscreen;
    }

    @computed
    public get cursor(): CursorType
    {
        return this._cursor;
    }

}