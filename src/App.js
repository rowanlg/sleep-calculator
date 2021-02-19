import React from 'react'
import styled from 'styled-components'


const AppWrapper = styled.div ` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const ClockWrapper = styled.div ` 
  width: 30rem;
  height: 30rem;
  border-radius: 30rem;
  border: solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CenterDot = styled.div ` 
  z-index: 10;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: #000;
`
const HoursHand = styled.div ` 
  z-index: 1;
  width: 10px;
  height: 150px;
  border-radius: 20px;
  background: #00f;
  position: absolute;
  margin-bottom: 150px;
  transform-origin: bottom center;
`
const MinutesHand = styled.div ` 
  z-index: 1;
  width: 10px;
  height: 200px;
  border-radius: 20px;
  background: #002;
  position: absolute;
  margin-bottom: 200px;
  transform-origin: bottom center;
`
const SecondsHand = styled.div ` 
  z-index: 1;
  width: 5px;
  height: 200px;
  border-radius: 20px;
  background: #002;
  position: absolute;
  margin-bottom: 200px;
  transform-origin: bottom center;
`

function App() {
  const initialDate = new Date()
  const [seconds, setSeconds] = React.useState(initialDate.getSeconds())
  const [minutes, setMinutes] = React.useState(initialDate.getMinutes())
  const [hours, setHours] = React.useState(initialDate.getHours())
 
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
      <ClockWrapper>
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
    </AppWrapper>
  );
}

export default App;
