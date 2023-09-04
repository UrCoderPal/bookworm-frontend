import React, { useState, useEffect } from 'react';
import './Account.css';
import Header from '../Navbars/Header';

const Account = ({ user, onLogout, onTogglePremium }) => {
    const [isPremium, setIsPremium] = useState(null);
    const [accountData, setAccountData] = useState(null); // To store account details

    useEffect(() => {
        const fetchAccountDetails = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/customer/getbyid/1', {
                    method: 'GET',
                    headers: {
                        // Add any required headers here (e.g., authentication headers)
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const accountDetails = await response.json();
                setAccountData(accountDetails);
            } catch (error) {
                console.error('Error fetching account details:', error);
            }
        };

        // Call the fetchAccountDetails function when the component mounts
        fetchAccountDetails();
    }, []);

    const togglePremium = () => {
        setIsPremium(!isPremium);
        onTogglePremium(!isPremium);
    };

    return (
        <>
        <Header/>
        <div className="accountbg">
            <div className="account">
                <h2>Account Details</h2>
                {accountData ? (
                    <>
                        <p><strong>Name</strong> {accountData.name}</p>
                        <p><strong>Email Address</strong> {accountData.email}</p>
                        <p><strong>Phone Number</strong> {accountData.phone}</p>
                        <p><strong>Premium User</strong><div className='isPremium'>{isPremium ? 'Yes' : 'No'}</div></p>
                    </>
                ) : (
                    <p>Loading account details...</p>
                )}

                <button onClick={onLogout}>Logout</button>
                <button onClick={togglePremium}>
                    {isPremium ? 'Switch to Basic' : 'Switch to Premium'}
                </button>
            </div>
        </div>
        </>
    );
};

export default Account;
