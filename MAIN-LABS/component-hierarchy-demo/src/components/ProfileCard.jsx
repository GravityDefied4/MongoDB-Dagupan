function ProfileCard({ name, course }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Course: {course}</p>
    </div>
  );
}

export default ProfileCard;