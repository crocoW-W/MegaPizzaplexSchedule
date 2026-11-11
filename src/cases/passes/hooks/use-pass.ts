import { PassService } from "../services/pass-service";

export function usePass() {
    return PassService.listAll();
}