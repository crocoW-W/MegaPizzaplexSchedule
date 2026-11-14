import { shows } from "../dtos/show";

export const ShowService = {
    listAll() {
        return shows;
    }
}