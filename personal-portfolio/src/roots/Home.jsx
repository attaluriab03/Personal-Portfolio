import { React } from 'react'
import { NavigationBar } from '../components/NavigationBar.jsx';

export const Home = () => {
    
    // use 'Link' to add to navigation bar 
    return (
        <div> 
            <NavigationBar />
            <h1> Welcome to Abhinav Attaluri's Personal Portfolio! </h1>
            
        </div>
    );
}