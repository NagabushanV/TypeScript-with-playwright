import { test, expect } from '@playwright/test';

let employee_list =new Array();

test.describe('Persist employee details',() =>{
  test("check the employee save API",async ({request}) => {
      await test.step("Save the employee details", async ()=>{
        const response = await request.post('/employee', {
          data: {
            "name": "Jayaramachandran",
            "date_of_joining": "2020-08-30",
            "email": "jayaramachandran@whizpath.com",
            "gender": "male",
            "bio": "father, software developer",
            "designation": "software Engineer"
          }
        })
        expect(response.ok()).toBeTruthy();
        const data = await response.json();
        employee_list.push(data);
      });

      await test.step("check if the employee is persisted corectly", async ()=>{
        for(let index=0;index<employee_list.length;index){
          const response = await request.get('/employee/${employee_list[index].id}')
          expect(response.ok()).toBeTruthy();
          const data = await response.json();
          expect(data.id).toEqual(employee_list[index].id);
        }
       
      });

  });

});

