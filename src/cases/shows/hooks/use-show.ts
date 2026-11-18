import { ShowService } from "../services/show-service";
import type { Show } from "../dtos/show";
import { useState } from "react";
import { useEffect } from "react";

export function useShow() {
    
    const [shows, setShows] = useState<Show[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        ShowService.listAll()
            .then(setShows)
            .catch(e => setError(e.message))
            .finally(() => setLoading(false));
    }, [])

    return {shows, loading, error}

}