import React from 'react';
import {bool, string} from 'prop-types';
import {styWithAnimation, styWrapperItem} from './styles';

import FB from '@assets/icons/icons8-facebook-64.png';


function WishesItem({image, name, fbLink, infoName, description, isActive}) {
    if (!isActive) return null;

    const renderItem = () => {
        return (
            <div className="item" css={styWrapperItem}>
                <div className={`testimony-slide text-center ${isActive ? 'active' : 'hide'}`}>
                    <figure>
                        <img src={image} alt="user" loading="lazy"/>
                    </figure>
                    <h4>{name}</h4>
                    <span className="infoName">{infoName}</span>
                    {fbLink && (
                        <a href={fbLink}>
                            <img style={{
                                width: '30px',
                                height: '30px'
                            }} src={FB} alt="user" loading="lazy"/>
                        </a>
                    )}
                    <blockquote>
                        <p className="description" dangerouslySetInnerHTML={{ __html: description }}/>
                    </blockquote>
                </div>
            </div>
        );
    };

    return <div css={styWithAnimation(isActive)}>{renderItem()}</div>;
}

WishesItem.propTypes = {
    image: string.isRequired,
    name: string.isRequired,
    infoName: string.isRequired,
    description: string.isRequired,
    isActive: bool.isRequired,
};

export default React.memo(WishesItem);
