import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
  SvgIcon,
  OutlinedInput,
  InputAdornment, Pagination
} from '@mui/material';
import {Add, Search} from '@mui/icons-material';
import {useEffect, useState} from 'react';
import {Configuration, DefaultApi, LotEntity} from '../codegen';

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

export function Lots() {
  const [lots, setLots] = useState<LotEntity[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Используйте сгенерированный клиент
        const api = new DefaultApi(new Configuration({
          basePath: 'http://localhost:5000',
          accessToken: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNiNzlhNmE5LWViNTItNGZjYS1iMGZiLTJlYTRhNDliNGQ4YSIsImtleSI6Ijg1NmNlOTMyMDljZDBlNWUiLCJpYXQiOjE3MDU0MjcxNTgsImV4cCI6MTczNjk4NDc1OH0.3tmWX5zlQbO0Jd4hSI8E8yjjCGoW5OXTY7ON8xz7Xb8`
        }));
        const response = await api.lotControllerLotGetFiltered({
          skip: 0,
          take: 8,
        });

        // Или используйте axios, если предпочитаете
        // const response = await axios.get('http://localhost:3000', { headers: { Accept: 'application/json' } });

        setLots(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const renderSearch = (
    <Card sx={{ p: 2 }}>
      <OutlinedInput
        defaultValue=""
        fullWidth
        placeholder="Search lot"
        startAdornment={(
          <InputAdornment position="start">
            <SvgIcon
              color="action"
              fontSize="small"
            >
              <Search/>
            </SvgIcon>
          </InputAdornment>
        )}
        sx={{ maxWidth: 500 }}
      />
    </Card>
  );

  return (
      <Container sx={{ py: 8 }} maxWidth='lg'>
        <Stack spacing={3}>
          <Stack
            direction='row'
            justifyContent='space-between'
            spacing={4}
          >
            <Typography variant='h4'>
              Lots
            </Typography>
            <Box>
              <Button
                startIcon={<Add />}
                variant='contained'
              >
                Add
              </Button>
            </Box>
          </Stack>
          {renderSearch}
          <Grid container spacing={4}>
            {lots?.map((lot) => (
              <Grid item key={lot.id} xs={12} sm={6} md={4} lg={3}>
                <Card

                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component='img'
                    loading='lazy'
                    image={`http://localhost:5000${lot.images[0]?.url}`}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {lot.name}
                    </Typography>
                    <Typography>
                      {lot.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>View</Button>
                    <Button size='small'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Pagination
              count={3}
              size="small"
            />
          </Box>
        </Stack>
      </Container>
  );
}
