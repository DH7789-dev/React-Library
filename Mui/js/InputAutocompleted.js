import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';

const InputAutocompleted = ({tab,width}) => {
    return (
        <Autocomplete
            disablePortal
            id="combo-box"
            options={tab}
            sx={{ width: width }}
            renderInput={(params) => <div {...params} firstName="tabData" />}
        />
    );
};

export default InputAutocompleted;