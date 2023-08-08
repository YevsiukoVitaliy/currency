// material-ui
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  //   const [transactions, setTransactions] = useState([]);

  //   // useEffect(() => {
  //   //   axios.get('').then((response) => {
  //   //     setTransactions(response.data);
  //   //   });
  //   // }, []);

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {transactions &&
              transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>{transaction.status}</TableCell>
                </TableRow>
              ))} */}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default DashboardDefault;
