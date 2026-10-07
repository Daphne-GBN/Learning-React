import StudentDetails from "./StudentDetails";

export default function StudentProfile({name}) {
    const handleProfileComplete = () => {
        alert("Profile Completed");};
  return (
    <div>
      <h2>Student Profile</h2>
      <StudentDetails name={name} 
      onComplete = {handleProfileComplete}/>
    </div>
  );
}