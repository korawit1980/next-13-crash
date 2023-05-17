import Link from "next/link";

async function fetchRepoContents(name: String) {
  await new Promise((resolve) => setTimeout(resolve, 2000)); //Wait 2 second
  const response = await fetch(
    `https://api.github.com/repos/korawit1980/${name}/contents`
  );
  const contents = await response.json();

  return contents;
}

const repoDirs = async (name: String) => {
  const contents = await fetchRepoContents(name);
  //   const dirs = contents.filter((content: any) => content.type === "dir");
  const dirs = Array.from(contents).filter(
    (content: any) => content.type === "dir"
  );

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir: any) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default repoDirs;
