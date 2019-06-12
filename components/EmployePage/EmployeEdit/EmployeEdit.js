import { useQuery } from 'react-apollo-hooks';
import TabContainer from './TabContainer';
import * as query from '../../../graphql/employe/query';

const EmployeEdit = props => {
  const { id } = props;
  //--------------- recupere l'employe by id
  const { data, loading, error } = useQuery(query.GET_EMPLOYE_BY_ID, {
    variables: {
      id: id
    }
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  if (!data || !data.getEmployeById) {
    return <div>Error</div>;
  }
  let employe = data.getEmployeById;
  console.log(employe);

  //------------- map le composant EditForm by employe
  return <TabContainer employe={employe} />;
};

export default EmployeEdit;
