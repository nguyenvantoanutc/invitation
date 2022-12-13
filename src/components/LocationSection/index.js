import React, {Fragment} from 'react';
import {GOOGLE_MAPS_LINK_BRIDE, GOOGLE_MAPS_LINK_GROOM} from '@/constants';
import {styWrapper} from './styles';

function LocationSection() {
    return (
        <Fragment>
            <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                            <h2 className="main-font">Location</h2>
                            <p className="sub-title">
                                <a
                                    href={GOOGLE_MAPS_LINK_GROOM}
                                    title="Click vào đây để đi đến Google Maps"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{color: '#828282'}}
                                >
                                    <strong>Gia đình nhà trai <i className="icon-location-pin"/></strong>
                                </a>{' '}
                                <br/>
                                Nguyên Thắng, Thiệu Nguyên, Thiệu Hóa, Thanh Hóa
                            </p>
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1115.4620935101207!2d105.7091093634137!3d19.884235849831857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136f72be56199f7%3A0xd74276515b312350!2zQ-G7rWEgSMOgbmcgxJBp4buHbiBOxrDhu5tjIFZp4buHdCBI4buTbmc!5e0!3m2!1svi!2s!4v1667647158041!5m2!1svi!2s"
                                        width="100%"
                                        height="450"
                                        frameBorder="0"
                                        style={{border: '0'}}
                                        allowFullScreen
                                        aria-hidden="false"
                                        tabIndex="0"
                                        title="Google Maps - Mr.Toan & Ms.Phuong Wedding"
                                    />
                                </div>
                            </div>
                            <p/>
                            <p className="sub-title">
                                <a
                                    href={GOOGLE_MAPS_LINK_BRIDE}
                                    title="Click vào đây để đi đến Google Maps"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{color: '#828282'}}
                                >
                                    <strong>Gia đình nhà gái <i className="icon-location-pin"/></strong>
                                </a>{' '}
                                <br/>
                                Minh Thượng, Thiệu Công, Thiệu Hóa, Thanh Hóa
                            </p>

                            <div className="row">
                                <div className="col-md-10 col-md-offset-1">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d663.1060338203374!2d105.66484376152334!3d19.920435476741407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136f3dd86581c65%3A0xced3fdd7743afab9!2zVHLGsOG7nW5nIFRIQ1MgVGhp4buHdSBDw7RuZw!5e0!3m2!1svi!2s!4v1669025885839!5m2!1svi!2s"
                                        width="100%"
                                        height="450"
                                        frameBorder="0"
                                        style={{border: '0'}}
                                        allowFullScreen
                                        aria-hidden="false"
                                        tabIndex="0"
                                        title="Google Maps - Mr.Toan & Ms.Phuong Wedding"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
}

export default React.memo(LocationSection);
