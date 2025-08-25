// import logo from '../../assets/img/icon128.png';

// import { DEFAULT_TAKS, START_TIMER_COMMAND } from '../../utils/constants';

// chrome.runtime.setUninstallURL(
//   'https://www.readlax.com/en?rel=uninstall-chrome-timer',
//   () => {}
// );

// --------------------- focus timer ---------------------------------- //

// async function playSound(source = '../../assets/sounds/timer.mp3', volume = 1) {
//   await createOffscreen();
//   await chrome.runtime.sendMessage({ play: { source, volume } });
// }

// Create the offscreen document if it doesn't already exist
// async function createOffscreen() {
//   if (await chrome.offscreen.hasDocument()) return;
//   await chrome.offscreen.createDocument({
//     url: 'offscreen.html',
//     reasons: ['AUDIO_PLAYBACK'],
//     justification: 'testing', // details for using the API
//   });
// }

// chrome.storage.onChanged.addListener(function (changes) {
//   if (changes.minutesLeft) {
//     const badgeText =
//       changes.minutesLeft?.newValue > 0
//         ? changes.minutesLeft.newValue + ' m'
//         : '';
//     chrome.action.setBadgeText({
//       text: badgeText,
//     });
//   }

//   if (changes.type) {
//     chrome.action.setBadgeBackgroundColor({
//       color: changes.type.newValue === 'Work' ? '#ef6c00' : '#0097a7',
//     });
//     chrome.action.setBadgeTextColor({
//       color: '#ffffff',
//     });
//   }
// });

// chrome.runtime.onMessage.addListener(message => {
//   if (message.timerAction === START_TIMER_COMMAND) {
//     chrome.alarms.create('focus_timer', {
//       periodInMinutes: 1,
//     });
//   } else if (message.timerAction === 'stop') {
//     chrome.alarms.clearAll();
//   }
// });

// chrome.alarms.onAlarm.addListener(function () {
//   chrome.storage.local
//     .get([
//       'minutesLeft',
//       'currentTimerIdx',
//       'timers',
//       'statistics',
//       'currentTask',
//     ])
//     .then(
//       ({ minutesLeft, currentTimerIdx, timers, statistics, currentTask }) => {
//         if (minutesLeft <= 1) {
//           const task = currentTask || DEFAULT_TAKS;
//           chrome.tabs.create({ url: 'timer.html' });
//           chrome.notifications.create(
//             'Focus_timer',
//             {
//               title: 'Focus timer',
//               message: 'Timer: time is up',
//               iconUrl: logo,
//               type: 'basic',
//             },
//             function (id) {
//               console.log(
//                 `ID: ${id}. Last error: ${JSON.stringify(
//                   chrome.runtime.lastError
//                 )}`
//               );
//             }
//           );
//           chrome.alarms.clearAll();
//           chrome.runtime.sendMessage({ time: minutesLeft });
//           const nextIndex = currentTimerIdx ? 0 : 1;
//           const timeObject = timers[nextIndex];
//           chrome.storage.local.set({
//             minutesLeft: 0,
//             timePassed: 0,
//             startTimestamp: 0,
//             type: timeObject.type,
//             currentTimerIdx: nextIndex,
//             isTimerRunning: false,
//             isTimerPaused: false,
//             statistics: [
//               ...(statistics || []),
//               {
//                 time: timers[currentTimerIdx].minutes * 60,
//                 type: timers[currentTimerIdx].type,
//                 taskId: task.id,
//                 taskTitle: task.title,
//                 date: +new Date(),
//               },
//             ],
//           });
//           // playSound();
//         } else {
//           chrome.runtime.sendMessage({ time: minutesLeft - 1 });
//           chrome.storage.local.set({ minutesLeft: minutesLeft - 1 });
//         }
//       }
//     );
// });
