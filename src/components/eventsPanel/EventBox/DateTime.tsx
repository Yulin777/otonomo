import React, {FC, useMemo} from 'react';
import moment from 'moment';

interface IProps {
    timestamp: number
}

export const DateTime: FC<IProps> = ({timestamp}) => {
    const formattedDateTime = useMemo(() => moment.unix(timestamp).format("DD/MM/YYYY, HH:mm:ss"), [timestamp]);

    return <div
        style={{float: 'right'}}>
        {formattedDateTime}
    </div>;
}