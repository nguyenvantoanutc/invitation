import React, {Fragment, useState} from 'react';
import {bool, func, object, string} from 'prop-types';

import WeddingImg from '@assets/images/wedding-logo.png';
import CountContainer from './CountContainer';
import ScrollToDown from './ScrollToDown';
import {styBackground, styButtonWrapper, styHero, styWrapper} from './styles';
import SheetDB from 'sheetdb-js'

const DELAY_TIME = 1500;

function WelcomeSection({location, guest, isInvitation, isAnonymousGuest, codeLink, onClickDetail}) {
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

    const submitData = () => {
        console.log("submitData");
        SheetDB.read('https://sheetdb.io/api/v1/ptkmds3iusg55', {}).then(function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });

        SheetDB.write('https://sheetdb.io/api/v1/ptkmds3iusg55', {
            sheet: 'Invitation',
            data: {code: '10', name: 'Test', member: 41, status: 'dsad'}
        }).then(function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };

    const renderGuestSection = () => {
        if (isAnonymousGuest) return <h2 className="to-dearest-name">Dear Friends,</h2>;

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
                            <div className={isAnonymousGuest ? 'margin__bottom' : ''}>
                                <CountContainer/>
                            </div>
                            {renderGuestSection()}
                            {isInvitation && (
                                <div className="row" css={styButtonWrapper}>
                                    <div className="col-md-3">
                                        <button onClick={submitData} className="btn btn-default btn-block">Tham gia
                                        </button>
                                    </div>
                                </div>
                            )}
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
    isInvitation: bool.isRequired,
    isAnonymousGuest: bool.isRequired,
    location: object.isRequired,
    codeLink: string,
    onClickDetail: func.isRequired,
};

WelcomeSection.defaultProps = {
    codeLink: '',
};

export default WelcomeSection;
