import {useQuery} from 'react-query'
import { api } from '../api';

export const useJobs = () => {
    const query = useQuery('jobs', api.getJobs, { retry: false })

    const { data, isFetched } = query

    return {
        data: Array.isArray(data) ? data : [],
        isFetched
    }
};