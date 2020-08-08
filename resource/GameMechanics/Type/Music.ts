import { EventEmitter } from 'events';
import { action, computed, observable } from 'mobx';

export class Music extends EventEmitter
{
    private readonly _audio: HTMLAudioElement = new Audio();

    private _playable: boolean = false;

    @observable
    private _src: string = null;

    @observable
    private _autoplay: boolean = false;

    @observable
    private _volume: number = parseFloat(localStorage.getItem('options.music.volume') || '1');

    @observable
    private _loop: boolean = false;

    public constructor()
    {
        super();
        this._audio.addEventListener('canplaythrough', async (): Promise<void> => {
            this._audio.loop = this._loop;
            this._playable = true;
            this._audio.volume = this._volume;

            if (this._autoplay)
            {
                await this._audio.play();
            }

            this.emit('canplaythrough');
        });
    }

    public set src(value: string)
    {
        if (this._src !== value)
        {
            this._playable = false;
            this._audio.src = value;
            this._src = value;
        }
    }

    public set volume(value: number)
    {
        value = value < 0 ? 0 : value;
        value = value > 1 ? 1 : value;
        localStorage.setItem('options.music.volume', String(value));
        this._volume = value;

        if (this._playable)
        {
            this._audio.volume = value;
        }
    }

    public set loop(value: boolean)
    {
        this._loop = value;

        if (this._playable)
        {
            this._audio.loop = value;
        }
    }

    @computed
    public get volume(): number
    {
        return this._volume;
    }

    @computed
    public get loop(): boolean
    {
        return this._loop;
    }

    @action
    public play = async (): Promise<void> => {
        if (this._playable)
        {
            await this._audio.play();
        }
    };

}