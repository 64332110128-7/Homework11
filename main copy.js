const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

function Counter() {
    const [countNum, setCountNum] = React.useState(0)
    const [title, setTitle] = React.useState("CCAC")

    const updateCounter = (n) => {
        if(countNum+n < 0){
            return
        }
        setCountNum(prv => prv+n)
    }
    return (
    <div className='counter'>
      <button onClick = {() => updateCounter(-1)}> - </button>
      <h3>{countNum}</h3>
      <button onClick = {() => updateCounter(1)}> + </button>
      <button onClick = {() => updateCounter(-countNum)}> C </button>
    </div>
  )
}

function SumInfo(props)  {
    const stTitle = {
        color : props.color,
        fontSize : props.size==="big" ? '50px' : '40px'
    }
    return (
        <div className='suminfo'>
        {/* <h1 style={stTitle}>Sum = 0</h1> */}
        <h1 style={{ color: props.color, fontSize: '50px'}}>Sum = 0</h1>
        </div>
    )
}

function App() {
    const [counters, setCounter] = React.useState([{id: 1, number: 0}]);
    // let allCounter = Array(counters).fill(<Counter />)

    return (
    <>
        <h1 className='text-center'>Codecamp Academy 01</h1>
        <button className='text-center' onClick = { ()=>{}}>Add counter</button>
        <SumInfo color="deeppink" size="big"/>
        {/* <Counter /> */}
        {/* {allCounter} */}
    </>
    )
}