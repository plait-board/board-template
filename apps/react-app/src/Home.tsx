import { HelloWorld } from '@bhouston/react-lib';
import React, { useMemo, useState } from 'react';

const Home: React.FC = () => {
  const [serverMessage, setServerMessage] = useState<string>();

  useMemo(() => {
    fetch('/api/message').then(async (res) => {
      const json = await res.json();
      console.log(json);
      return setServerMessage(json.message);
    });
  }, []);

  return (
    <div className="text-center mt-4">
      <HelloWorld name={serverMessage ?? ''} />
      <img src="/static/React-icon.svg" alt="React Logo" />{' '}
    </div>
  );
};

export default Home;
