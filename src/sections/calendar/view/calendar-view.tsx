// import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Chip, Divider, Typography } from '@mui/material';
import BasicTabs from './tabs';
import { SCHEDULES } from '../../../_mock/sched';
import AppSched from '../app-sched';

// ----------------------------------------------------------------------

export default function CalendarView() {
  return (
    <BasicTabs index={0}>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Escala - Novembro
      </Typography>
      <Container maxWidth="xl">
        {SCHEDULES.map((weekDay) => (
          <>
            <Divider key={weekDay.id}>
              <Chip
                label={weekDay.eventType}
                sx={{ textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}
              />
            </Divider>

            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 2, sm: 8, md: 12 }}
                marginY={1}
                key={weekDay.id}
                // alignItems="center"
              >
                {weekDay.sched.map((itemSched) => (
                  <Grid xs={2} sm={4} md key={itemSched.id} item>
                    <AppSched data={itemSched} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </>
        ))}
      </Container>
    </BasicTabs>
  );
}
