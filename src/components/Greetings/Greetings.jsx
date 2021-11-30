import React from 'react';

const Greetings = (props) => {
  const { lang, children } = props;

  const translate = (lang) => {
    if (lang === 'de') return 'Hallo';
    else if (lang === 'en') return 'Hello';
    else if (lang === 'fr') return 'Bonjour';
    else if (lang === 'es') return 'Hola';
    else return 'Hey';
  };

  return (
    <div className="box">
      <p>
        {translate(lang)} {children}
      </p>
    </div>
  );
};

export default Greetings;
