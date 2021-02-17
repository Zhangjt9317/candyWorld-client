import request from '@/utils/request';

export async function queryAccounts(){
    return request ('/api/accounts')
}

export async function queryUsers(){
    return request('/api/users');
}