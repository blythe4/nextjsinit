import Cookies from 'universal-cookie';

const cookies = new Cookies();

const MAX_ACCESS_TOKEN_AGE = 60 * 60 * 24; // 24h

export const getCookieDomain = () => {
    let cookieDomain = null;
    if (process.env.NEXT_PUBLIC_STAGE !== 'local') {
        cookieDomain = process.env.NEXT_PUBLIC_DOMAIN_URL;
    }
    return cookieDomain;
};
