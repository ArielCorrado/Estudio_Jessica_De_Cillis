export const getREM = () => {
    return window.innerWidth >= window.innerHeight ? 0.01 * window.innerHeight + 14 : 0.01 * window.innerWidth + 14;
};