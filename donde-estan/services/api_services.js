const baseUrl = 'http://192.168.0.8:3000/api/persons';

// const baseUrl = 'https://immense-ocean-66121.herokuapp.com/api/persons';

export const getAll = async () =>{
    const response = await fetch(baseUrl);
    const data = await response.json();
    
    return data;
}

export const getOne = async (name) =>{
    const response = await fetch(`${baseUrl}/${name}`);
    const data = await response.json();
    return data;
    
}

// export const postOne = async (data) =>{
//     console.log(data)
//     const response = await fetch(`${baseUrl}/register`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'multipart/form-data',
//         },
//         body: JSON.stringify(data)
//     });
//     const nuevo = await response.json();
//     return nuevo;
// }


export const postOne = async (data) =>{
    console.log(data)
    // const response = await fetch(`${baseUrl}/register`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'multipart/form-data',
    //     },
    //     body: JSON.stringify(data)
    // });
    // const nuevo = await response.json();
    // return nuevo;
}
