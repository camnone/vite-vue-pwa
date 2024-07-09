export const writeCookie = (name: string, val: string, expires: number) => {
    var date = new Date();
    date.setDate(date.getDate() + expires);
    document.cookie =
        name + "=" + val + "; path=/; expires=" + date.toUTCString();
};

export const readCookie = (name: string) => {

    try {
        var matches = document.cookie.match(
            new RegExp(
                "(?:^|; )" +
                name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                "=([^;]*)"
            )
        );
        return matches ? decodeURI(matches[1]) : undefined;


    } catch (e) {
        console.log(name)
    }


};

export const reedDeepCookie = (name: string) => {

    var matches = document.cookie.match(
        new RegExp(
            "(?:^|; )" +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)"
        )
    );







    return matches ? JSON.parse(matches![1]) : undefined;

}


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