import Link from "next/link";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const AboutUs = () => {
  return (
    <>
      {details.map((member) => (
        <ul>
          <Link href={"aboutus/1"}>{member.name}</Link>
        </ul>
      ))}
    </>
  );
};

export default AboutUs;
