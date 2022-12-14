import React, {useState} from 'react';
import {string} from 'prop-types';

import {styFlex, styWrapper} from './styles';
import axios from "axios";
import {SHEET_DATA_CONFIRM} from "../../constants";
import {styButtonWrapper} from "../WelcomeSection/styles";

function ConfirmationSection({guest}) {
    const [showTelegram, setShowTelegram] = useState(JSON.parse(localStorage.getItem(guest.code)))

    const submitData = () => {
        let name = document.getElementById('name');
        let member = document.getElementById('member');
        let transport = document.getElementById('transport');
        let phone = document.getElementById('phone');
        let wish = document.getElementById('wish');

        member = member.value ? member.value : 1
        transport = transport.value ? transport.value : 0
        phone = phone ? phone.value : "";
        wish = wish ? wish.value : "";
        name = name ? name.value : "";


        axios.get(SHEET_DATA_CONFIRM, {
            params: {
                code: guest.code,
                name: (guest.code !== 'Anonymous' && guest.code !== 'Family') ? guest.name : name,
                member: transport === '-1' ? '0' : member,
                transport: transport,
                phone: phone,
                wish: wish,
            }
        })
            .then(function (response) {
                localStorage.setItem(guest.code, "true")
                setShowTelegram(true)
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    if (!guest) return null;
    return (
        <div id="fh5co-started" className="fh5co-bg" css={styWrapper}>
            <div className="overlay"/>
            <div className="container">
                {!showTelegram && (<div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <h2 className="main-font">Attend</h2>
                        <p>
                            Để gia đình đón tiếp được chu đáo, đầy đủ nhất. Vui lòng điền
                            đầy đủ các thông tin dưới đây
                        </p>
                        {(guest.code === 'Anonymous' || guest.code === 'Family') && (
                            <div className="form-group">
                                <label className="fh5co-nav-white">Tên khách mời</label>
                                <input type="text" className="form-control" id="name"
                                       placeholder="Name"/>
                            </div>)}
                        <div className="form-group">
                            <label className="fh5co-nav-white">Số thành viên tham dự</label>
                            <input type="number" className="form-control" id="member"
                                   placeholder="Member Number"/>
                        </div>
                        <div className="form-group">
                            <label>Hình thức di chuyển</label>
                            <select style={{backgroundColor: '#828282'}}
                                    className="form-control" placeholder="Transport" id="transport">
                                <option value="0">Di chuyển cùng đoàn</option>
                                <option value="1">Tự di chuyển</option>
                                <option value="-1">Có việc riêng, không thể tham gia được</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="fh5co-nav-white">Số điện thoại liên hệ</label>
                            <input type="text" className="form-control" id="phone"
                                   placeholder="Phone"/>
                        </div>
                        <div className="form-group">
                            <label>Lời chúc mừng đến cô dâu/chú rể</label>
                            <textarea type="text" className="form-control" id="wish"
                                      placeholder="Wish"/>
                        </div>
                        <div className="row" css={styButtonWrapper}>
                            <div className="col-md-3">
                                <button onClick={submitData} className="btn btn-default btn-block">Tham dự
                                </button>
                            </div>
                        </div>
                    </div>
                </div>)}
                {showTelegram && (
                    <div className="row" css={styFlex}>
                        <div className="col-md-8 text-center fh5co-heading">
                            <p>
                                Cảm ơn {guest.name} đã xác nhận tham dự. Vui lòng tham gia nhóm Telegram để nắm bắt các
                                thông tin mới nhất
                                <br/>
                                Sự hiện diện của bạn là điều tuyệt vời nhất đối với chúng tôi.

                            </p>
                            <a href="https://t.me/+UtxXED6sqCE1NDFl">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                     width="56" height="56"
                                     viewBox="0 0 48 48">
                                    <path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"/>
                                    <path fill="#fff"
                                          d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"/>
                                    <path fill="#b0bec5"
                                          d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"/>
                                    <path fill="#cfd8dc"
                                          d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

ConfirmationSection.propTypes = {
    guest: string.isRequired,
};

export default React.memo(ConfirmationSection);
