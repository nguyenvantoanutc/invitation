import React, {Fragment} from 'react';

import WeddingInfoBox from './WeddingInfoBox';
import ButtonLive from './ButtonLive';
import {styWrapper} from './styles';

function WeddingSection() {
    const renderGuestInfo = () => {
        return (
            <Fragment>
                <div className="col-md-8 col-md-offset-4">
                    <WeddingInfoBox
                        title="Lễ Thành Hôn"
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
                        <div className="col-md-10 col-md-offset-1">
                            <WeddingInfoBox
                                title="Lễ vu Quy"
                                time="08:30"
                                date="Ngày 23/12/2022 (Dương lịch) <br/> Ngày 01/12/2022 (Âm lịch)"
                                description="TẠI NHÀ GÁI <br/> Thiệu Công, Thiệu Hóa, Thanh Hóa"
                            />
                            <WeddingInfoBox
                                title="Lễ thành hôn"
                                time="08:30"
                                date="Ngày 24/12/2022 (Dương lịch) <br/> Ngày 02/12/2022 (Âm lịch)"
                                description="TẠI NHÀ TRAI <br/> Thiệu Nguyên, Thiệu Hóa, Thanh Hóa"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default React.memo(WeddingSection);
