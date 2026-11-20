import type { Pass } from "../dtos/pass";
import { api } from "../../../lib/axios"

const ENDPOINT = "/passes?key=c92f3eb0";

export const PassService = {
    async listAll(): Promise<Pass[]> {
        const result = await api.get<Pass[]>(ENDPOINT);

        return result.data;
    }
}