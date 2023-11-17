import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CalendarView } from '../sections/calendar/view';

const CalendarPage = () => {
  return (
    <>
      <Helmet>
        <title> Calendário </title>
      </Helmet>

      <CalendarView />
    </>
  );
};

export default CalendarPage;
