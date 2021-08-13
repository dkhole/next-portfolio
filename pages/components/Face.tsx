import Face1 from '../../public/svgs/face1.svg';
import {css} from '@emotion/css';

export default function Face(props: any) {
    return <Face1 className={css([
        {
            '.face-line': {
                stroke: 'white !important',
            },
            height: '340px',
            width: '340px',
        },
        !props.isNight && {
            '.face-line': {
                stroke: 'black !important',
            },
        }
    ])}/>
}
