export default function fetchApi(url, params, data = {}){
    console.log(data.formData)
    const fetchParams = params.method === 'POST' ? {
        ...params,
        body: JSON.stringify(data.formData),
    } : {
        ...params,
    }
    return fetch(url, fetchParams)
    .then(res => {
        return res.text().then(function(text) {
            return text ? JSON.parse(text) : {}
          })
    })
}