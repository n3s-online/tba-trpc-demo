import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEventHandler, useCallback, useState } from "react";
import isNumeric from "../utils/isNumeric";
import { trpc } from "../utils/trpc";

const DEFAULT_TEAM = 4944;

const Home: NextPage = () => {
  const router = useRouter();
  const [teamNumber, setTeamNumber] = useState("");
  const tbaTeam = trpc.useQuery([
    "tba.team.getTeam",
    { teamKey: `frc${teamNumber || DEFAULT_TEAM}` },
  ]);

  const onInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      const onlyNumbers = event.target.value
        .split("")
        .filter((c) => isNumeric(c))
        .join("");
      setTeamNumber(onlyNumbers);
    },
    [setTeamNumber]
  );

  return (
    <>
      <Head>
        <title>FRC Team Analyzer</title>
        <meta name="description" content="View stats on FRC Teams" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <div className="flex flex-col">
          <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
            FRC Team Analyzer
          </h1>
          <span className="inline-block align-middle p-6">
            <input
              type="text"
              id="teamNumber"
              className="text-6xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
              placeholder={DEFAULT_TEAM.toString()}
              required
              onChange={onInputChange}
              value={teamNumber}
            />
          </span>
          {tbaTeam.data ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => router.push(`${teamNumber || DEFAULT_TEAM}`)}
            >
              Analyze {tbaTeam.data?.nickname}
            </button>
          ) : (
            <button
              className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
              disabled
            >
              Analyze
            </button>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
