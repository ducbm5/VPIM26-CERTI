import React from 'react';
import { CertificateLookup } from './components/CertificateLookup';

export default function App() {
  return (
    <CertificateLookup
      syncUrl={true}
      allowRaceSelection={true}
      enableAdmin={true}
    />
  );
}
