import { useRouter } from "next/router";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const developer = () => {
  const router = useRouter();

  const developerId = router.query.developerId;

  const filtered = details.filter((member) => {
    return member.id == developerId;
  });
  return (
    <>
      {filtered.map((member) => (
        <ul key={member.id}>
          <h1>{member.name}</h1>
          <h3>{member.role}</h3>
        </ul>
      ))}
      {!filtered.length && (
        <ul>
          <h3>Developer doesn't exist</h3>
        </ul>
      )}
    </>
  );
};

export default developer;
