import React, {Fragment, useEffect, useState} from 'react';
import {object} from 'prop-types';
import getQueryValue from '@helpers/getQueryValue';
/**
 * List of local components
 */
import MainLayout from '@components/Layout';
import WelcomeSection from '@components/WelcomeSection';
import HelloSection from '@components/HelloSection';
import WeddingSection from '@components/WeddingSection';
import LocationSection from '@components/LocationSection';
import StorySection from '@components/StorySection';
import PhotoSection from '@components/PhotoSection/Loadable';
import WishesSection from '@components/WishesSection';
import ConfirmationSection from '@components/ConfirmationSection';
import FooterSection from '@components/FooterSection';
// import CovidSection from '@components/Covid19';
import FloatingMusic from '@components/FloatingMusic/Loadable';
import {SHEET_DATA_INVITATION} from "../constants";
import axios from 'axios'

function Home({location}) {
    const code = getQueryValue(location, 'code') || '';
    const [guest, setGuest] = useState()
    // const {data, loading} = useGuestData();

    const [showDetailContent, setShowDetailContent] = useState(false);

    useEffect(() => {
        axios.get(SHEET_DATA_INVITATION)
            .then(response => {
                console.log(response)
                if (response.data) {
                    let index = response.data.data.findIndex(x => x.code === code);
                    if (index >= 0) {
                        setGuest(response.data.data[index])
                }
            }})
    }, [code])

    const handleClickDetail = () => {
        setShowDetailContent(true);
    };

    const renderDetailContent = () => {
        if (!showDetailContent) return null;

        return (
            <Fragment>
                <HelloSection guest={guest}/>
                <WeddingSection/>
                {/*{isInvitation && <CovidSection/>}*/}
                <LocationSection/>
                {guest && <ConfirmationSection guest={guest}/>}
                <StorySection/>
                <PhotoSection/>
                <WishesSection/>
                <FooterSection guest={guest}/>
            </Fragment>
        );
    };

    return (
        <MainLayout>
            <WelcomeSection
                guest={guest}
                onClickDetail={handleClickDetail}
            />
            {renderDetailContent()}
            <FloatingMusic/>
        </MainLayout>
    );
}

Home.propTypes = {
    location: object.isRequired,
};

export default Home;
