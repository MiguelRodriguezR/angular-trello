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
    },
    checkAdder: {
      title: '+ Add a new check',
      placeholder: 'Enter the check title ...',
      button: 'Add check'
    },
    checkListAdder: {
      title: '+ Add a new checklist',
      placeholder: 'Enter the checklist title ...',
      button: 'Add checklist'
    },
    cardDialog: {
      description: 'Description'
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
    },
    checkAdder: {
      title: '+ Añadir una nueva tarea',
      placeholder: 'Introduzca el título de la tarea...',
      button: 'Añadir tarea'
    },
    checkListAdder: {
      title: '+ Añadir una nueva lista de tareas',
      placeholder: 'Introduzca el título de la lista de tareas...',
      button: 'Añadir lista'
    },
    cardDialog: {
      description: 'Descripción'
    }
  }

};

export const STRINGS = STR[CONFIG.language];


