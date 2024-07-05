export const writeCookie = (name: string, val: string, expires: number) => {
    var date = new Date();
    date.setDate(date.getDate() + expires);
    document.cookie =
        name + "=" + val + "; path=/; expires=" + date.toUTCString();
};

export const readCookie = (name: string) => {


    if (typeof document !== 'undefined') {
        var matches = document.cookie.match(
            new RegExp(
                "(?:^|; )" +
                name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                "=([^;]*)"
            )
        );
        return matches ? decodeURIComponent(matches[1]) : undefined;
    } else {
        console.error('document is not defined');
        return null;
    }



};


export const removeCookie = (name: string) => {
    var date = new Date();

    document.cookie = name + date.toUTCString() + '=; Max-Age=-99999999;';
}


export const deleteAllCookies = () => {
    document.cookie.split(';').forEach(cookie => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    });
}