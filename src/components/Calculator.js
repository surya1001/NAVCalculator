import React, {useState, useEffect} from 'react'
import {Button, ButtonGroup, Card, Container, Grid, TextField} from "@material-ui/core"

const Calculator = () => {
  let [amount, setAmount] = useState("0")
  let [unit, setUnit] = useState("0")
  let [change, setChange] = useState(false)
  let [changeUnit, setChangeUnit] = useState(false)

  let NAV = 11.226; 
  
  useEffect(() => setUnit(amount/NAV), [amount, NAV]) 
  useEffect(() => setAmount(unit*NAV), [unit, NAV])

  const changeAmountBtn = () => {
    setChange(true)
    setChangeUnit(false)
  }

  const changeUnitBtn = () => {
    setChangeUnit(true)
    setChange(false)
  }

  return (
    <Container maxWidth="sm">

      <Card variant="outlined" style={{padding:'15px', marginTop: '20px'}}>
        <div style={{margin: '20px 50px'}}>
          <h3 style={{textAlign: 'center'}}>NAV Calculator</h3>
          <h4>Mutual Fund - Motilal Oswal Liquid Fund - Direct Growth</h4>
          <h5>Net Asset Value - 11.226</h5>
        </div>
      <Grid container direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '30vh' }}>
      {
        change && !changeUnit
        ? <>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button size="large" name="amtbtn" id="amtbtn" disabled onClick={changeAmountBtn}>Amount</Button>
              <Button size="large" name="unitbtn" color="primary" id="unitbtn" onClick={changeUnitBtn}>Units</Button>
            </ButtonGroup>
            <div>
            <TextField style={{width: '100%', marginTop: '20px'}} id="outlined-basic" label="Amount" variant="outlined" value={amount} onChange={e => setAmount(e.target.value)} /> 
            <TextField style={{width: '100%', marginTop: '20px'}} id="outlined-basic" label="Unit" variant="filled" value={unit} onChange={e => setUnit(e.target.value)} disabled />  
            </div>
          </>  
        : <>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button size="large" name="amtbtn" color="primary" id="amtbtn" onClick={changeAmountBtn}>Amount</Button>
              <Button size="large" name="unitbtn" id="unitbtn" disabled onClick={changeUnitBtn}>Units</Button>
            </ButtonGroup>
            <div>
            <TextField style={{width: '100%', marginTop: '20px'}} id="outlined-basic" label="Amount" variant="filled" value={amount} onChange={e => setAmount(e.target.value)} disabled />
            <TextField style={{width: '100%', marginTop: '20px'}} id="outlined-basic" label="Unit" variant="outlined" value={unit}onChange={e => setUnit(e.target.value)} /> 
            </div>
          </>
      }
      </Grid>
      </Card>
    </Container>

  )
}

export default Calculator
