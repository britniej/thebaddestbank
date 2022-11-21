


function NavBar(){
//Breaks and makes NavBar uncalled-> const MongoClient = require('mongodb').MongoClient;
//let db            = null;
 
// connect to mongo
//MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
  //  console.log("Connected successfully to db server");

    // connect to myproject database
    //db = client.db('myproject');
//});


 /*function findName({name:brit}) {
    const name = db.users.find([0]);
    return name;
 }*/

  return(

    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/logout/">Logout</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">AllData</a>
          </li>          
        </ul>
      </div>
      Welcome, name!
    </nav>
  );

}