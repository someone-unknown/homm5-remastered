import { computed, observable } from 'mobx';

export const DIFFICULTY_EASY = 1;
export const DIFFICULTY_MEDIUM = 2;
export const DIFFICULTY_HARD = 3;
export const DIFFICULTY_HEROIC = 4;
export const DIFFICULTY_EVIL = 5;

/**
 * Ключи хранения данных одиночного прохождения в localStorage
 */
const SINGLEPLAYER_STORAGE_KEYS = Object.freeze({
    DIFFICULTY: 'option.singleplayer.difficulty',
    TURN_LIMIT: 'option.singleplayer.turnLimit',
});

export type Difficulty = typeof DIFFICULTY_EASY | typeof DIFFICULTY_MEDIUM | typeof DIFFICULTY_HARD | typeof DIFFICULTY_HEROIC | typeof DIFFICULTY_EVIL;

export class Scenario
{
    @observable
    private _difficulty: Difficulty = parseInt(localStorage.getItem(SINGLEPLAYER_STORAGE_KEYS.DIFFICULTY), 10) as Difficulty || DIFFICULTY_EASY;

    @observable
    private _turnLimit: number = Math.ceil(parseFloat(localStorage.getItem(SINGLEPLAYER_STORAGE_KEYS.TURN_LIMIT)) || Infinity);

    public set difficulty(value: Difficulty)
    {
        if ([ DIFFICULTY_EASY, DIFFICULTY_MEDIUM, DIFFICULTY_HARD, DIFFICULTY_HEROIC, DIFFICULTY_EVIL ].includes(value))
        {
            localStorage.setItem(SINGLEPLAYER_STORAGE_KEYS.DIFFICULTY, String(value));
            this._difficulty = value;
        }
    }

    public set turnLimit(value: number)
    {
        if (value === Infinity || (value >= 1 && value <= 30))
        {
            localStorage.setItem(SINGLEPLAYER_STORAGE_KEYS.TURN_LIMIT, String(value));
            this._turnLimit = value;
        }
    }

    @computed
    public get getDifficulty(): Difficulty
    {
        return this._difficulty;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    @computed
    public get getTurnLimit(): number
    {
        return this._turnLimit;
    }

}