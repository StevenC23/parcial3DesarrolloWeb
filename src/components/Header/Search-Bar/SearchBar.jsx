import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    return (
        <div style={{display: 'flex',flexDirection: 'row'}}>
            <input type="text" style={styles.busqueda} placeholder="Buscar" />
            <FontAwesomeIcon icon={faSearch} style={styles.iconSearch} />
        </div>
    );
};

const styles = {

    busqueda: {
        margin: '12px 0px',
        borderRadius: '3px',
        border: 'solid 1px rgba(var(--b6a,219,219,219),1)',
        background: 'rgba(var(--b3f,250,250,250),1)',
        width: '200px',
        outline: 'none',
        paddingLeft: '25px',
    },
    iconSearch: {
        position: 'absolute',
        alignSelf: 'center',
        justifySelf: 'center',
        color: 'rgba(128, 128, 128, 0.5)',
        marginLeft: '10px',
        fontSize: '10px'
    }
}

export default SearchBar;