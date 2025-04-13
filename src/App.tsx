import { Home } from './pages/Home';

import './styles/theme.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TaskContext';
import { TaskStateModel } from './models/TaskStateModel';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formatSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 1,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export default function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
