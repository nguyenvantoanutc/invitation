import React, {useState, Fragment, useEffect} from 'react';
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
import useGuestData from "../hooks/useGuestData";

function Home({location}) {
    const code = getQueryValue(location, 'code') || '';
    const isInvitation = getQueryValue(location, 'type') === 'invitation';
    const [guest, setGuest] = useState({})
    const {data, loading} = useGuestData();
    const [isAnonymousGuest, setAnonymousGuest] = useState(guest && !isInvitation);
    const [finalTicketLink, setFinalTicketLink] = useState('');

    const [showDetailContent, setShowDetailContent] = useState(false);

    useEffect(() => {
        const item = data.find(item => item.code === code)
        setGuest(item);
        setAnonymousGuest(guest && !isInvitation)
        setFinalTicketLink(`code=${code}&name=${item?item.name:''}`)
        // const finalTicketLink = `code=${codeLink}&name=${guestName}`;
    }, [data.length, loading, code])

    const handleClickDetail = () => {
        setShowDetailContent(true);
    };

    const renderDetailContent = () => {
        if (!showDetailContent) return null;

        return (
            <Fragment>
                <HelloSection isInvitation={isInvitation} guest={guest}/>
                <WeddingSection isInvitation={isInvitation}/>
                {/*{isInvitation && <CovidSection/>}*/}
                {isInvitation && <LocationSection/>}
                <StorySection/>
                <PhotoSection/>
                <WishesSection/>
                <ConfirmationSection guest={guest} isInvitation={isInvitation} codeLink={finalTicketLink}/>
                <FooterSection isInvitation={isInvitation}/>
            </Fragment>
        );
    };

    return (
        <MainLayout>
            <WelcomeSection
                guest={guest}
                isAnonymGuest={isAnonymousGuest}
                isInvitation={isInvitation}
                location={location}
                codeLink={finalTicketLink}
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
