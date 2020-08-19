import { action, computed, observable } from 'mobx';

import { Skill } from 'GameMechanics/Type/Skill';

/** ---[ Academy definitions ]--- **/
import { HERO_DEF_FAIZ } from 'GameMechanics/Def/Hero/Academy/Faiz';
import { HERO_DEF_GALIB } from 'GameMechanics/Def/Hero/Academy/Galib';
import { HERO_DEF_HAVEZ } from 'GameMechanics/Def/Hero/Academy/Havez';
import { HERO_DEF_JHORA } from 'GameMechanics/Def/Hero/Academy/Jhora';
import { HERO_DEF_NARXES } from 'GameMechanics/Def/Hero/Academy/Narxes';
import { HERO_DEF_NATHIR } from 'GameMechanics/Def/Hero/Academy/Nathir';
import { HERO_DEF_NUR } from 'GameMechanics/Def/Hero/Academy/Nur';
import { HERO_DEF_RAZZAK } from 'GameMechanics/Def/Hero/Academy/Razzak';

/** ---[ Necropolis definitions ]--- **/
import { HERO_DEF_DEIRDRE } from 'GameMechanics/Def/Hero/Necropolis/Deirdre';
import { HERO_DEF_KASPAR } from 'GameMechanics/Def/Hero/Necropolis/Kaspar';
import { HERO_DEF_LUCRETIA } from 'GameMechanics/Def/Hero/Necropolis/Lucretia';
import { HERO_DEF_NAADIR } from 'GameMechanics/Def/Hero/Necropolis/Naadir';
import { HERO_DEF_ORSON } from 'GameMechanics/Def/Hero/Necropolis/Orson';
import { HERO_DEF_RAVEN } from 'GameMechanics/Def/Hero/Necropolis/Raven';
import { HERO_DEF_VLADIMIR } from 'GameMechanics/Def/Hero/Necropolis/Vladimir';
import { HERO_DEF_ZOLTAN } from 'GameMechanics/Def/Hero/Necropolis/Zoltan';

interface HeroConstructorParams
{
    def: Hero.Def;
    attack?: number;
    defense?: number;
    spellpower?: number;
    knowledge?: number;
    leadership?: number;
    skills?: number;
}

export class Hero
{

    public readonly def: Hero.Def;

    @observable
    private _attack: number;

    @observable
    private _defense: number;

    @observable
    private _spellpower: number;

    @observable
    private _knowledge: number;

    @observable
    private _leadership: number;

    @observable
    private _mana: number;

    @observable
    private _movepoints: number;

    @observable
    private readonly _skills: Skill[];

    public constructor({
        def,
        attack = def.attack,
        defense = def.defence,
        spellpower = def.spellpower,
        knowledge = def.knowledge,
        leadership = def.leadership,
        skills = def.skills
    }: HeroConstructorParams)
    {
        this.def = def;
        this._attack = attack;
        this._defense = defense;
        this._spellpower = spellpower;
        this._knowledge = knowledge;
        this._leadership = leadership;
        this._mana = this.knowledge * 10;
        this._skills = skills;
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

    public set leadership(value: number)
    {
        this._leadership = value < 0 ? 0 : value;
    }

    public set mana(value: number)
    {
        this._mana = value < 0 ? 0 : value;
    }

    public set movepoints(value: number)
    {
        this._movepoints = value < 0 ? 0 : value;
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

    @computed
    public get leadership(): number
    {
        return this._leadership;
    }

    @computed
    public get mana(): number
    {
        return this._mana;
    }

    @computed
    public get movepoints(): number
    {
        return this._movepoints;
    }

    @computed
    public get skills(): Skill[]
    {
        return this._skills;
    }

}

export namespace Hero
{
    export interface Def
    {
        uuid: string;
        icon: string;
        attack: number;
        defence: number;
        spellpower: number;
        knowledge: number;
        leadership: number;
        skills: Skill.Def[];
    }

    export namespace Def
    {

        /** ---[ Academy definitions ]--- **/
        export const HERO_FAIZ: Hero.Def = HERO_DEF_FAIZ;
        export const HERO_GALIB: Hero.Def = HERO_DEF_GALIB;
        export const HERO_HAVEZ: Hero.Def = HERO_DEF_HAVEZ;
        export const HERO_JHORA: Hero.Def = HERO_DEF_JHORA;
        export const HERO_NARXES: Hero.Def = HERO_DEF_NARXES;
        export const HERO_NATHIR: Hero.Def = HERO_DEF_NATHIR;
        export const HERO_NUR: Hero.Def = HERO_DEF_NUR;
        export const HERO_RAZZAK: Hero.Def = HERO_DEF_RAZZAK;

        /** ---[ Necropolis definitions ]--- **/
        export const HERO_DEIRDRE: Hero.Def = HERO_DEF_DEIRDRE;
        export const HERO_KASPAR: Hero.Def = HERO_DEF_KASPAR;
        export const HERO_LUCRETIA: Hero.Def = HERO_DEF_LUCRETIA;
        export const HERO_NAADIR: Hero.Def = HERO_DEF_NAADIR;
        export const HERO_ORSON: Hero.Def = HERO_DEF_ORSON;
        export const HERO_RAVEN: Hero.Def = HERO_DEF_RAVEN;
        export const HERO_VLADIMIR: Hero.Def = HERO_DEF_VLADIMIR;
        export const HERO_ZOLTAN: Hero.Def = HERO_DEF_ZOLTAN;
    }
}