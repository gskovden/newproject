import React from 'react';

import Header from '../header';
import style from './style.css';

const H1 = () => (
    <h1 className={style.appHeader}>
        Hello world 2
    </h1>
)

const Page = () => (
    <div>
        <Header />
        <H1 />
    </div>
)

export default Page;
