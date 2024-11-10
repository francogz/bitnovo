export const prepareHeaders = (
    headers: Headers,
    extraHeaders: Record<string, string> = {}
) => {
    const identifier = `${process.env.EXPO_PUBLIC_IDENTIFIER}`;

    headers.set("X-Device-Id", identifier);

    Object.keys(extraHeaders).forEach((key) => {
        headers.set(key, extraHeaders[key]);
    });

    return headers;
};
