import request from '@/utils/request';

export async function query(){
    return request('/api/users');
}

export async function queryMessages(){
    return request ('/api/messages')
}

export async function queryTweets(){
    return request('/api/tweets');
}

export async function queryTelegrams(){
    return request('/api/telegrams');
}


