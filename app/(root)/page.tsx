import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalaceBox from "@/components/TotalBalaceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Lucas",
    lastName: "Cruz",
    email: "a@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Visitante"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalaceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 256.68 }]}
      />
    </section>
  );
};

export default Home;
