import chai from "chai"
import chaiHttp from 'chai-http';
import request from 'request';
import server from '../main';
const expect = chai.expect;
const should = chai.should();


chai.use(chaiHttp);


// should get / 

describe('should GET /users',  () => {
    it('should get users 200 status', (done) =>{
        chai.request(server)
        .get('/users')
        .end( (err, res) => {
            res.should.have.status(200);
            done();
        });
    });

})
