import Layout from '../components/common/Layout';
import EmployeAdd from '../components/EmployePage/EmployeAdd/EmployeAdd';

const AddEmploye = props => {
  return (
    <Layout>
      <EmployeAdd {...props} />
    </Layout>
  );
};

export default AddEmploye;
