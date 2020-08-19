import {FunctionComponent} from "react";
import {
    ExitTownButton1,
    ExitTownButton2,
    ExitTownButton3,
    ExitTownButton4,
    ExitTownButton5,
    ExitTownButton6,
    ExitTownButton7,
} from "./ExitTown-styled";

/**
 * Маппинг чисел на компоненты отображения дней недели
 */
export const dayButtons: Record<number, FunctionComponent> = {
    1: ExitTownButton1,
    2: ExitTownButton2,
    3: ExitTownButton3,
    4: ExitTownButton4,
    5: ExitTownButton5,
    6: ExitTownButton6,
    7: ExitTownButton7,
};