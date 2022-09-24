import logo from './logo.svg';
import './App.css';
import { Reach } from '@reach-sh/stdlib';
import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';
//const stdlib = new Reach(env);
const reach = loadStdlib("ALGO")

reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));

  const MyAlgoWallet = () => {

    const account = useRef()
    const balance = useRef()


    const [accountBal, setAccountBal] = useState(0);
    const [accountAddress, setAccountAddress] = useState('');


    const connectWallet = async () =>{
        try{
            await getAccount()
            await getBalance()
                
        }catch(err){
            console.log(err)
        }
    }

    const getAccount = async () => {
        try{
           account.current = await reach.getDefaultAccount()
            setAccountAddress(account.current.networkAccount.addr)
            console.log("Account :" + account.current.networkAccount.addr)
        }catch(err){
            console.log(err)
        }
    }

    const getBalance = async () => {
        try{
              let rawBalance = await reach.balanceOf(account.current)
                balance.current = reach.formatCurrency(rawBalance, 4)
                setAccountBal(balance.current)
            console.log("Balance :" + balance.current)
        }catch(err){
            console.log(err)
        }
      
    }

    return(
        <MyAlgoWalletMain>
            <img src= {myalgo} alt="My Algo" height= "70px"/>
            <ConnectWalletButton accountAddress={accountAddress} connectWallet = {connectWallet} accountBal = {accountBal}/>
            <TransferFund account = {account} getBalance = {getBalance} />
            <FundAccount account = {account} getBalance = {getBalance}/>
        </MyAlgoWalletMain>
    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
