function AllData(){
    const [data, setData] = React.useState('');    

    React.useEffect(() => {
        
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));              
            });

    }, []);
     
    return JSON.stringify(data);
    

   /* //const ctx = React.useContext(data);
    const users = data.customers;
    //const users = JSON.stringify(data);
    
    return  (<Card
    bgcolor="warning"
    txtcolor="white"
    header="All Users Account Data"
    body={users.map((user) => (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">UserID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <th scope="row">{user.id}</th>
            <th scope="row">{user.name}</th>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.balance}</td>
          </tr>
        </tbody>
      </table>
    ))}
  /> ); */
}
