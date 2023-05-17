import Link from "next/link";

export const metadata = {
  title: "About Korawit Dev",
};

const AboutPage = () => {
  return (
    <div>
      <h1>About Korawit Dev</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
        totam error corporis esse, rem laboriosam odit, omnis quae quos natus
        nostrum maxime, reprehenderit molestiae nisi labore a adipisci aliquid
        quis. Quidem voluptatibus aspernatur rerum at necessitatibus. Officia,
        distinctio aliquid? Mollitia praesentium nesciunt laboriosam culpa
        deleniti delectus, iure recusandae consequatur aperiam tempore placeat
        nulla maxime id, repudiandae beatae, necessitatibus quam repellendus.
        Officiis adipisci accusantium qui placeat vitae debitis! Facere impedit,
        deleniti inventore tempore dignissimos praesentium neque ex fugiat velit
        ipsa, commodi unde quia itaque dicta nihil harum deserunt est sed
        provident dolorem id omnis! Ipsa nisi, velit nemo vero corrupti quis?
      </p>
      <br />
      <Link href="/">Back to home</Link>
    </div>
  );
};
export default AboutPage;
