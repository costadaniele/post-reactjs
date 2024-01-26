import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

import { GithubLogo } from 'phosphor-react';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1529603992250-a55acb77d146?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZyb250JTIwZW5kfGVufDB8fDB8fHwy" />

            <div className={styles.profile}>
                <Avatar src="https://github.com/costadaniele.png" />
                <strong>Daniele Costa</strong>
                <span>Front-End Developer</span>
            </div>

            <footer>
                <a href="https://github.com/costadaniele">
                    <GithubLogo size={20}/>
                    Github
                </a>
            </footer>

        </aside>
    );
}