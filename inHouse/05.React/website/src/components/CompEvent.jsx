import React from 'react';
import { Outlet } from 'react-router-dom'

const CompEvent = () => {
    return (
        <div>
            <h2>오늘의 이벤트!!</h2>
            <Outlet></Outlet>    
        </div>
    );
};

export default CompEvent;