
export const GetAllLocalStorage = () => {
    if (typeof window === 'undefined') return {}; // Prevent error during SSR

    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        try {
            const value = JSON.parse(localStorage.getItem(key));
            data[key] = value;
        } catch (e) {
            data[key] = localStorage.getItem(key); // fallback if not JSON
        }
    }
    return data;
};
