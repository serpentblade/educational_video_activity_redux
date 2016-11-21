const initialState = {
  currentActivity: {
    title: 'Prefixes',
    videoUrl: 'https://www.youtube.com/watch?v=mRdMYuNeAng',
    introduction: `Welcome!  You will be watching a hip hop video explaining prefixes.
    The video talks about what a prefix is, common prefixes and their definitions,
    and examples of words that contain these prefixes.  Before you begin, consider the following
    questions about prefixes.  Take notes while watching the video and consider these questions carefully.
    You will be assessed following the video based on these questions. Enjoy!`,
    instructions: [
      'Take notes on all of the prefixes, what they mean, and the example words containing prefixes.',
      'Use the left and right arrow keys to skip backward and forward in the video',
      'Remember, you can always pause or watch the video again to help'
    ],
    assessment: [
      {
        id: 'question-1',
        type: 'multiple-choice',
        text: 'A prefix can be found _________ of a word.',
        alt_text: 'Where in a word is the prefix found?',
        options: ['at the front', 'in the middle', 'at the end'],
        answer: 'at the front'
      },
      {
        id: 'question-2',
        type: 'true-false',
        text: 'The prefix "anti-" means against',
        alt_text: 'What does the prefix "anti-" mean?',
        answer: true
      },
      {
        id: 'question-3',
        type: 'multiple-choice',
        text: 'Which prefixes are discussed in the video?',
        options: [ 'un-', 'anti-', 'ab-', 'semi-', 'fan-' ],
        answer: [ 'un-', 'anti-', 'semi-' ]
      },
      {
        id: 'question-4',
        type: 'multiple-choice',
        text: 'Which prefixes means not?',
        alt_text: 'Which prefix means not?',
        options: [ 'un-', 'inter-', 'non-', 'semi-' ],
        answer: [ 'un-', 'non-' ]
      },
      {
        id: 'question-5',
        type: 'multiple-choice',
        text: 'Which of the following words contain a prefix?',
        alt_text: 'What are some example words that contain a prefix?',
        options: [ 'Opposite', 'Impossible', 'Prefix', 'Small', 'Telephone', 'Cantalope' ],
        answer: [ 'Impossible', 'Prefix', 'Telephone' ]
      }
    ]
  }
}

export default function update (state = initialState, action) {
  // Do ntohing, this is just to populate an example video data state
  return state
}
