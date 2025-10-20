import { SignOutButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div className="">
      <h1>Dashboard</h1>
      <SignOutButton>
        <button>Sign Out</button>
      </SignOutButton>
    </div>
  );
};

export default DashboardPage;
