import React, {FC} from 'react';
import FormGroup from "@mui/material/FormGroup";
import {SubscriptionsItem} from "./SubscriptionItem";
import {useSelector} from "react-redux";

export const SubscriptionsList: FC = () => {
    const subscriptions = useSelector((state: any) => state.subscriptions.subscribedVINs);

    return <FormGroup style={{marginTop: 30}}>{
        Object
            .entries(subscriptions)
            .map((item: any) =>
                <SubscriptionsItem key={item[0]} VIN={item[0]} checked={item[1]}/>
            )}
    </FormGroup>;
}