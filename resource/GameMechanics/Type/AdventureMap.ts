import { action, computed, observable } from 'mobx';

import { Hero } from 'GameMechanics/Type/Hero';
import { Player } from 'GameMechanics/Type/Player';

interface AdventureMapConstructorParams
{
    players?: Record<Player.Index, Player>;
}

export class AdventureMap
{

    @observable
    public readonly players: Record<Player.Index, Player>;

    @observable
    private _day: number = 1;

    @observable
    private _currentPlayer: Player.Index = Player.Index.PLAYER_1;

    public constructor({
        players = {
            [ Player.Index.PLAYER_1 ]: new Player({}),
            [ Player.Index.PLAYER_2 ]: new Player({}),
            [ Player.Index.PLAYER_3 ]: new Player({}),
            [ Player.Index.PLAYER_4 ]: new Player({}),
            [ Player.Index.PLAYER_5 ]: new Player({}),
            [ Player.Index.PLAYER_6 ]: new Player({}),
            [ Player.Index.PLAYER_7 ]: new Player({}),
            [ Player.Index.PLAYER_8 ]: new Player({}),
        }
    }: AdventureMapConstructorParams)
    {
        //@ts-ignore
        window.adventureMap = this;
        this.players = players;
    }

    public set currentPlayer(value: Player.Index)
    {
        this._currentPlayer = value;
    }

    @computed
    public get day(): 1 | 2 | 3 | 4 | 5 | 6 | 7
    {
        return (this._day % 7 || 7) as 1 | 2 | 3 | 4 | 5 | 6 | 7;
    }

    @computed
    public get week(): 1 | 2 | 3 | 4
    {
        return (Math.ceil(this._day / 7) % 4 || 4) as 1 | 2 | 3 | 4;
    }

    @computed
    public get month(): number
    {
        return Math.ceil(this._day / 28);
    }

    @computed
    public get currentPlayer(): Player.Index
    {
        return this._currentPlayer;
    }

    @action
    public endTurn = (): void => {
        this._day++;
    };

    @action
    public addHero(hero: Hero): void
    {
        this.players[ this._currentPlayer ].heroes.push(hero);
    }

}