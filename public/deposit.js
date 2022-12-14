function Deposit(props){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

    
  return (
    <Card
      bgcolor="info"
      header="Deposit"
      status={status}
      body={show ? 
        <DepositForm 
        setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function DepositMsg(props){
 

  return (<>
    <h5>Successful Deposit!</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
          props.setShow(true);
          props.setStatus('');
      }}>
        Deposit again
    </button><br/><br/>
  </>);
} 

function DepositForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');
  const ctx = React.useContext(UserContext);
  console.log(ctx);
  const user = ctx.users[0];
  const userEmail = user.email;

  function handle(){
    fetch(`/account/update/${email}/${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(JSON.stringify(data.value.email) + `, ` + JSON.stringify(data.value.balance) + ` is your balance.`);
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Deposit failed');
            console.log('err:', text);
        }
    });
  }

  return( <>
    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder={userEmail}
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}
      /><br/>
      
    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Deposit</button>

  </>);
}