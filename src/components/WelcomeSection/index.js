import React, {Fragment, useState} from 'react';
import {bool, func, object} from 'prop-types';

import WeddingImg from '@assets/images/wedding-logo.png';
import CountContainer from './CountContainer';
import ScrollToDown from './ScrollToDown';
import {styBackground, styHero, styWrapper} from './styles';

const DELAY_TIME = 1500;

function WelcomeSection({guest, onClickDetail}) {
    const [loading, setLoading] = useState(false);
    const [alreadyDownloadData, setAlreadyDownloadData] = useState(false);

    const handleScrollTo = () => {
        /** scroll into detail view */
        const element = document.getElementById('fh5co-couple');
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    };

    const handleShowDetail = () => {
        if (loading) return undefined;

        try {
            const myAudio = document.getElementById('myAudio');
            myAudio.play();
        } catch {
            console.error('FAILED_TO_PLAY_MUSIC');
        }

        onClickDetail();

        if (!alreadyDownloadData) {
            setLoading(true);

            setTimeout(() => {
                setLoading(false);
                setAlreadyDownloadData(true);
                handleScrollTo();
            }, DELAY_TIME);
        } else {
            handleScrollTo();
        }
    };

    const renderGuestSection = () => {
        return (
            <Fragment>
                <h3 className="to-dearest">Gửi tới</h3>
                <h2 className="to-dearest-name">{guest ? guest.name : "Bạn"}</h2>
            </Fragment>
        );
    };

    return (
        <div css={styHero}>
            <header
                id="fh5co-header"
                role="banner"
                className="fh5co-cover"
                css={styBackground}
                data-stellar-background-ratio="0.5"
            >
                <div className="overlay"/>
                <div className="container">
                    <div className="row" css={styWrapper}>
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <img src={WeddingImg} alt="wedding-dinda-indra"/>
                            <h4 className="sub-title">The Wedding of</h4>
                            <h1 className="title">Mr.Toan &amp; Mrs.Phuong</h1>
                            <div className={guest ? 'margin__bottom' : ''}>
                                <CountContainer/>
                            </div>
                            {renderGuestSection()}
                        </div>
                    </div>
                    <div className="row">
                        <ScrollToDown loading={loading} onClick={handleShowDetail}/>
                    </div>
                </div>
            </header>
        </div>
    );
}

WelcomeSection.propTypes = {
    guest: object.isRequired,
    onClickDetail: func.isRequired,
};

WelcomeSection.defaultProps = {
    codeLink: '',
};

export default WelcomeSection;
