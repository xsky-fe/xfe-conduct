export default function fetchApi(url, params, data = {}){
    const fetchParams = params.method === 'POST' ? {
        ...params,
        body: JSON.stringify(data),
    } : {
        ...params,
    }
    return fetch(url, fetchParams)
    .then(res => res.JSON())
}