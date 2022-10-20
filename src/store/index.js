import { combineReducers } from 'redux';
import learner from './modules/learner';
import courses from './modules/courses';
import feedback from './modules/feedback';
import trainers from './modules/trainers';
import scrollId from './modules/scrollId';

export default combineReducers({
  learner,
  courses,
  feedback,
  trainers,
  scrollId,
});
