import type { Pass } from "../dtos/pass";
import { api } from "../../../lib/axios"

const ENDPOINT = "";

export const PassService = {
    async listAll(): Promise<Pass[]> {
        const result = await api.get<Pass[]>(ENDPOINT);

        return result.data;
    }
}