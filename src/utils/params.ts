

export const getParams = (params: string | null) => {
    const urlParams = new URLSearchParams(window.location.search);
    if (params == null) {
        return null
    }

    return urlParams.get(params);
} 