// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import AdminPage from './components/AdminPage/AdminPage';
// import Parents from './components/Parents/Parents';

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <Link to="/admin">AdminPage</Link>
//           <Link to="/parents">Parents</Link>
//         </nav>
//         <Routes>
//           <Route path="/admin" element={<AdminPage />} />
//           <Route path="/parents" element={<ParentList />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// function ParentList() {

//   return (
//     <div>
//        <Parents 
//         schoolname="Surya Teja School"
//         schoollocation="Parvathipuram"
//         imageUrl="https://static.vecteezy.com/system/resources/previews/006/132/939/non_2x/cartoon-illustration-of-school-building-free-vector.jpg"
//       />
//       <Parents 
//         schoolname="Noble Public  School"
//         schoollocation="Parvathipuram"
//         imageUrl="https://img.freepik.com/free-vector/school-building-educational-institution-college_107791-1051.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1713225600&semt=sph"
//       />
//           <Parents 
//         schoolname="Marks Public  School"
//         schoollocation="Parvathipuram"
//         imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoXZiIJXuDfV4xfnXw7mztsBDCqREmM55QPaJ0wCaH-LYoAhQbRVFbPvZWbDpgzDBy-z4&usqp=CAU"
//       />
//           <Parents 
//         schoolname="Bhaskar Public  School"
//         schoollocation="Parvathipuram"
//         imageUrl="https://us.123rf.com/450wm/tigatelu/tigatelu1908/tigatelu190800029/129270452-happy-little-kids-going-to-school.jpg"
//       />
//        <Parents 
//         schoolname="Vedanthu Public  School"
//         schoollocation="Parvathipuram"
//         imageUrl="https://img.freepik.com/free-vector/vector-cartoon-illustration-school-building-green-lawn-road-trees-educalion-l_134830-1588.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais"
//       />
//        <Parents 
//         schoolname="Lions Public  School"
//         schoollocation="Parvathipuram"
//         imageUrl="https://img.freepik.com/free-vector/back-school-background-with-building_23-2147855757.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713225600&semt=ais"
//       />
//         <Parents 
//         schoolname="Ravendra Bharathi  School"
//         schoollocation="Parvathipuram"
//         imageUrl="https://img.freepik.com/premium-vector/kids-go-school-vector-illustration_97632-360.jpg"
//       />  <Parents 
//       schoolname="Chaithanya Public  School"
//       schoollocation="Parvathipuram"
//       imageUrl="https://img.freepik.com/free-vector/kids-playing-school_1308-48.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710288000&semt=ais"
//     />
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminPage from './components/AdminPage/AdminPage';
import Parents from './components/Parents/Parents';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h1>WELCOME TO XCEEDIQ SCHOOLS</h1>
        <nav>
          <Link to="/admin">AdminPage</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/parents">Parents</Link>
        </nav>
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/parents" element={<ParentList />} />
        </Routes>
      </div>
    </Router>
  );
}

function ParentList() {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const handleViewClick = (schoolname) => {
    // Handle view click logic, for example, redirect to a specific page
    console.log(`Viewing details of ${schoolname}`);
  };
  

  const schools = [
    {
      schoolname: "Surya Teja School",
      schoollocation: "Parvathipuram",
      imageUrl: "https://static.vecteezy.com/system/resources/previews/006/132/939/non_2x/cartoon-illustration-of-school-building-free-vector.jpg"
    },
    {
      schoolname: "Noble Public  School",
      schoollocation: "Parvathipuram",
      imageUrl: "https://img.freepik.com/free-vector/school-building-educational-institution-college_107791-1051.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1713225600&semt=sph"
    },
    {
      schoolname: "Marks Public  School",
      schoollocation: "Parvathipuram",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoXZiIJXuDfV4xfnXw7mztsBDCqREmM55QPaJ0wCaH-LYoAhQbRVFbPvZWbDpgzDBy-z4&usqp=CAU"
    },
    {
      schoolname: "Bhaskar Public  School",
      schoollocation: "Parvathipuram",
      imageUrl: "https://us.123rf.com/450wm/tigatelu/tigatelu1908/tigatelu190800029/129270452-happy-little-kids-going-to-school.jpg"
    },
    {
      schoolname: "Vedanthu Public  School",
      schoollocation: "Parvathipuram",
      imageUrl: "https://img.freepik.com/free-vector/vector-cartoon-illustration-school-building-green-lawn-road-trees-educalion-l_134830-1588.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais"
    },
    {
      schoolname: "Lions Public  School",
      schoollocation: "Parvathipuram",
      imageUrl: "https://img.freepik.com/free-vector/back-school-background-with-building_23-2147855757.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713225600&semt=ais"
    },
    {
      schoolname: "Ravendra Bharathi  School",
      schoollocation: "Parvathipuram",
      imageUrl: "https://img.freepik.com/premium-vector/kids-go-school-vector-illustration_97632-360.jpg"
    },
    {
      schoolname: "Chaithanya Public  School",
      schoollocation: "Parvathipuram",
      imageUrl: "https://img.freepik.com/free-vector/kids-playing-school_1308-48.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710288000&semt=ais"
    },
  ];

  const filteredSchools = schools.filter((school) =>
    school.schoolname.toLowerCase().includes(filter.toLowerCase())
  );

  
  return (
    <div>
      <input type="text" value={filter} onChange={handleFilterChange} placeholder="Filter by school name" />
      <div className="school-cards">
        {filteredSchools.map((school, index) => (
          <div key={index} className="school-card">
            <h2>{school.schoolname}</h2>
            <p>Location: {school.schoollocation}</p>
            <img src={school.imageUrl} alt={school.schoolname} className="school-image" />
            <button onClick={() => handleViewClick(school.schoolname)}>View</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
