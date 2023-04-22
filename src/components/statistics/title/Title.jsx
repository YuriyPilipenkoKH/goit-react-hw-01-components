import PropTypes from 'prop-types';
import {TitleElement } from './Title.styled';

export const Title = ({title, children}) => {
   
    return (
        <TitleElement >{children}</TitleElement>
    );
    
   
}

Title.propTypes = {
    title: PropTypes.string,
}