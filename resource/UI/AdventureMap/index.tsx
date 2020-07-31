import React, { Fragment, FunctionComponent, PropsWithChildren, ReactElement } from 'react';
import { observer } from 'mobx-react';

export const AdventureMap: FunctionComponent = observer(({ children }: PropsWithChildren<{}>): ReactElement => (
    <Fragment>
        {children}
    </Fragment>
));