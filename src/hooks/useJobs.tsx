import {useQuery} from 'react-query'
import { api } from '../api';

export interface IJob {
    address: string
    benefits: []
    createdAt: string
    description: string
    email: string
    employment_type: []
    id: string
    location: {lat:number, long?:number , lng?:number}
    name: string
    phone: number
    pictures: string[] | []
    salary: string
    title: string
    updatedAt?: string
}

type useJobType = () => {data:IJob[] | [] , isFetched: boolean}


export const useJobs : useJobType = () => {
    const query = useQuery('jobs', api.getJobs, { retry: false })

    const { data, isFetched } = query

    return {
        data: Array.isArray(data) ? data : [],
        isFetched
    }
};