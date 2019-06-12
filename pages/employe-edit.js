import Layout from '../components/common/Layout';
import EmployeEdit from '../components/EmployePage/EmployeEdit/EmployeEdit';

const EditEmploye = props => {
  return (
    <Layout>
      <EmployeEdit {...props} />
    </Layout>
  );
};

EditEmploye.getInitialProps = async function(context) {
  const { id } = context.query;
  return { id };
};
export default EditEmploye;
