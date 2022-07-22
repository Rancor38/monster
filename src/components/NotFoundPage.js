import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return <div>
              <Link to="/">Err 404, page not found</Link>
          </div>;
};

export default NotFoundPage;