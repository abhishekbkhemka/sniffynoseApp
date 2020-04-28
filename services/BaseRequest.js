import { BASE_URL } from "../constants/Constant";
import { AsyncStorage } from "react-native";

export const handleResponse = function (response) {
    if (response.status === 200 || response.status == 201) {
        // if (!response._bodyText) {
        // } else {
            return response.json();
        // }
    } else {
        let error = new Error(response);
        error.response = response
        throw error
    }
}


let post_request = {
    "credentials": 'same-origin',
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }
};

let get_request = {
    method: 'GET',
    "credentials": 'same-origin',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',

    },
    cache: 'default'
};

export const http = {

    post: async function (url, params, isAuthenticationNotRequired) {
        console.log(params)
        post_request.body = JSON.stringify(params);
        console.log('Inside Post',BASE_URL + url,post_request.body)
        // let user = await AsyncStorage.getItem('user');
        // user = JSON.parse(user);
        if (!isAuthenticationNotRequired ) {
            post_request.headers['Authorization'] =  "Token " +'cd75f92b8f922148565c666808a73ae277a254a4'
        }

        return fetch(BASE_URL + url, post_request).then(handleResponse)
    },

    get: async function (requestUrl, authenticate) {
        if (authenticate) {
            // let user = await AsyncStorage.getItem('user');
            // user = JSON.parse(user)
            // if (requestUrl.indexOf('?') == -1) {
            //     requestUrl += '?1=1&username=' + user.username + '&api_key=' + user.api_key
            // }
            get_request.headers['Authorization'] = "Token " +'cd75f92b8f922148565c666808a73ae277a254a4'
        }

        return fetch(BASE_URL + requestUrl, get_request).then(handleResponse)
    },

    upload: async function (uri, uuid) {
        let uploadUrl = 'upload-image/';
        let user = await AsyncStorage.getItem('user');
        user = JSON.parse(user);

        uploadUrl = uploadUrl + '?username=' + user.username + '&api_key=' + user.api_key

        let localUri = uri;
        let filename = localUri.split('/').pop();
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? 'image/' + match[1] : 'image';

        var formData = new FormData();
        formData.append("id", uuid);
        var photo = {
            uri: localUri,
            type: type,
            name: filename
        };
        formData.append('file', photo);

        let options = {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
        };

        return await fetch(BASE_URL + uploadUrl, options).then(handleResponse)
    }
}


