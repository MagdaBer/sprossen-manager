import React from 'react';
import '../App.less';
import { Link } from 'react-router-dom';

export default function HomePage(): JSX.Element {
  return (
    <main className="homePage pageContainer">
      <Link to="/menu" className="homePage__entranceLink">
        <h1>Sprossen Manager</h1>
      </Link>
    </main>
  );
}
