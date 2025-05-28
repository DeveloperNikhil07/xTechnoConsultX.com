import axios from "axios";
const ApiBaseUrl = process.env.NEXT_PUBLIC_DOMAIN;
export const SendThankYouMail = async (data) => {
    try {
        const response = await axios.post(`${ApiBaseUrl}/api/sendThankyouMailApi`, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error sending thank you email:", error);
        throw error;
    }
};