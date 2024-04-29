// Import getSession function from next-auth/client
import { getSession } from 'next-auth/react';

// Define a function to make authenticated fetch requests
const fetchWithToken = async (
    url: string,
    method_type: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'
) => {
    try {
        // Retrieve session
        const session = await getSession();
        if (!session || !session.token) {
            throw new Error('User session not found or access token missing');
        }

        // Include token in request headers
        const response = await fetch(url, {
            method: method_type,
            headers: {
                Authorization: `Bearer ${session.token}`,
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
