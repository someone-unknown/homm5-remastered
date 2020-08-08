import { action, computed, observable } from 'mobx';

export const DIFFICULTY_EASY = 1;
export const DIFFICULTY_MEDIUM = 2;
export const DIFFICULTY_HARD = 3;
export const DIFFICULTY_HEROIC = 4;
export const DIFFICULTY_EVIL = 5;

export type Difficulty = typeof DIFFICULTY_EASY | typeof DIFFICULTY_MEDIUM | typeof DIFFICULTY_HARD | typeof DIFFICULTY_HEROIC | typeof DIFFICULTY_EVIL;

export class Scenario
{

    @observable
    private _difficulty: Difficulty = parseInt(localStorage.getItem('option.singleplayer.difficulty')) as Difficulty || DIFFICULTY_EASY;

    @observable
    private _turnLimit: number = Math.ceil(parseFloat(localStorage.getItem('option.singleplayer.turnLimit')) || Infinity);

    public set difficulty(value: Difficulty)
    {
        if ([ DIFFICULTY_EASY, DIFFICULTY_MEDIUM, DIFFICULTY_HARD, DIFFICULTY_HEROIC, DIFFICULTY_EVIL ].includes(value))
        {
            localStorage.setItem('option.singleplayer.difficulty', String(value));
            this._difficulty = value;
        }
    }

    public set turnLimit(value: number)
    {
        if (value === Infinity || (value >= 1 && value <= 30))
        {
            localStorage.setItem('option.singleplayer.turnLimit', String(value));
            this._turnLimit = value;
        }
    }

    @computed
    public get difficulty(): Difficulty
    {
        return this._difficulty;
    }

    @computed
    public get turnLimit(): number
    {
        return this._turnLimit;
    }

}