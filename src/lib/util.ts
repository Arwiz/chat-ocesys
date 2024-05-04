// Import getSession function from next-auth/client

import { getSession } from 'next-auth/react';

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

// Define a function to make authenticated fetch requests
export const fetchWithToken = async (
    url: string,
    method_type: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'
) => {
    try {
        // Retrieve session
        const session = await getSession();
        console.log('User session', session, await getSession());
        if (!session || !session.token) {
            throw new Error('User session not found or access token missing');
        }

        // Include token in request headers
        const response = await fetch(url, {
            method: method_type,
            headers: {
                // Authorization: `Bearer ${session.token}`,
                Authorization: `${session.token}`,
            },
        });

        // Handle response
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
