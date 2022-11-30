import es from '../locales/es';
import en from '../locales/en';
import store from '../features/store';

const languages = {es, en};

const t = key => {
  const {locale: {selectedLocale}} = store.getState();
  const split = key.split('.');

  return (
    split.reduce((acc, item) => {
      return acc[item];
    }, languages[selectedLocale]) ?? key
  );
};

export default t;