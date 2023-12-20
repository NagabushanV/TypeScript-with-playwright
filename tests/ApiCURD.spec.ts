import { test, expect } from '@playwright/test';
var userid;
test("Get users", async({request})=>{
    const response=await request.get("https://reqres.in/api/users?page=2")
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

test("single user", async({request})=>{
    const response=await request.get("https://reqres.in/api/users/2")
    console.log(await response.json())
    expect(response.status()).toBe(200)
})
// post request //request

test("Create users", async({request})=>{
    const response=await request.post("https://reqres.in/api/users",
    
    {
        data:{ "name":"Nagabushan", "job": "trainer" },
        headers:{ "Accept" : "application/json" }
    });
    console.log(await response.json())
    expect(response.status()).toBe(201)

    var res = await response.json()
    userid =res.id
})

// put request //update

// test("Update users", async({request})=>{
//     const response=await request.put("https://reqres.in/api/users/"+userid,
    
//     {
//         data:{ "name":"Nagabushan", "job": "Test associate" },
//         headers:{ "Accept" : "application/json" }
//     });

    test("Update users", async({request})=>{
        const response=await request.patch("https://reqres.in/api/users/2"+userid,
        
        {
            data:{ "name":"Nagabushan", "job": "Test associate" },
            headers:{ "Accept" : "application/json" }
        });
    console.log(await response.json())
    expect(response.status()).toBe(200)

    var res = await response.json()
    userid =res.id
})

// delete request
test("Delete user", async ({request})=>{
    const response = await request.delete('https://reqres.in/api/users/'+userid)
    expect(response.status()).toBe(204)
})
