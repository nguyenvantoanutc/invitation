import React, {Fragment} from 'react';
import {styWrapper} from '../HelloSection/styles';

function FooterSection({guest}) {
    return (
        <Fragment>
            {!guest && (
                <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <h2 className="main-font">Thanks</h2>
                                <p className="info">
                                    Cảm ơn các anh chị em, bạn bè... đã không quản ngại đường xa đến dự đám cưới của em
                                    và dành cho em những món quà, những lời chúc thật sự ý nghĩa. Em thật vui và hạnh
                                    phúc vì những tình cảm mà anh chị và các bạn đã dành cho vợ chồng em. Có điều gì sơ
                                    suất mong mọi người thông cảm giúp em nhé.
                                    <br/> Cảm ơn mọi người thật nhiều.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <footer id="fh5co-footer" role="contentinfo">
                <div className="container">
                    <div className="row copyright">
                        <div className="col-md-12 text-center">
                            <p>
                                <small className="block">&copy; 2022 Mr.Toan & Mrs.Phương. All Rights Reserved.</small>
                                <small className="block">
                                    Covid-19 Icon by{' '}
                                    <a href="https://www.flaticon.com/packs/covid-protection-measures-5" target="_blank"
                                       rel="noreferrer">
                                        Flat Icon - Frepik
                                    </a>
                                </small>
                                <small className="block">
                                    Song by{' '}
                                    <a href="https://www.youtube.com/watch?v=fb167KAxvrg" target="_blank"
                                       rel="noreferrer">
                                        Anandito Anisa - Pernikahan Impian
                                    </a>
                                </small>
                                <small className="block">
                                    Original Template from{' '}
                                    <a href="http://freehtml5.co/" target="_blank" rel="noreferrer">
                                        FREEHTML5.co
                                    </a>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

FooterSection.propTypes = {
    guest: Object.isRequired,
};

export default React.memo(FooterSection);
