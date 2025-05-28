import axios from "axios";

const ApiBaseUrl = process.env.NEXT_PUBLIC_GETDATABYURL + '/api';

export const GetWebsiteData = async () => {
    try {
        const response = await axios.get(`${ApiBaseUrl}/WBGlobalData/route`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.warn("Error fetching data:", error);
        return null;
    }
};
