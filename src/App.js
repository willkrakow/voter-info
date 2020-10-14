import React, { useState, useEffect } from 'react';
import './App.css';
import { Form, Input, Container, Button } from 'reactstrap';
import ElectionData from './ElectionData.js';
import BioInfo from './BioInfo.js';

function App() {
  const [address, setAddress] = useState('');
  const [elections, setElections] = useState();
  const [district, setDistrict] = useState('');

  const handleChange = (e) => {
    setAddress(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const baseURL = "https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyDwlNhKFu4vePr_9fYSnJCMZtWXZyioSWk&address="
    const electionIDQuery = "&electionId=2000"
    let cleanedAddress = encodeURI(address)
    let url = baseURL + cleanedAddress + electionIDQuery
    fetch(url)
      .then((response) => response.json())
      .then((response) => setElections(response))
      .catch((err) => alert('Address not found. Please enter your complete address in the format 101 Streetname St. City, ST 12345'))
  }
 
  useEffect(() => {

  })
  return (
    <Container className="w-50 mx-auto my-5">
      <h1 className="text-center">Let's find your voter info</h1>
      <Form onSubmit={handleSubmit} className="text-center">
        <Input type="text" value={address} onChange={handleChange} />
        <Button type="submit" className="my-2 w-25">Submit</Button>
      </Form>
      <ElectionData elections={elections} />
    </Container>
  );
}

export default App;
