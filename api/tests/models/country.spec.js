const { Countries,Activities, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Countries.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Countries.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work whenfills all the properties requierd', () => {
        Countries.create({ name: 'Argentina' ,flag:'unaurl',continent:'Americas',capital:'Buenos Aires',id:'ARG'});
      });
    });
  });
});
describe('Activities model', ()=>{
  beforeEach(()=>conn.authenticate()
  .catch(error=> console.error('Unable to connect to the database:', error)
  )
 )
 describe('Validators',()=>{
   beforeEach(()=>Activities.sync({force:true}))
   describe('name',()=>{
     it('it show throw an error if the name is null', (done)=>{
       Activities.create({})
       .then(()=> done (new Error('it requires a valid name')))
       .catch(()=>done())
      })
      it('it should work when pass a valid name',()=>{
        Activities.create({name:'example'})

      })
    })
   })
   })

