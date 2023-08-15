import React, { useEffect, useState } from 'react';
import { TextField, Autocomplete, } from "@mui/material";

const AutocompleteInput = (props) => {
    const {getOptionLabel,options,onChange,label}=props;
    return (
        <Autocomplete
            id="free-solo-demo"
            freeSolo
            size="medium"
            fullWidth
            sx={{ width: "250px", mt: 2 }}
            getOptionLabel={getOptionLabel}
            options={options}
            onChange={onChange}
            renderInput={(params) => <TextField {...params} label={label} />}
        />
    )
}

export default AutocompleteInput