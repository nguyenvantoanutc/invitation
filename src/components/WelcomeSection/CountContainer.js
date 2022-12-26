import React from 'react';
import useDateCountdown from '@/hooks/useDateCountdown';
import CountItem from './CountItem';
import {styMargin} from './styles';

function CountContainer() {
    const {days, hours, minutes, seconds, timeHasRunOut, isEventOver} = useDateCountdown();
    const finalText = isEventOver ? 'SUDAH' : 'SEDANG';

    if (timeHasRunOut)
        return (
            <>
                <div className="row">
                    <div className="col-md-12" style={{fontSize: '20px'}}>
                        Có điều gì sơ suất mong mọi người thông cảm giúp gia đình
                        <br/>
                        Cảm ơn mọi người thật nhiều.
                    </div>
                </div>
                {/*<ButtonLive />*/}
            </>
        );

    return (
        <div className="col-md-12" css={styMargin('0 0 16px 0')}>
            <CountItem text="Days" number={days}/>
            <CountItem text="Hours" number={hours}/>
            <CountItem text="Minutes" number={minutes}/>
            <CountItem text="Seconds" number={seconds}/>
        </div>
    );
}

export default CountContainer;
