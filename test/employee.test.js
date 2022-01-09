const Employee= require ("../lib/Employee.js");


describe('Employee',()=>{
    describe('Initialization',()=>{
        it('create an object for id and name',()=>{
            const employee=new Employee(4,'Brandon','email.4@gmail.com');

            expect(employee.name).toEqual('Brandon');
            expect(employee.id).toEqual(4);
            expect(employee.email).toEqual('email.4@gmail.com');
        });
    });
    describe('getName  test',()=>{
        it('should return the name',()=>{
            const employee=new Employee(4,'Brandon','email.5@gmail.com');

            expect(employee.getName()).toEqual('Brandon');
        });
    });
    describe('getId  test',()=>{
        it('should return the id',()=>{
            const employee=new Employee(4,'Brandon','email.4@gmail.com');

            expect(employee.getId()).toEqual(4);
        });
    });
    describe('getEmail test',()=>{
        it('should return the email',()=>{
            const employee=new Employee(4,'Brandon','email.4@gmail.com');

            expect(employee.getEmail()).toEqual('email.4@gmail.com');
        });
    });
    describe('getRole test',()=>{
        it('should return the Employee string',()=>{
            const employee=new Employee(4,'Brandon','email.4@gmail.com');

            expect(employee.getRole()).toEqual("Employee");
        });
    });
});


