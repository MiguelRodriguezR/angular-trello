import {CONFIG} from './config';

const STR = {

  english: {
    listAdder: {
      title: '+ Add a new list',
      placeholder: 'Enter the list title ...',
      button: 'Add List'
    }

  },
  spanish: {
    listAdder: {
      title: '+ Añadir una nueva lista',
      placeholder: 'Introduzca el título de la lista...',
      button: 'Añadir Lista'
    }
  }

};

export const STRINGS = STR[CONFIG.language];


