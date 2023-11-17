/* eslint-disable react/jsx-key */
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { parse, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Label from '../../components/label';

// import { fShortenNumber } from '../../utils/format-number';

// ----------------------------------------------------------------------

export default function AppSched({ data, total, icon, color = 'primary', sx, ...other }: any) {
  const dateStr = String(data.date);
  const date = parse(dateStr, 'dd/MM/yyyy', new Date());

  const formattedDate = format(date, 'EEEE, dd, MMMM, yyyy', { locale: ptBR }).split(',');

  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        // px: 3,
        py: 2,
        borderRadius: 1.5,
        maxWidth: 290,
        // minWidth: 290,
        ...sx,
      }}
      {...other}
    >
      {icon && <Box sx={{ width: 64, height: 64 }}>{icon}</Box>}

      <Grid container xs={12} md sm alignItems="center" justifyContent="flex-start">
        <Grid item sm md xs={4}>
          <Typography
            variant="h1"
            sx={{ fontWeight: 300, borderLeft: '2px solid #C88D33', paddingLeft: 2, lineHeight: 1 }}
          >
            {formattedDate[1]}
          </Typography>
        </Grid>
        <Grid item sm md xs={8} pr={2}>
          <Typography variant="h6" sx={{ fontWeight: 400 }}>
            {formattedDate[0]}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 400, color: 'text.disabled' }}>
            {formattedDate[2]}, {formattedDate[3]}
          </Typography>
        </Grid>

        <Grid xs={12} item pl={2}>
          <Typography variant="subtitle1" sx={{ paddingTop: 2, lineHeight: 1 }}>
            {data.conducting}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            Dirigente
          </Typography>
          <Typography variant="subtitle1" sx={{ paddingTop: 1, lineHeight: 1 }}>
            {data.preacher}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            Preletor
          </Typography>
          <Typography variant="subtitle2" sx={{ paddingTop: 1 }}>
            {data.tags.map((tag: string) => (
              <Label color="error">{tag}</Label>
            ))}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

AppSched.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  data: PropTypes.any,
  total: PropTypes.number,
};
