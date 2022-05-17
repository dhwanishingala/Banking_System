let myBalance = parseInt(document.getElementById("myAccountBalance").innerText);
console.log("this is " + myBalance);

function sendMoney() {
  var enteredName = document.getElementById("enterName").value;
  var enterAmount = parseInt(document.getElementById("enterAmount").value);
  var enterName = enteredName.toLowerCase();
  // console.log(enterName);
  // console.log(enterAmount);


  if (enterAmount > myBalance) {
    alert("Insufficient Balance.")
  } else {
    var findUserBankAccount = enterName + "balance";
    console.log(findUserBankAccount);
    var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
    var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount;
    if (myAccountBalance >= 0) {
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Successful Transaction !!  
        $${enterAmount} is sent to ${enterName}.`)


      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`$${enterAmount} is sent to recepient with Email-id ${enterName}on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
    }
    else {
      alert("Not Sufficient Balance to proceed for transaction");

      //Transaction history
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`Unseccessful Transaction of $${enterAmount} to recepient ${enterName} ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
    }


  }
}




// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const bodyParser = require("body-parser");

// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));

// mongoose.connect("mongodb://localhost:27017/bankDB")

// const itemsSchema = {
//   name: String,
//   balance: Number
// }

// const historySchema = {
//   sender: String, 
//   receiver: String,
//   amount: Number
// }

// const Customer = mongoose.model("Customer", itemsSchema)
// const newTransaction = mongoose.model("Transaction", historySchema)

// //creation of dummy data of customers.
// const item1 = new Customer ({
//   name: "Nitya",
//   balance: 10000.00
// })
// const item2 = new Customer ({
//   name: "Sanjit",
//   balance: 10500.00
// })
// const item3 = new Customer ({
//   name: "Gautam",
//   balance: 19000.00
// })
// const item4 = new Customer ({
//   name: "Divya",
//   balance: 500.00
// })
// const item5 = new Customer ({
//   name: "Pranay",
//   balance: 25000.00
// })

// const customers = [item1, item2, item3, item4, item5]
// const transactions = []

// app.get('/', (req, res) => {
//   Customer.find({}, (err,foundItems) => {

//     if (foundItems.length === 0) {
//       Customer.insertMany(customers, (err) => {
//         if (err) {
//           console.log(err)
//         } 
//         else {
//           console.log("Saved items to database successfully!")
//         }
//         res.redirect("/")
//       })
//     }
//     else {
//       res.render("home", {})
//     }
//   })
// })

// app.post("/customers", (req, res) => {
//   Customer.find({}, (err,foundItems) => {
//     res.render("viewCustomer", {listTitle: "All Customers", customerData: foundItems})
//   })
// })

// app.post("/firstCustomer", (req, res) => {
//   const cust1Name =  req.body.checkbox
//   Customer.find({"name": cust1Name}, (err,foundItems) => {
//     res.render("firstCustomer", {listTitle: cust1Name, custInfo: foundItems})
//   })
// })

// app.post("/paymentSuccess", (req, res) => {
//   senderName = req.body.cust1
//   recieverName = req.body.cust2
//   amountPaid = req.body.amount

//   const transaction = new newTransaction ({
//     sender: senderName,
//     receiver: recieverName,
//     amount: amountPaid
//   })
//   transaction.save()
//   transactions.push(transaction)
//   res.render("paymentSuccess", {})
// })

// app.get("/transaction-history", (req, res) => {
//   newTransaction.find({}, (err,foundItems) => {
//     newTransaction.insertMany(transactions, (err) => {
//       res.render("history", {listTitle: "Transaction History", history: foundItems})
//     })
//   })
// })

// app.listen(3000, function() {
//     console.log("Server started on port 3000");
// });

