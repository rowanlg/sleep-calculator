import React from 'react'
import styled from 'styled-components'


const AppWrapper = styled.div ` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #F2F2F2;
`
const ClockRing = styled.div ` 
  width: 18rem;
  height: 18rem;
  border-radius: 30rem;
  background: #EDEDED;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 7px 15px 2px rgba(0,0,0,0.2);
`
const ClockWrapper = styled.div ` 
  width: 15rem;
  height: 15rem;
  border-radius: 30rem;
  background: #F4F4F4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.1);
  color: #707070;
`
const CenterDot = styled.div ` 
  z-index: 10;
  width: 10px;
  height: 10px;
  border-radius: 20px;
  background: #707070;
`
const RingDot = styled.div ` 
  z-index: 10;
  width: 5px;
  height: 5px;
  border-radius: 20px;
  background: #C4C4C4;
`
const HoursHand = styled.div ` 
  z-index: 3;
  width: 5px;
  height: 70px;
  border-radius: 20px;
  background: #92D6D3;
  position: absolute;
  margin-bottom: 70px;
  transform-origin: bottom center;
`
const MinutesHand = styled.div ` 
  z-index: 2;
  width: 5px;
  height: 90px;
  border-radius: 20px;
  background: #FF9F9F;
  position: absolute;
  margin-bottom: 90px;
  transform-origin: bottom center;
`
const SecondsHand = styled.div ` 
  z-index: 1;
  width: 3px;
  height: 100px;
  border-radius: 20px;
  background: #707070;
  position: absolute;
  margin-bottom: 100px;
  transform-origin: bottom center;
`
const SleepWakeSwitch = styled.div ` 
  width: 13rem;
  display: flex;
  margin-top: 2rem;
  border-radius: 10px;
  /* box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.2); */
  h3 {
    margin: 0.25rem;
    font-size: 15px;
  }
`
const Sleep = styled.div ` 
  width: 50%;
  text-align: center;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  background: #FFFFFF;
  cursor: pointer;
`
const Wake = styled.div ` 
  width: 50%;
  text-align: center;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  background: #D9D9D9;
  cursor: pointer;
`

function RingDots() {
  return (
    <>
      <RingDot 
        style={{
          position: "absolute",
          marginBottom: "264px"}}
      />
      <RingDot 
        style={{
          position: "absolute",
          marginBottom: "230px",
          marginLeft: "130px"}}
      />
      <RingDot 
        style={{
          position: "absolute",
          marginBottom: "135px",
          marginLeft: "230px"}}
      />


      <RingDot 
        style={{
          position: "absolute",
          marginLeft: "264px"}}
      />
      <RingDot 
        style={{
          position: "absolute",
          marginTop: "230px",
          marginLeft: "130px"}}
      />
      <RingDot 
        style={{
          position: "absolute",
          marginTop: "135px",
          marginLeft: "230px"}}
      />


      <RingDot 
        style={{
          position: "absolute",
          marginTop: "264px"}}
      />
      <RingDot 
        style={{
          position: "absolute",
          marginTop: "230px",
          marginRight: "130px"}}
      />
      <RingDot 
        style={{
          position: "absolute",
          marginTop: "135px",
          marginRight: "230px"}}
      />


      <RingDot 
        style={{
          position: "absolute",
          marginRight: "264px"}}
      />
      <RingDot 
        style={{
          position: "absolute",
          marginBottom: "230px",
          marginRight: "130px"}}
      />
      <RingDot 
        style={{
          position: "absolute",
          marginBottom: "135px",
          marginRight: "230px"}}
      />
      

    </>
  )
}

function App() {
  const initialDate = new Date()
  const [seconds, setSeconds] = React.useState(initialDate.getSeconds())
  const [minutes, setMinutes] = React.useState(initialDate.getMinutes())
  const [hours, setHours] = React.useState(initialDate.getHours())
 
  // True is Sleep mode, False is Wake mode
  const [sleepWake, setSleepWake] = React.useState(true)


  React.useEffect(() => {
    const updateTime = setTimeout(() => {
      const date = new Date()
      setSeconds(date.getSeconds())
      setMinutes(date.getMinutes())
      setHours(date.getHours())
    }, 1000)
  })
  
  return (
    <AppWrapper>
      <ClockRing>
        <ClockWrapper>
          <RingDots />
          <CenterDot />
          <HoursHand 
            style={{
              transform: `rotate(${hours * 30}deg)`
            }} 
          />
          <MinutesHand 
            style={{
              transform: `rotate(${minutes * 6}deg)`
            }} 
          />
          <SecondsHand 
            style={{
              transform: `rotate(${seconds * 6}deg)`
            }} 
          />
        </ClockWrapper>
      </ClockRing>
      <SleepWakeSwitch>
        <Sleep 
          onClick={() => setSleepWake(true)}
          style={
            sleepWake 
            ? {background: '#FFFFFF'}
            : {background: '#D9D9D9'}
          }
        >
          <h3>Sleep</h3>
        </Sleep>
        <Wake 
          onClick={() => setSleepWake(false)}
          style={
            sleepWake 
            ? {background: '#D9D9D9'}
            : {background: '#FFFFFF'}
          }
        >
          <h3>Wake</h3>
        </Wake>
      </SleepWakeSwitch>
      
    </AppWrapper>
  );
}

export default App;
