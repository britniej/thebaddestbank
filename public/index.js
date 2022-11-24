function Spa() {
  const [user, setUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [email, setEmail]   = React.useState('');

  return (
    <HashRouter>
      <div>
        <UserContext.Provider
          value={{
            users: [
              {
                name: 'brit',
                email: 'britniej',
                password: 'lila143',
                balance: 0,
              },
            ],
          }}
        >
          <div className='container' style={{ padding: '20px' }}>
            <NavBar
              user={user}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
            <Route path='/' exact component={Home} />
            <Route path='/CreateAccount/' component={CreateAccount} />
            <Route path='/login/'>
              <Login
                user={user}
                setUser={setUser}
                setIsLoggedIn={setIsLoggedIn}
                email={email}
                setEmail={setEmail}
              />
            </Route>
            <Route path='/logout/' component={Logout} />
            <Route path='/withdraw/' component={Withdraw} />
            <Route path='/deposit/'> 
              <Deposit
                 email={email} 
                 setEmail={setEmail}
                 /> </Route>
            {/* <Route path="/transactions/" component={Transactions} /> */}
            <Route path='/balance/' component={Balance} />
            <Route path='/alldata/' component={AllData} />
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById('root'));
