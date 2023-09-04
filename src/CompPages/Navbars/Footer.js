import React from 'react';
import Header from '../Navbars/Header'

export default function Footer() {
    return (
   
        <footer className="footer mt-auto py-3 bg-light fixed-bottom">
        <div className="container text-center">
          <span className="text-muted">
            &copy; { new Date().getFullYear() } BookWorm.  All rights reserved.

          </span>
        </div>
      </footer>
    );
}