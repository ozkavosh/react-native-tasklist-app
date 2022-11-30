import es from '../locales/es';
import en from '../locales/en';
import {useSelector} from 'react-redux';

const languages = {es, en};

const useTranslate = () => {
  const {selectedLocale} = useSelector(state => state.locale);

  return (t = key => {
    const split = key.split('.');

    return (
      split.reduce((acc, item) => {
        return acc[item];
      }, languages[selectedLocale]) ?? key
    );
  });
};

export default useTranslate;
