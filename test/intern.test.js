const Intern= require ("../lib/Intern");

describe('Intern',()=>{
  describe('Initialization',()=>{
      it(' create an object for a id and name',()=>{
          const intern=new Intern(4,'Brandon','email.4@gmail.com','schoolName');
          expect(intern.name).toEqual('Brandon');
          expect(intern.id).toEqual(4);
          expect(intern.email).toEqual('email.4@gmail.com');
          expect(intern.school).toEqual('schoolName');
      });
  });
  describe('getSchool test',()=>{
      it('return the git hub user name',()=>{
          const intern=new Intern(4,'Brandon','email.4@gmail.com','schoolName');

          expect(intern.getSchool()).toEqual('schoolName');
      });
  });
  
  describe('getRole test',()=>{
      it('return the Intern string',()=>{
          const intern=new Intern(4,'Brandon','email.4@gmail.com','schoolName');

          expect(intern.getRole()).toEqual("Intern");
      });
  });
});