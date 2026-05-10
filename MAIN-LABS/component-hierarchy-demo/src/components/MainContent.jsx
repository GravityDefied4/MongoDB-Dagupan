import ProfileCard from "./ProfileCard";

function MainContent({ users }) {
  return (
    <div className="main">
      <h2>User List</h2>

      <div className="card-container">
        {users.map((user, index) => (
          <ProfileCard
            key={index}
            name={user.name}
            course={user.course}
          />
        ))}
      </div>
    </div>
  );
}

export default MainContent;