import React, {FC} from 'react'
import {styled} from "@mui/system";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Divider from '@mui/material/Divider';
import {EventsList} from "./EventsList";
import {filterByFuel} from "../../state/reducers";
import {useDispatch} from "react-redux";

const StyledContainer = styled('div')(() => ({
    height: '100%',
    width: '100%',
}));

export const EventsPanel: FC = () => {
    const dispatch = useDispatch();

    const toggleFilterFuel = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        dispatch(filterByFuel(checked));
    };

    return <StyledContainer>
        <FormControlLabel style={{padding: 20}}
                          control={<Checkbox onChange={toggleFilterFuel}/>}
                          label='Filter events where fuel level is under 15%'/>

        <Divider orientation="horizontal" flexItem/>

        <EventsList/>
    </StyledContainer>;
}