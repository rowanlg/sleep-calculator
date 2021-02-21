import React from 'react'
import styled from 'styled-components'


const AppWrapper = styled.div ` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #F2F2F2;
  color: #707070;
  font-family: Montserrat;
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
  position: relative;
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
  position: relative;
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
  position: absolute;
`
const HoursHand = styled.div ` 
  z-index: 3;
  width: 5px;
  height: 70px;
  border-radius: 20px;
  background: #92D6D3;
  position: absolute;
  margin: 0px 0px 70px;
  /* transform: translateY(70px); */
  transform-origin: bottom center;
`
const MinutesHand = styled.div ` 
  z-index: 2;
  width: 5px;
  height: 90px;
  border-radius: 20px;
  background: #FF9F9F;
  position: absolute;
  margin: 0px 0px 90px;
  transform-origin: bottom center;
`
const SecondsHand = styled.div ` 
  z-index: 1;
  width: 3px;
  height: 100px;
  border-radius: 20px;
  background: #707070;
  position: absolute;
  margin: 0px 0px 100px;
  transform-origin: bottom center;
`
const ChosenHoursHand = styled.div ` 
  z-index: 1;
  width: 3px;
  height: 130px;
  border-radius: 20px;
  background: #707070;
  position: absolute;
  margin-bottom: 130px;
  transform-origin: bottom center;
`
const ChosenMinutesHand = styled.div ` 
  z-index: 1;
  width: 3px;
  height: 130px;
  border-radius: 20px;
  background: #707070;
  position: absolute;
  margin-bottom: 130px;
  transform-origin: bottom center;
`
const SleepWakeSwitch = styled.div ` 
  width: 15rem;
  display: flex;
  margin-top: 2.5rem;
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
const SleepMode = styled.div ` 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 40px;
    margin-top: 1.5rem;
    margin-bottom: 0.6rem;
  }
  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 25px;
    font-weight: 600;
  }
  p {
    font-size: 25px;
    margin: 0.5rem;
  }
  .footNote {
    font-size: 10px;
    text-align: center;
  }
`
const WakeMode = styled.div ` 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 40px;
    margin-top: 1.5rem;
    margin-bottom: 0.6rem;
  }
  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 25px;
    font-weight: 600;
  }
  p {
    font-size: 25px;
    margin: 0.5rem;
  }
  .footNote {
    font-size: 10px;
    text-align: center;
  }
`


function App() {
  const initialDate = new Date()
  const chosenSleepDate = new Date()
  const chosenWakeDate = new Date()
  const addedFourCycles = new Date()
  const addedFiveCycles = new Date()
  const addedSixCycles = new Date()
  const addedSevenCycles = new Date()
  const removedFourCycles = new Date()
  const removedFiveCycles = new Date()
  const removedSixCycles = new Date()
  const removedSevenCycles = new Date()
  
  const [seconds, setSeconds] = React.useState(initialDate.getSeconds())
  const [minutes, setMinutes] = React.useState(initialDate.getMinutes())
  const [hours, setHours] = React.useState(initialDate.getHours())
  
  const [chosenSleepTime, setChosenSleepTime] = React.useState("22:00")
  const [chosenWakeTime, setChosenWakeTime] = React.useState("07:00")
  
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
  
  const chosenSleepHours = parseInt(chosenSleepTime.split('')[0] + chosenSleepTime.split('')[1])
  const chosenSleepMinutes = parseInt(chosenSleepTime.split('')[3] + chosenSleepTime.split('')[4])
  
  chosenSleepDate.setHours(chosenSleepHours, chosenSleepMinutes, 0)
  addedFourCycles.setHours(chosenSleepDate.getHours() + 6, chosenSleepDate.getMinutes() + 15, 0)
  addedFiveCycles.setHours(chosenSleepDate.getHours() + 7, chosenSleepDate.getMinutes() + 30 + 15, 0)
  addedSixCycles.setHours(chosenSleepDate.getHours() + 9, chosenSleepDate.getMinutes() + 15, 0)
  addedSevenCycles.setHours(chosenSleepDate.getHours() + 10, chosenSleepDate.getMinutes() + 30 + 15, 0)
  
  const chosenWakeHours = parseInt(chosenWakeTime.split('')[0] + chosenWakeTime.split('')[1])
  const chosenWakeMinutes = parseInt(chosenWakeTime.split('')[3] + chosenWakeTime.split('')[4])
  
  chosenWakeDate.setHours(chosenWakeHours, chosenWakeMinutes, 0)
  removedFourCycles.setHours(chosenWakeDate.getHours() - 6, chosenWakeDate.getMinutes() - 15, 0)
  removedFiveCycles.setHours(chosenWakeDate.getHours() - 7, chosenWakeDate.getMinutes() - 30 - 15, 0)
  removedSixCycles.setHours(chosenWakeDate.getHours() - 9, chosenWakeDate.getMinutes() - 15, 0)
  removedSevenCycles.setHours(chosenWakeDate.getHours() - 10, chosenWakeDate.getMinutes() - 30 - 15, 0)
  
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

  function SleepWakeTimes() {
    return (
      <>
        <h3>Set your alarm for:</h3>
        <p>{addedFourCycles.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - 4 cycles (6h)</p>
        <p>{addedFiveCycles.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - 5 cycles (7.5h)</p>
        <p>{addedSixCycles.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - 6 cycles (9h)</p>
        <p>{addedSevenCycles.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - 7 cycles (10.5h)</p>
        <p className="footNote">*includes an added 15 minutes for getting to sleep</p>
      </>
    )
  }
  function WakeSleepTimes() {
    return (
      <>
        <h3>Go to sleep at:</h3>
        <p>{removedFourCycles.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - 4 cycles (6h)</p>
        <p>{removedFiveCycles.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - 5 cycles (7.5h)</p>
        <p>{removedSixCycles.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - 6 cycles (9h)</p>
        <p>{removedSevenCycles.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - 7 cycles (10.5h)</p>
        <p className="footNote">*includes an added 15 minutes for getting to sleep</p>
      </>
    )
  }

  return (
    <AppWrapper>
      <ClockRing>
        <ClockWrapper>
          {/* <RingDots /> */}
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
      {/* <SleepWakeSwitch>
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
      <SleepMode style={sleepWake ? {display: 'flex'} : {display: 'none'}}>
        <input 
          type="time" 
          value={chosenSleepTime} 
          onChange={e => setChosenSleepTime(e.target.value)} 
          style={{
            border: "none",
            background: "transparent",
            fontFamily: "Montserrat",
            fontSize: "40px",
            fontWeight: "600",
            margin: "1.5rem",
            color: "#707070"
          }}
        />
        <SleepWakeTimes />
      </SleepMode>
      <WakeMode style={sleepWake ? {display: 'none'} : {display: 'flex'}}>
        <input 
          type="time" 
          value={chosenWakeTime} 
          onChange={e => setChosenWakeTime(e.target.value)} 
          style={{
            border: "none",
            background: "transparent",
            fontFamily: "Montserrat",
            fontSize: "40px",
            fontWeight: "600",
            margin: "1.5rem",
            color: "#707070"
          }}
        />
        <WakeSleepTimes />
      </WakeMode> */}
    </AppWrapper>
  );
}

export default App;
