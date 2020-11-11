import React from 'react'
import ReactDOM from 'react-dom'
import Tip from "../../components/Tip/Tip";
import styles from './index.less'

const App = () => {
    return <div className={styles.page}>
        <span className={styles.title}>HelloWorld</span>
        <Tip />
    </div>
};

ReactDOM.render(<App />, document.getElementById('app'));

