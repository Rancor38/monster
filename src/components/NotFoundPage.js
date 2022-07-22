import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return <div>
              <Link to="/">Err fetch failed, results not found</Link>
          </div>;
};

export default NotFoundPage;