import request from '@/utils/request';

export async function queryAccounts(){
    return request ('/api/accounts')
}

export async function queryUsers(){
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

const postEventParams = {
    body,
    userHandle,
    userImage,
    createdAt,
    likeCount,
    commentCount
  };

const commentEventParams = {
    body,
    createdAt,
    eventId,
    userHandle,
    userImage
}


