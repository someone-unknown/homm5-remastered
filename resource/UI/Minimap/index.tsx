import React, { useCallback, useState, ChangeEvent, DetailedHTMLProps, FunctionComponent, HTMLAttributes, ReactElement } from 'react';
import { observer } from 'mobx-react';

import {
    MinimapContainer,
    MinimapFrame,
    MinimapShowHideCheckbox
} from 'UI/Minimap/style';

export type MinimapProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>;

export const Minimap: FunctionComponent<MinimapProps> = observer((props): ReactElement => {

    const [ open, setOpen ] = useState<boolean>(true);

    const showHideCheckboxChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
        setOpen(event.target.checked);
    }, [ setOpen ]);

    return (
        <MinimapContainer { ...props }>
            <MinimapFrame open={ open }>

            </MinimapFrame>
            <MinimapShowHideCheckbox
                checked={ open }
                onChange={ showHideCheckboxChangeHandler }
            />
        </MinimapContainer>
    );

});