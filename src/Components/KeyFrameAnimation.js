import {keyframes} from 'styled-components'


export const moveInLeft = keyframes`
      0%{
        opacity: 0;
        transform: translateX(-20px);
    }

    80%{
        transform: translateX(20px);
    }
    100%{
        opacity: 1;
        transform: translate(0);
    }
`;  


export const moveInRight = keyframes`
     0%{
        opacity: 0;
        transform: translateX(20px);
    }

    80%{
        transform: translateX(-20px);
    }

    100%{
        opacity: 1;
        transform: translate(0);
        display:none;
    }
`;

