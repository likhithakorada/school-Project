import React, { useState } from 'react';
import axios from 'axios';
import './AdminPage.css';

const AdminPage = () => {
  const [schoolName, setSchoolName] = useState("");
  const [schoolFees, setSchoolFees] = useState("");
  const [locationName, setLocation] = useState("");
  const [contactInfo, setContactInfo] = useState(""); 
  const [schoolId, setschoolId] = useState("");

  let post =()=>{
    axios.post('http://localhost:3000/schools', { schoolName:schoolName,schoolFees:schoolFees,location:locationName,contactInfo:contactInfo })
        .then(response => {
            console.log('User added successfully:', response.data);
        }).catch(error => {
            console.error('Error adding user:', error);
        });
}
    let getById =()=>{
    axios.get("http://localhost:3000/schools/" +schoolId)
    .then(response => {
      console.log('User added successfully:', response.data);
  }).catch(error => {
      console.error('Error adding user:', error);
  });
    
    
  }
  let put=()=> {
    axios.put("http://localhost:3000/schools/" + schoolId,{
      schoolName: schoolName,
      schoolFees: schoolFees,
      location: locationName,
      contactInfo: contactInfo})
      .then(response => {
        console.log('User added successfully:', response.data);
    }).catch(error => {
        console.error('Error adding user:', error);
    });
  }
  let Delete=()=>{
    axios.delete("http://localhost:3000/schools/" + schoolId)
    .then(response => {
      console.log('User added successfully:', response.data);
  }).catch(error => {
      console.error('Error adding user:', error);
  });
  }
  return (
    <div>
      <div className="operation-card-container">
        <div className="operation-card">
          <h4>POST</h4>
          <input type="text" name="schoolName" value={schoolName} onChange={e => setSchoolName(e.target.value)} placeholder="School Name" required /><br/>
          <input type="number" name="schoolFees" value={schoolFees} onChange={e => setSchoolFees(e.target.value)} placeholder="School Fees" required /><br/>
          <input type="text" name="locationName" value={locationName} onChange={e => setLocation(e.target.value)} placeholder="Location " required /><br/>
          <input type="text" name="contactInfo" value={contactInfo} onChange={e => setContactInfo(e.target.value)} placeholder="Contact Information" required /><br/>
          <button onClick={post}>post</button>
        </div>
  
        <br/>
  
        <div className="operation-card">
          <h4>Get By School Id</h4>
          <input type='text' value={schoolId} onChange={e=>setschoolId(e.target.value)} placeholder="Id"/><br/>
          <button onClick={getById}>get</button>
        </div>
  
        <br/>
  
        <div className="operation-card">
          <h4>Put By School Id</h4>
          <input type="text" name="schoolName" value={schoolName} onChange={e => setSchoolName(e.target.value)} placeholder="School Name" required /><br/>
          <input type="number" name="schoolFees" value={schoolFees} onChange={e => setSchoolFees(e.target.value)} placeholder="School Fees" required /><br/>
          <input type="text" name="locationName" value={locationName} onChange={e => setLocation(e.target.value)} placeholder="Location" required /><br/>
          <input type="text" name="contactInfo" value={contactInfo} onChange={e => setContactInfo(e.target.value)} placeholder="Contact Information" required /><br/>
          <input type='text' value={schoolId} onChange={e=>setschoolId(e.target.value)} placeholder="Id"/><br/>
          <button onClick={put}>put</button>
        </div>
  
        <br/>
  
        <div className="operation-card">
          <h4>Delete By Id</h4>
          <input type='text' value={schoolId} onChange={e=>setschoolId(e.target.value)} placeholder="Id"/><br/>
          <button onClick={Delete}>Delete</button>
        </div>
      </div>
    </div>
  );
  

}

export default AdminPage;