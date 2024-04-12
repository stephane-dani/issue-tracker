/** @format */
// import IssueForm from "../_components/IssueForm";
import dynamic from "next/dynamic";
import NewIssueLoading from "./loading";
import IssueFormSkeleton from "./loading";

export const IssueForm = dynamic(
  () => import("@/app/issues/_components/IssueForm"),
  { ssr: false, loading: () => <IssueFormSkeleton /> }
);

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;
