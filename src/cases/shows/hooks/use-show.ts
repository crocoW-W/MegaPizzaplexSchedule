import { ShowService } from "../services/show-service";

export function useShow() {
    return ShowService.listAll();
}