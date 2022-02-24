export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {
  dispatch(schedulesSetLoading());

  const result = await get(`schedules?month=${month}&year=${year}`);

  const formatedSchedule = result.map(r => formatSchedule(r));

  dispatch(schedulesFetchItem(formatedSchedule));
};
