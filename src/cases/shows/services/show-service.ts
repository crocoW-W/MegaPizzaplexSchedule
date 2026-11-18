import { api } from "../../../lib/axios";
import type { Show } from "../dtos/show";

const ENDPOINT = "";

export const ShowService = {
    async listAll(): Promise<Show[]> {
        const result = await api.get<Show[]>(ENDPOINT);

        return result.data;
    }
}