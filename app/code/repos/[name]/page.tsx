import Repo from "@/app/components/repo";
import RepoDirs from "@/app/components/repoDirs";
import Link from "next/link";

type Params = {
  params: {
    name: string;
  };
};

const RepoPage = ({ params: { name } }: Params) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>
      {/* @ts-expect-error Server Component */}
      <Repo name={name} />
      {/* @ts-expect-error Server Component */}
      <RepoDirs name={name} />
    </div>
  );
};
export default RepoPage;
