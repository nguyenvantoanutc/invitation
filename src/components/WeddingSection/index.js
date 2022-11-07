import React, {Fragment} from 'react';
import {bool} from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import ButtonLive from './ButtonLive';
import {styWrapper} from './styles';

function WeddingSection({isInvitation}) {
    const renderGuestInfo = () => {
        return (
            <Fragment>
                <div className="col-md-8 col-md-offset-4">
                    <WeddingInfoBox
                        title="Đám cưới"
                        time="10:30"
                        date="Ngày 24/12/2022 (Dương lịch) <br/> Ngày 02/12/2022 (Âm lịch)"
                        description="TẠI NHÀ TRAI <br/> Thiệu Nguyên, Thiệu Hóa, Thanh Hóa"
                    />
                </div>
                <ButtonLive/>
            </Fragment>
        );
    };

    return (
        <Fragment>
            <div id="fh5co-event" css={styWrapper}>
                <div className="overlay"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2 className="main-font main-font__wedding">Wedding Information</h2>
                            <span className="sub-title sub-title__wedding">Thông tin chi tiết</span>
                        </div>
                    </div>
                    <div className="row">
                        {!isInvitation && renderGuestInfo()}
                        {isInvitation && (
                            <div className="col-md-10 col-md-offset-1">
                                <WeddingInfoBox
                                    title="Đám hỏi"
                                    time="10:30"
                                    date="Ngày 22/12/2022 (Dương lịch) <br/> Ngày 30/11/2022 (Âm lịch)"
                                    description="TẠI NHÀ GÁI <br/> Thiệu Công, Thiệu Hóa, Thanh Hóa"
                                />
                                <WeddingInfoBox
                                    title="Đám cưới"
                                    time="10:30"
                                    date="Ngày 24/12/2022 (Dương lịch) <br/> Ngày 02/12/2022 (Âm lịch)"
                                    description="TẠI NHÀ TRAI <br/> Thiệu Nguyên, Thiệu Hóa, Thanh Hóa"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

WeddingSection.propTypes = {
    isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
