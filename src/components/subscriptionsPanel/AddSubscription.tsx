import React, {FC} from 'react'
import {useDispatch} from 'react-redux'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import {styled} from "@mui/system";
import {addSubscription} from "../../state/reducers";

const StyledContainer = styled('div')(() => ({
    display: 'flex',
    alignItems: 'stretch'
}));

const StyledButton = styled(Button)(() => ({
    marginLeft: 20
}));

export const AddSubscription: FC = () => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleAddSubscription = () => {
        dispatch(addSubscription(value));
        setValue('');
    };

    return <StyledContainer>
        <TextField label="VIN"
                   variant="filled"
                   value={value}
                   onChange={handleChange}/>

        <StyledButton variant="contained"
                startIcon={<AddIcon/>}
                onClick={handleAddSubscription}>
            ADD
        </StyledButton>
    </StyledContainer>;
}