import React, { Fragment, FunctionComponent, ReactElement } from 'react';
import { observer } from 'mobx-react';

import { ResourceBar } from 'UI/ResourceBar';

export const AdventureMap: FunctionComponent = observer((): ReactElement => {

    return (
        <Fragment>
            <ResourceBar/>
        </Fragment>
    );

});