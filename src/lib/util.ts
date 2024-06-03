let token: string | undefined;

export function setToken(newToken: string): void {
    token = newToken;
}

export function getToken(): string | undefined {
    return token;
}

export function deleteToken(): void {
    token = undefined;
}
