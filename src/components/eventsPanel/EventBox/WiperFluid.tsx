import LinearProgress from '@mui/material/LinearProgress';
import React, {FC} from 'react';
import {styled} from "@mui/system";

const StyledContainer = styled('div')(() => ({
    marginBottom: 20
}));

interface IProps {
    percentage: number
}

export const WiperFluid: FC<IProps> = ({percentage}) =>
    <StyledContainer>
        <span>Wiper Fluid: </span>
        <LinearProgress variant="determinate" value={percentage * 100}/>
    </StyledContainer>;