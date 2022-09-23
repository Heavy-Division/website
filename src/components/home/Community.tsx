import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeCommit, faArrowDown, faPerson } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const COMMIT_COUNT_ENDPOINT = 'https://api.github.com/repos/heavy-division/b78xh/commits?per_page=1';
const CONTRIBUTOR_COUNT_ENDPOINT = 'https://api.github.com/repos/heavy-division/b78xh/contributors?per_page=1';

const Statistic = (props: {statCount: string, statName: string, icon: IconProp}) => (
    <div id={props.statName} className="grid-col grid place-items-center">
        <div className="inline-flex gap-x-3">
            <h1 className="text-3xl font-bold">{props.statCount}</h1>
            <FontAwesomeIcon icon={props.icon} className="mt-[9px] text-2xl" />
        </div>
        <p className="text-xl font-bold">{props.statName}</p>
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
        <section id="community">
            <div className="grid-col grid place-items-center">
                <p className="my-4 text-4xl font-black md:justify-start">Community Insights</p>
                <div className="mb-12 h-fit bg-blue-tailwind p-8 md:w-3/4">
                    <p className="text-3xl font-extrabold">Statistics</p>
                    <div className="grid-col grid place-items-center gap-x-12 gap-y-2 md:flex md:justify-center">
                        <Statistic icon={faCodeCommit} statCount={commitCount} statName="Commits" />
                        <Statistic icon={faPerson} statCount={contributorCount} statName="Contributors" />
                        <Statistic icon={faArrowDown} statCount="50K+" statName="Downloads" />
                    </div>
                </div>
            </div>
        </section>
    );
};
