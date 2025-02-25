import { Button, Card } from 'react-bootstrap'
import React, { useState } from 'react'

const App = () => {

  const [countBtn, setCountBtn] = useState(0);
  const [countA, setCountA] = useState(0);

  const handleClickBtn = () => {
    setCountBtn(countBtn + 1);
  };

  const handleClickA = () => {
    setCountA(countA + 1);
  };

  return (
    <div className='container my-5'>
      <div className='border bg-dark rounded-4 py-5 px-5'>
        <Button variant='outline-danger' onClick={handleClickBtn}>Click me</Button>
        <a href="#" onClick={handleClickA} className='btn btn-primary'>Link</a>
        
        <Card className='my-5'>
          <Card.Body className='bg-info'>
            <Card.Title>Number of clicks</Card.Title>
            <Card.Text>
              Button Clicked: {countBtn}
            </Card.Text>
            <Card.Text>
              'a' Clicked: {countA}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default App