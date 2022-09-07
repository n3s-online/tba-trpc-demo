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
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3">
          {
            tbaTeam.data && 
            <>
              <FRCTeamCard team={tbaTeam.data} />
              <FRCEventsCard team={tbaTeam.data}/>
            </>
            
          }
        </div>
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {tbaTeam.data ? <p>{tbaTeam.data.nickname}</p> : <p>Loading..</p>}
        </div>
      </main>
    </>
  );
};

export default Home;

type FRCTeamCardProps = {
  team: Team;
};

const FRCTeamCard = ({
  team
}: FRCTeamCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{team.nickname}</h2>
      <p className="text-sm text-gray-600">{team.city}, {team.state_prov}, {team.country}</p>
      <a
        className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        href={`https://www.thebluealliance.com/team/${team.team_number}`}
        target="_blank"
        rel="noreferrer"
      >
        TBA
      </a>
    </section>
  );
};

const FRCEventsCard = ({
  team
}: FRCTeamCardProps) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const events = trpc.useQuery(["tba.team.getTeamEventsByYear", { year, teamKey: team.key }]);

  const yearOptions = useMemo(() => {
    const options = [];
    for(let i = MIN_FRC_YEAR; i <= year + 1; i++) {
      options.push(i);
    }
    return options;
  }, [year]);

  const onSelectChange = useCallback<ChangeEventHandler<HTMLSelectElement>>((event) => {
    setYear(parseInt(event.target.value));
  }, [setYear]);

  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <select onChange={onSelectChange}>
        {yearOptions.map((year: number) => <option value={year}>{year}</option>)}
      </select>
      {
        events.data && events.data.map((event) => <div>{event.name}</div>)
      }
    </section>
  );
};