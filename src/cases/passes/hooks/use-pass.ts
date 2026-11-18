import { PassService } from "../services/pass-service";
import type { Pass } from "../dtos/pass";
import { useState } from "react";
import { useEffect } from "react";

export function usePass() {

    const [passes, setPasses] = useState<Pass[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        PassService.listAll()
            .then(setPasses)
            .catch(e => setError(e.message))
            .finally(() => setLoading(false));
    }, [])

    return { passes, loading, error }

}