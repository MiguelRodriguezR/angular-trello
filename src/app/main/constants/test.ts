export const TEST_BOARD = {
  title: 'Trello Project',
  lists: [{
    title: 'To do',
    cards: [{title: 'Welcome to Trello!', checks: []}, {
      title: 'This is a card.',
      checks: [],
      description: 'And this card has a description\n'
    }, {
      title: 'Remember to take account of days when you have lots of meetings. If you only have two hours of "free" time outside meetings, don\'t make a big to-do list for yourself that day - you\'ll just get annoyed that you didn\'t get things done!',
      checks: []
    }]
  }, {
    title: 'doing',
    cards: [{title: 'EVERYTHING goes here.', checks: []}, {
      title: 'Checkbox test',
      checks: [{
        title: 'Checklist 1',
        elements: [{description: 'task monday', completed: true}, {
          description: 'task tuesday',
          completed: true
        }, {description: 'task wednesday', completed: true}, {
          description: 'task thursday',
          completed: true
        }, {description: 'task friday', completed: false}],
        completion: 80
      }, {
        title: 'Checklist 2',
        elements: [{description: 'task 1', completed: true}, {description: 'task 2', completed: false}],
        completion: 50
      }],
      description: ''
    }]
  }, {
    title: 'done',
    cards: [{
      title: 'When you get something done - move the card here. I tend to look back on this when doing my weekly roundup.',
      checks: []
    }]
  }]
};
