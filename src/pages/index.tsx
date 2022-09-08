import type { NextPage } from "next";
import Head from "next/head";
import { ChangeEventHandler, useCallback, useMemo, useState } from "react";
import { Team } from "tba-api-v3client-ts";
import { MIN_FRC_YEAR } from "../server/utils/tba_zod";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const tbaTeam = trpc.useQuery(["tba.team.getTeam", { teamKey: "frc4944" }]);

  return (
    <>
      <Head>
        <title>FRC Team Analyzer</title>
        <meta name="description" content="View stats on FRC Teams" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          FRC Team Analyzer
        </h1>
      </main>
    </>
  );
};

export default Home;
