import { EventEmitter } from 'events';
import { action, computed, observable } from 'mobx';

export class Sound extends EventEmitter
{

    private readonly context: AudioContext = new AudioContext();
    private readonly gain: GainNode = this.context.createGain();
    private source: AudioBufferSourceNode = null;

    @observable
    private _sound: AudioBuffer = null;

    @observable
    private _volume: number = parseFloat(localStorage.getItem('option.sound.volume') || '1');

    @observable
    private _loop: boolean = false;

    public constructor()
    {
        super();
        this.gain.gain.value = this._volume;
        this.gain.connect(this.context.destination);

        this.on('ended', (): void => {
            if (this._loop && this.source instanceof AudioBufferSourceNode)
            {
                this.source.start(0);
            }
        });
    }

    public set sound(buffer: AudioBuffer)
    {
        if (this.source instanceof AudioBufferSourceNode)
        {
            this.source.stop();
            this.source.disconnect();
            this.source = null;
        }

        if (buffer instanceof AudioBuffer)
        {
            this.source = this.context.createBufferSource();
            this.source.buffer = buffer;
            this.source.connect(this.gain);
            this.source.start(0);

            this.source.addEventListener('ended', (): void => {
                this.emit('ended');
            });
        }
    }

    public set volume(value: number)
    {
        value = value < 0 ? 0 : value;
        value = value > 1 ? 1 : value;
        localStorage.setItem('option.sound.volume', String(value));
        this.gain.gain.value = value;
        this._volume = value;
    }

    public set loop(value: boolean)
    {
        this._loop = value;
    }

    @computed
    public get sound(): AudioBuffer
    {
        return this._sound;
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
    public play = async (path: string): Promise<void> => {
        const response: Response = await fetch(path);
        const arrayBuffer: ArrayBuffer = await response.arrayBuffer();
        this.sound = await this.context.decodeAudioData(arrayBuffer);
    };

}