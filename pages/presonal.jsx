import { useState } from 'react';

const PresonalArea = ({ stars }) => {
    const [data, setdata] = useState(stars);

    return (
        <>
            <button type="primary">Primary Button</button>
            <div>Next stars: {data}</div>
        </>
    );
};

PresonalArea.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const json = await res.json();
    return { stars: json.stargazers_count };
};

export default PresonalArea;
