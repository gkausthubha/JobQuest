import { useEffect, useState } from "react";

function App() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/jobs")
            .then(response => response.json())
            .then(data => {
                console.log("Fetched jobs:", data);
                setJobs(data);
            })
            .catch(error => console.error("Error fetching jobs:", error));
    }, []);

    return (
        <div>
            <h1>Job Listings</h1>
            {jobs.length === 0 ? (
                <p>No jobs available</p>
            ) : (
                <ul>
                    {jobs.map(job => (
                        <li key={job.id}>
                            <h2>{job.title}</h2>
                            <p>{job.company} - {job.location}</p>
                            <p>{job.description}</p>
                            <p><strong>Salary:</strong> {job.salary}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;  
