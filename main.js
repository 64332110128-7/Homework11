const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

function Counter({item : {id, number}, hdlUpdate, delCounter}) {

    return (
        <div className='counter'>
            <button onClick = {() => hdlUpdate(id,-1)}> - </button>
            <h3>{number}</h3>
            <button onClick = {() => hdlUpdate(id,1)}> + </button>
            <button onClick = {() => hdlUpdate(id,-number)}> C </button>
            <button onClick = {() => delCounter(id)}> X </button>
        </div>
    )
}

function SumInfo({ counters })  {
    const sum = counters.reduce((acc, counter) => acc + counter.number, 0)

    const stTitle = {
        color: '#8bd450',
        fontSize: '40px'
    }
    return (
        <div className='suminfo'>
            <h1 style={stTitle}>Sum = {sum}</h1>
        </div>
    )
}

function App() {
    const [counters, setCounter] = React.useState([{id: 1, number: 0}]);

    const hdlUpdate = (id, num) => {
        let cloneCounters = [...counters]
        let idx = cloneCounters.findIndex( el => el.id === id)
        if( cloneCounters[idx].number + num < 0 ){
            return
        }
        cloneCounters[idx].number += num
        setCounter(cloneCounters)
    }

    const hdlAddCounter = () => {
        let newId = counters.length === 0 ? 1 : counters.at(-1).id +1
        setCounter([...counters, {id: newId, number : 0}])
    }

    const delCounter = (id) => {
        const newCounter = counters.filter(counter => counter.id !== id)
        setCounter(newCounter)
    }
    

    return (
    <>
        <h1 className='text-center'>Codecamp Academy 01</h1>
        <SumInfo counters={counters}/>
        <button className='button-center' onClick = {hdlAddCounter}>Add counter</button>
        {counters.map( el => {
            return <Counter key={el.id} item={el} hdlUpdate={hdlUpdate} delCounter={delCounter}/>
        })}
    </>
    )
}