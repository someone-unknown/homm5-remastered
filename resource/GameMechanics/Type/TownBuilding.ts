import { action, computed, observable } from 'mobx';

type TownBuildingCoordinate = [ 1 | 2 | 3 | 4 | 5, 1 | 2 | 3 | 4 | 5 | 6 ];

interface TownBuildingConstructorParams
{
    coordinate: TownBuildingCoordinate;
}

export class TownBuilding
{

    public readonly coordinate: TownBuildingCoordinate;

    @observable
    private _built: boolean = false;

    public constructor({ coordinate }: TownBuildingConstructorParams)
    {
        this.coordinate = coordinate;
    }

    public set built(value: boolean)
    {
        this._built = value;
    }

    @computed
    public get built(): boolean
    {
        return this._built;
    }

}