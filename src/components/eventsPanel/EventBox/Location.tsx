import React, {FC} from 'react';

interface IProps {
    location: { lat: number, lng: number }
}

export const Location: FC<IProps> = ({location}) =>
    <div>
        <span>Location: </span>
        {JSON.stringify(location)}
    </div>;