import React, {FC} from 'react'
import {AddSubscription} from './AddSubscription'
import {styled} from "@mui/system";
import {SubscriptionsList} from "./SubscriptionsList";

const StyledContainer = styled('div')(() => ({
    height: '100%',
    width: '100%',
    padding: 20
}));

export const SubscriptionPanel: FC = () =>
    <StyledContainer>
        <AddSubscription/>
        <SubscriptionsList/>
    </StyledContainer>;