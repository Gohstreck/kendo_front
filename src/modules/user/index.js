import React from 'react';

const user = () => (
    <div>Usuario Module</div>
);

export default {
    routeProps: {
        path: '/user',
        component: user
    },
    name: 'user',
}
