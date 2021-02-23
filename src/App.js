import React from 'react';
import AccountTable from './AccountTable';
import { AccountListStyled } from './styles';

function App() {
  const checkValue = rowData => {
    if (rowData.account_type === "cheque") {
      if (rowData.balance > -500) {
        alert('Success');
      }

    }
    if (rowData.account_type === "savings") {
      if (rowData.balance > 0) {
        alert('Success');
      }
    }
  }

  // ***** UI layout *****//
  const paymentsColumns = [
    {
      title: 'Account Number',
      field: 'account_number',
    },
    {
      title: 'Account Type',
      field: 'account_type',
    },
    {
      title: 'Balance',
      field: 'balance',
      render: rowData => {
        if (rowData.balance || rowData.balance === 0) {
          return (
            <p>{formatter.format(rowData.balance)}</p>
          );
        }
        return '-';
      },
    },

    {
      title: '',
      field: 'balance',
      render: rowData => {
        if (rowData.balance || rowData.balance === 0) {
          return (
            <button
              onClick={() => {
                checkValue(rowData);
              }}
              disabled={
                (rowData.account_type === "cheque" && rowData.balance < -500 ? true : false)
                || (rowData.account_type === "savings" && rowData.balance < 0 ? true : false)
              }
            >
              Withdraw
            </button>
          );
        }
        return '-';
      },
    },
  ];

  // ***** API call to fetch data *****//
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/api/accounts")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          console.log('error', error);
        }
      )
  }, []);


  // ***** Sum of the balance amount *****//
  const sum = data
    .map(item => parseInt(item.balance))
    .reduce((prev, curr) => prev + curr, 0);

  // ***** To format balance amount *****//
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 2
  })

  return (
    <AccountListStyled>
      <div className="body_container">
        <h2>Acme Bank</h2>
        <div className="container">
          <h3>Account List</h3>
          <AccountTable
            columns={paymentsColumns}
            data={data}
            options={{ paging: false }}
            title={
              <div className="summary_container">
                <div className="balance_title">
                  Balance
                </div>
                <div className="balance_value">
                  {formatter.format(sum)}
                </div>
              </div>
            }
          />
        </div>
      </div>
    </AccountListStyled>
  );
}

export default App;
