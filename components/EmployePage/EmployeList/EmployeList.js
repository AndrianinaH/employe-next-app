import {
  Table,
  TableRow,
  TableCell,
  Paper,
  Button,
  TableHead,
  TableBody
} from '@material-ui/core';
import { Link } from '../../../routes';
import { useQuery } from 'react-apollo-hooks';
import * as query from '../../../graphql/employe/query';
import EmployeItem from './EmployeItem/EmployeItem';

const EmployeList = props => {
  const { data, loading, error } = useQuery(query.GET_ALL_EMPLOYE);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  if (!data || !data.allEmployes) {
    return <div>Error</div>;
  }
  console.log(data);
  let employes = data.allEmployes.map((el, index) => {
    return <EmployeItem key={el.id} employe={el} {...props} />;
  });

  return (
    <Paper className='papers'>
      <Button variant='contained' color='primary'>
        <Link route='/employe-add'>
          <a>Ajouter un employé</a>
        </Link>
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Photo</TableCell>
            <TableCell>Nom</TableCell>
            <TableCell>Prénom</TableCell>
            <TableCell>Poste</TableCell>
            <TableCell>Sexe</TableCell>
            <TableCell>Date de naissance</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{employes}</TableBody>
      </Table>
    </Paper>
  );
};

export default EmployeList;
