import React, { useState, useEffect,useCallback  } from 'react';
import CardStats from "./Cards/Cardstats";
import { faChartPie, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from "axios";

export default function HeaderStats() {
  const [data, setData] = useState({});

  useEffect( ()=> 
     axios.get("http://localhost:5000/admin/dashboard")
			.then(res => { console.log(res.data);
        setData(res.data);
        console.log(res.data,data)
    }),[]);

  return (
    <>
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="NEW USERS"
                  statTitle={data['totalUsers']}
                  statArrow="up"
                  statPercent={100*(data['candidat']/data['totalUsers']).toFixed(2)}
                  statPercentColor="text-emerald-500"
                  statDescripiron="Candidates"
                  statIconName={<FontAwesomeIcon icon={faUsers} />}
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Trainings"
                  statTitle={data['totalTrainigs']}
                  statArrow="down"
                  statPercent={100*((data['totalTrainigs']-data['emptyTrainings'])/data['totalTrainigs']).toFixed(2)}
                  statPercentColor="text-orange-500"
                  statDescripiron="is subscribed to"
                  statIconName={<FontAwesomeIcon icon={faChartPie} />}
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="New Users"
                  statTitle={data['newUsers']}
                  statArrow="up"
                  statPercent={100*(data['candidat']/data['newUsers']).toFixed(2)}
                  statPercentColor="text-emerald-500"
                  statDescripiron="Candidates"
                  statIconName={<FontAwesomeIcon icon={faUsers} />}
                  statIconColor="bg-sky-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
