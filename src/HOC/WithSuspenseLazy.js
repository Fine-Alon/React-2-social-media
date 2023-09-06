import React, {Suspense} from 'react';

export const WithSuspenseLazy = (Component) => (props) => {
    return (
        <Suspense fallback={'loading...'}><Component {...props}/></Suspense>
    )
}
