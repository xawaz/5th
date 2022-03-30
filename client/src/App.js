
import "./App.css";
import { useState } from "react";
import Axios from "axios";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {

  const [name,setName]= useState("");
  const [gender,setGender]= useState("");
  const [aadhar,setAadhar]= useState(0);
  const [ownerId,setOwnerId]= useState(0);
  const [buyerId,setBuyerId]= useState(0);
  const [phoneNumber,setPhoneNumber]= useState(0);


  const [propertyList,setPropertyList]=useState([]);
  const [transactionList,setTransactionList]=useState([]);



  const addOwner= async () => {
    Axios.post("http://localhost:3001/create",{
      name:name,
      gender:gender,
      aadhar:aadhar,
      ownerId:ownerId,
      phoneNumber:phoneNumber,
    }).then(()=>{
      console.log("success owner");
    });
  };//key:value

  const getProperties= async() => {
    Axios.get("http://localhost:3001/properties").then((response)=>{
      setPropertyList(response.data);
    });
  }

  const getTransactions= async() => {
    Axios.get("http://localhost:3001/trans").then((response)=>{
      setTransactionList(response.data);
    });
  }













  const addBuyer= async () => {
    Axios.post("http://localhost:3001/buy",{
      name:name,
      gender:gender,
      aadhar:aadhar,
      buyerId:buyerId,
      phoneNumber:phoneNumber,
    }).then(()=>{
      console.log("success owner");
    });
  };



















  return (
    <Router>
      <div className="App">

        <nav className="navi">
          <div class="logo">
            <h1>FRZ Properties</h1>
          </div>
          <div class="links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/owners">Owners</a>
            <a href="/buyers">Buyers</a>
            <a href="/transaction">Transactions</a>
          </div>
        </nav>

        <Switch>

          <Router exact path="/transaction">
            <div className="employees">
              <button onClick={getTransactions}>Show Transactions</button>
              
              {transactionList.map((val,key) => {
                return <div className="employee">
                  <h3 className="indi-div">PID:{val.propertyId}</h3>
                  <h3>Transaction ID: {val.transId}</h3>
                  <h3>Owner Id: {val.ownerId}</h3>
                  <h3>Buyer Id: {val.buyerId}</h3>
                  <h3>Property Id: {val.propertyId}</h3>
                  <h3>Price in Rs: {val.price}</h3>
                  

                  
                  </div>
              })}
            </div>


          </Router>



          <Route exact path="/">
            

            <img className="image" src={require("./img1.jpg")}   ></img>
              <h1 className="invite">Want to list your own property ? Contact us via registering in the owners page</h1>
            <div className="employees">
              <button onClick={getProperties}>Show Properties</button>
              
              {propertyList.map((val,key) => {
                return <div className="employee">
                  <h3 className="indi-div">PID:{val.propertyId}</h3>
                  <h3 className="typ">Type: {val.type}</h3>
                  <h3>SQFT: {val.sqft}</h3>
                  <h3 className="adr">Address: {val.address}</h3>
                  <h3>OwnerID: {val.ownerId}</h3>
                  <h3>Phone: {val.phoneNumber}</h3>
                  <h3 className="rnt">Rent: {val.rent}/month</h3>
                  

                  
                  </div>
              })}
            </div>
            </Route>

            <Route exact path="/about">
            {/* <img className="image" src={require("./img1.jpg")} width="400px"  ></img> */}
              <h2 className="about">Launched in 2022, frz.com, India’s No. 1 property portal, deals with every aspect of the consumer needs in the real estate industry. It is an online forum where buyers, sellers and brokers/agents can exchange information about real estate properties quickly, effectively and inexpensively. At frz.com, you can advertise a property, browse through properties, build your own property microsite, and keep yourself updated with the latest news and trends making headlines in the realty sector. </h2>

            </Route>

            <Route exact path="/owners">
              <div>
                <h2 className="ownerInfo">Register as an owner here !</h2>
                <h2 className="ownerInfo">We will contact you to post your property</h2>
                <div className="information">
              <label>Name: </label>
              <input type="text"
                onChange={(event)=>{setName(event.target.value);}}
              />
              <label>Gender(M/F): </label>
              <input type="text"
                onChange={(event)=>{setGender(event.target.value);}}
              />
              <label>Aadhar: </label>
              <input type="number"
                onChange={(event)=>{setAadhar(event.target.value);}}
              />
              <label>OwnerId: </label>
              <input type="number"
                onChange={(event)=>{setOwnerId(event.target.value);}}
              />
              <label>Phone number: </label>
              <input type="number"
                onChange={(event)=>{setPhoneNumber(event.target.value);}}
              />

              <button onClick={addOwner}>Add Owner</button>
            </div>

              </div>
            </Route>

            <Route exact path="/buyers">
            <div>
                <h2 className="ownerInfo">Register as a buyer here !</h2>
                <div className="information">
              <label>Name: </label>
              <input type="text"
                onChange={(event)=>{setName(event.target.value);}}
              />
              <label>Gender(M/F): </label>
              <input type="text"
                onChange={(event)=>{setGender(event.target.value);}}
              />
              <label>Aadhar: </label>
              <input type="number"
                onChange={(event)=>{setAadhar(event.target.value);}}
              />
              <label>BuyerId: </label>
              <input type="number"
                onChange={(event)=>{setBuyerId(event.target.value);}}
              />
              <label>Phone number: </label>
              <input type="number"
                onChange={(event)=>{setPhoneNumber(event.target.value);}}
              />

              <button onClick={addBuyer}>Add Buyer</button>
            </div>

              </div>
            </Route>


        </Switch>
        
      </div>



    </Router>
    
    

  );
}

export default App;
