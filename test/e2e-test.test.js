const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = require("chai").expect;

chai.use(chaiHttp);

/* const app = require("../index").app; */

const url = "http://localhost:3000";

describe("Inserte el nombre y el precio", () => {
  it("Esperamos un name y un price", (done) => {
    chai
      .request(url)
      .post("/api/v1/products")
      .send({ name: "Electrodomestico", price: 200 })
      .end((err, res) => {
        console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
});

/*
describe("Suite de pruebas e2e para el curso", () => {
  it("Esperamos un hola mundo"),
    (done) => {
      chai
        .request("htt[://localhost:3000") // O poniendo app 
        .get("/")
        .end((err, res) => {
          console.log("A");
          chai.assert.equal(res.text, "Hola mundo");
          done();
        });
      console.log("B");
    };
});
*/
