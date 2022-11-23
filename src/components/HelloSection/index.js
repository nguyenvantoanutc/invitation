import React, {Fragment} from 'react';
import {object} from 'prop-types';

import Bride from '@assets/images/bride_1.png';
import Groom from '@assets/images/groom_1.png';
import QRBride from '@assets/images/qr-phuong.jpg';
import QRGroom from '@assets/images/qr-toan.jpg';
import CallNow from '@assets/icons/icons8-love-message-64.png';

import {styWrapper} from './styles';

function HelloSection({guest}) {
    const finalSubtitle = '24-12-2022';
    const subtitle = '(Tức ngày 02 tháng 12 năm 2022)';

    return (
        <Fragment>
            <div id="fh5co-couple" css={styWrapper}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <div
                                className={guest ? "col-md-6 col-sm-6 pd-invitation" : "col-md-12 col-sm-12"}>
                                <div className="invitation text-center">
                                    <h2 className="main-font">Wedding</h2>
                                    <h3 className="sub-title main-font hs">Mr.Toan &amp; Mrs.Phuong</h3>
                                    <p className="info uppercase">
                                        Hôn lễ được tổ chức vào hồi 08h30
                                    </p>
                                    <h3 className="sub-title hs">{finalSubtitle}</h3>
                                    <p className="info">
                                        {subtitle}
                                    </p>
                                    <p className="info uppercase">
                                        Tại nhà trai
                                    </p>
                                    <p className="info">
                                        Thiệu Nguyên, Thiệu Hóa, Thanh Hóa
                                    </p>
                                    <p className="info">
                                        Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi
                                    </p>
                                </div>
                            </div>
                            <div hidden={!guest} className="col-md-6 col-sm-6 pd-invitation">
                                <div className="invitation text-center">
                                    <h2 className="main-font">Invitation</h2>
                                    <h3 className="sub-title main-font hs">Mr.Toan &amp; Mrs.Phuong</h3>
                                    <p className="info">
                                        Trân trọng kính mời <span> {guest ? guest.name : "Bạn"}</span> đến dự bữa tiệc
                                        thân mật chung vui cùng gia đình chúng tôi
                                    </p>
                                    <p className="info">
                                        Vào
                                        lúc <span>{guest ? guest.time : "11h30"}</span> ngày <span>{guest ? guest.date : "24/12/2022"}</span>
                                    </p>
                                    <p className="info uppercase">
                                        {guest.groom === "0" ? "Tại nhà trai" : "Tại nhà gái"}
                                    </p>
                                    <p className="info">
                                        Thiệu Nguyên, Thiệu Hóa, Thanh Hóa
                                    </p>
                                    <p className="info">
                                        Rất hân hạnh được đón tiếp !
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="couple-wrap">
                        <div className="couple-half">
                            <div className="groom">
                                <img src={Groom} alt="groom" className="img-responsive" loading="lazy"/>
                            </div>
                            <div className="desc-groom">
                                <h3 className="main-font">Nguyen Van Toan</h3>
                                <p className="parent-name">
                                    <a href="tel:+84393767196">
                                        <img src={CallNow} style={{
                                            width: '40px',
                                            height: '50px'
                                        }} alt="Call me"/>
                                    </a>
                                </p>
                                <p className="parent-name parent-name__top">
                                    Bố: Nguyễn Văn Tư
                                    <br/>
                                    Mẹ: Nguyễn Thị Tâm
                                    <br/>
                                    Thiệu Nguyên, Thiệu Hóa, Thanh Hóa
                                </p>
                                <img src={QRGroom} alt="groom" className="img-qr" loading="lazy"/>
                            </div>
                        </div>
                        <p className="heart text-center">
                            <i className="icon-heart2"/>
                        </p>
                        <div className="and-love">
                            <i>&</i>
                        </div>
                        <div className="couple-half">
                            <div className="bride">
                                <img src={Bride} alt="groom" className="img-responsive" loading="lazy"/>
                            </div>
                            <div className="desc-bride">
                                <h3 className="main-font">Hoang Thi Phuong</h3>
                                <p className="parent-name">
                                    <a href="tel:+84358833104">
                                        <img src={CallNow} style={{
                                            width: '40px',
                                            height: '50px'
                                        }} alt="Call me"/>
                                    </a>
                                </p>
                                <p className="parent-name parent-name__top">
                                    Bố: Hoàng Văn Bính
                                    <br/>
                                    Mẹ: Lê Thị Lại
                                    <br/>
                                    Thiệu Công, Thiệu Hóa, Thanh Hóa
                                </p>
                                <img src={QRBride} alt="bride" className="img-qr" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {!guest ? (
                <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <h2 className="main-font">Covid-19</h2>
                                <p className="info">
                                    Liên quan đến tình trạng các vấn đề dịch bệnh hiện tại, và không gian tổ chức của sự
                                    kiện của chúng tôi, đề cập đến các nguyên tắc Bộ Y tế cụ thể là áp đặt các hạn chế
                                    về khoảng cách và số lượng khách mời.
                                </p>
                                <p className="info">
                                    Vì vậy, với tất cả sự khiêm tốn, chúng tôi chân thành xin lỗi nếu chúng tôi không
                                    thể mời anh/chị/em tới dự ngày hạnh phúc của chúng tôi.
                                </p>
                                <p className="info">
                                    Trân trọng !
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </Fragment>
    );
}

HelloSection.propTypes =
    {
        guest: object.isRequired
    }
;

export default HelloSection;
