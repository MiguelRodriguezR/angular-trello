import {CONFIG} from './config';

const STR = {

  english: {
    listAdder: {
      title: '+ Add a new list',
      placeholder: 'Enter the list title ...',
      button: 'Add List'
    },
    cardAdder: {
      title: '+ Add a new card',
      placeholder: 'Enter the card title ...',
      button: 'Add card'
    }

  },
  spanish: {
    listAdder: {
      title: '+ Añadir una nueva lista',
      placeholder: 'Introduzca el título de la lista...',
      button: 'Añadir Lista'
    },
    cardAdder: {
      title: '+ Añadir una nueva tarjeta',
      placeholder: 'Introduzca el título de la tarjeta...',
      button: 'Añadir tarjeta'
    }
  }

};

export const STRINGS = STR[CONFIG.language];


