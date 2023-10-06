const TOKEN_KEY = "TOKEN_KEY";

export const login = (TOKEN_KEY_VALUE) => {
    localStorage.setItem(TOKEN_KEY, TOKEN_KEY_VALUE);
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}