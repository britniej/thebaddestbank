function Spa() {
  const [user, setUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <HashRouter>
      <div>
        <UserContext.Provider
          value={{
            users: [
              {
                name: 'abel',
                email: 'abel@mit.edu',
                password: 'secret',
                balance: 100,
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
              />
            </Route>
            <Route path='/logout/' component={Logout} />
            <Route path='/deposit/' component={Deposit} />
            <Route path='/withdraw/' component={Withdraw} />
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
