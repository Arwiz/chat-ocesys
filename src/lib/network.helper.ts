import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

// Define a function to make authenticated fetch requests
export const fetchWithToken = async (
    url: string,
    method_type: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE',
    payLoad?: any
) => {
    try {
        const session = await getServerSession(authOptions);

        console.log('Fetching session', session);

        if (!session || !session?.user.token) {
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
