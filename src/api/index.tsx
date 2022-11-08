import axios from "axios";

const token: string = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

const ROOT_URL: string = "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?";

export const api = {
    async getJobs() {
        const { data } = await axios.get(`${ROOT_URL}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return data;
    },
};
