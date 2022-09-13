import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeCommit, faArrowDown, faPerson } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { Container } from '../utils';

const COMMIT_COUNT_ENDPOINT = 'https://api.github.com/repos/heavy-division/b78xh/commits?per_page=1';
const CONTRIBUTOR_COUNT_ENDPOINT = 'https://api.github.com/repos/heavy-division/b78xh/contributors?per_page=1';
const DOWNLOAD_COUNT_ENDPOINT = 'https://api.github.com/repos/heavy-division/b78xh/releases/0.1.14';

const Statistic = (props: {statCount: string, statName: string, icon: IconProp}) => (
    <div id={props.statName} className="grid grid-col place-items-center">
        <div className="inline-flex gap-x-3">
            <h1 className="text-3xl font-bold">{props.statCount}</h1>
            <FontAwesomeIcon icon={props.icon} className="text-2xl mt-[9px]" />
        </div>
        <p className="font-bold text-xl">{props.statName}</p>
    </div>
);

export const Community = () => {
    const [commitCount, setCommitCount] = useState('0');
    const [contributorCount, setContributorCount] = useState('0');

    useEffect(() => {
        fetch(COMMIT_COUNT_ENDPOINT).then((res) => {
            const commitCount = res.headers.get('Link')?.match(/&page=(\d+)>; rel="last"/)?.[1] ?? '0';

            setCommitCount(commitCount);
        });

        fetch(CONTRIBUTOR_COUNT_ENDPOINT).then((res) => {
            const commitCount = res.headers.get('Link')?.match(/&page=(\d+)>; rel="last"/)?.[1] ?? '0';

            setContributorCount(commitCount);
        });

    }, []);
    return (
        <section id="community" className="bg-gradient py-10">
                <div className="grid grid-col place-items-center">
                   <p className="text-4xl font-black md:justify-start">Community Insights</p>
                    <div className="bg-blue-tailwind w-96 md:w-3/4 h-fit mt-8 p-8">
                        <p className="font-extrabold text-3xl">Statistics</p>
                        <div className="grid grid-col md:flex md:justify-center gap-x-12 place-items-center mt-2 gap-y-2">
                            <Statistic icon={faCodeCommit} statCount={commitCount} statName={"Commits"} />
                            <Statistic icon={faPerson} statCount={contributorCount} statName={"Contributors"} />
                            <Statistic icon={faArrowDown} statCount={'50K+'} statName={"Downloads"} />
                        </div>
                    </div>
                </div>
        </section>
    )
}