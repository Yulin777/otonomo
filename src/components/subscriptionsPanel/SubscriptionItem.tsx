import React, {FC} from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useDispatch} from "react-redux";
import {toggleSubscription} from "../../state/reducers";

interface IProps {
    VIN: string
    checked: boolean
}

export const SubscriptionsItem: FC<IProps> = ({VIN, checked}) => {
    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        dispatch(toggleSubscription({VIN, checked}));
    };

    return <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange}/>} label={VIN}/>;
}