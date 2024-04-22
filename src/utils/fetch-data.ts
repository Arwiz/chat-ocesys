export const fetchData = async (
    url: string,
    options: RequestInit = {}
): Promise<any> => {
    // Retrieve token from storage
    const token = localStorage.getItem('token');

    // Set headers
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
    };

    // If token exists, add it to the headers
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    // Merge custom headers with options.headers
    options.headers = { ...options.headers, ...headers };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};
