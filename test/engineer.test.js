const Engineer = require ("../lib/Engineer");

describe('Engineer',()=>{
  describe('Initialization',()=>{
      it('create an object for an id and name',()=>{
          const engineer=new Engineer(4,'Brandon','email.4@gmail.com','bperez05');

          expect(engineer.name).toEqual('Brandon');
          expect(engineer.id).toEqual(4);
          expect(engineer.email).toEqual('email.4@gmail.com');
          expect(engineer.getGitHub()).toEqual('bperez05');
      });
  });
  describe('gitHub test',()=>{
      it('return the github user name',()=>{
          const engineer=new Engineer(4,'Brandon','email.4@gmail.com','bperez05');

          expect(engineer.getGitHub()).toEqual('bperez05');
      });
  });
  
  describe('getRole test',()=>{
      it('return the Engineer string',()=>{
          const engineer=new Engineer(4,'Brandon','email.4@gmail.com','bperez05');

          expect(engineer.getRole()).toEqual("Engineer");
      });
  });
});
